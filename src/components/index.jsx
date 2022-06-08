import { useState ,useEffect} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

 function TibiaMarket() {
   const [tibia, setTibia] = useState("");
   const [characters, setCharacters] = useState([])
   useEffect(()=>{
       axios.get('https://api.tibiadata.com/v3/highscores/all/experience/all').then((res)=>{
            console.log(res.data)
             setTibia(res.data)
       })
   },[])
     return (
         <form>
             <table>
                 <tbody>
                   <tr>
                     <td>Rank</td>
                     <td>Name</td>
                     <td>Vocation</td>
                     <td>World</td>
                     <td>Level</td>
                     <td>Points</td>
                   </tr>
                   {characters.map((character)=>(
                   <tr key={character.rank}>
                       <td>{character.highscores.highscore_list.id}</td>
                   </tr>
                   ))}
                 </tbody>
             </table>
         </form>
     )
}
export default TibiaMarket;
// highscores.highscore_list

// return  (
//     <form>
//     <div>
//        <div className="main-site-container">
//            <div className="main-header"></div>
//            <div className="main-menu"></div>
//            <div className="main-content">
//             <div className="highscores"> 
//                <div className="border_1">
//                    <div className="border_2">
//                        <div className="BoxContent">
//                            <div className="TableContainer">
//                                <table className="table1">
//                                    <tbody>
//                                        <tr>
//                                            <td>
//                                                <div className="InnerTableContainer">
//                                                   <div>"elo"</div>
//                                                </div>
//                                            </td>
//                                        </tr>
//                                    </tbody>
//                                </table>
//                            </div>
//                        </div>
//                    </div>
//                </div>  
//              </div> 
//            </div>
//            <div className="main-themboxes"></div>
//        </div>
//     </div>
//     </form>
//    )
// }