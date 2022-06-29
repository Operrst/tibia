import { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import { Link } from "react-router-dom";


 function TibiaMarket() {
   const [data, setData] = useState([]);
   
   useEffect(()=>{
     if(data){
       axios.get('https://api.tibiadata.com/v3/highscores/all/experience/all').then((res)=>{
            console.log(res.data.highscores.highscore_list)
            setData(res.data.highscores.highscore_list)
       })}
       else {
         {data.map((dat)=>(dat.length > 0 ? data.map : <div>Nothing there</div>))}
        }
   },[])

  

     return (
       
         <form style={{ 
          backgroundImage: `url("https://static.tibia.com/images/global/header/background-artwork.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
         
        }}>
           <div className="Continer">
             <table>
                 <tbody  >
                   <tr className="DoNotBreak" >
                     <td>Rank</td>
                     <td>Name</td>
                     <td>Vocation</td>
                     <td>World</td>
                     <td>Level</td>
                     <td>Points</td>
                      </tr>
                      {data.map((dat,index)=> 
                       <tr  className={`${index % 2 == 0 ? 'background-brown' : 'background'}`} key={dat.rank} >
                        <td>{dat.rank}</td>
                        <td ><Link to={`/character/${dat.name}`}>{dat.name}</Link></td>
                        <td>{dat.vocation}</td>
                        <td>{dat.world}</td>
                        <td>{dat.level}</td>
                        <td>{dat.value}</td>
                        <td>
                        </td>
                        </tr>
                   
                   )}
                 </tbody>
             </table>
             </div>
         </form>
     )
}
export default TibiaMarket;
