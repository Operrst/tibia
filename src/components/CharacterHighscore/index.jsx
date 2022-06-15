
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Characters (){
    let { characterRank} = useParams();
    const [char,setChar] = useState("")
        useEffect(()=>{
            axios.get(`https://api.tibiadata.com/v3/character/${characterRank}`).then((res)=>{
                console.log(res.data)
                setChar(res.data.characters.character)
            })
        },[])
        return (
           <table>
           <tbody>
                 
               <tr><td>Name: {char.name}</td></tr>
                <tr><td>Title: {char.title}</td></tr>
                <tr><td>Sex: {char.sex}</td></tr>
                <tr><td>Vocation: {char.vocation}</td></tr>
                <tr><td>Level: {char.level}</td></tr>
                <tr><td>Achievement Points: {char.achievement_points}</td></tr>
                <tr><td>World: {char.world}</td></tr> 
                <tr><td>Residence: {char.residence}</td></tr>
                <tr><td>Married To: {char.married_to}</td></tr>
                <tr><td>Guild Membership: {char.guild.name} {char.guild.rank}</td></tr>
                <tr><td>Last Login: {char.last_login}</td></tr>
                <tr><td>Comment: {char.comment}</td></tr>
                <tr><td>Account Status: {char.account_status}</td></tr>
                
            </tbody>
            </table>
        );
    
    
}

export default Characters

// "https://api.tibiadata.com/v3/character"