
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./styles.css";
function Characters (){
    let { characterRank} = useParams("");
    const [char,setChar] = useState("")
        useEffect(()=>{
            axios.get(`https://api.tibiadata.com/v3/character/${characterRank}`).then((res)=>{
                console.log(res.data)
                setChar(res.data.characters.character)
            })
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
           <table>
           <tbody>
                 
                <tr><td className='background'>Name: {char.name}</td></tr>
                <tr><td className='backgroundbrown'>Title: {char.title}</td></tr>
                <tr><td className='background'>Sex: {char.sex}</td></tr>
                <tr><td className='backgroundbrown'>Vocation: {char.vocation}</td></tr>
                <tr><td className='background'>Level: {char.level}</td></tr>
                <tr><td className='backgroundbrown'>Achievement Points: {char.achievement_points}</td></tr>
                <tr><td className='background'>World: {char.world}</td></tr> 
                <tr><td className='backgroundbrown'>Residence: {char.residence}</td></tr>
                <tr><td className='background'>Married To: {char.married_to}</td></tr>
                <tr><td className='backgroundbrown'>Last Login: {char.last_login}</td></tr>
                <tr><td className='background'>Comment: {char.comment}</td></tr>
                <tr><td className='backgroundbrown'>Account Status: {char.account_status}</td></tr>
                
            </tbody>
            </table>
            </form>
        );
    
    
}

export default Characters

// "https://api.tibiadata.com/v3/character"