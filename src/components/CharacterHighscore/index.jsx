
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Characters (){
    let { characterRank} = useParams();
    const [char,setChar] = useState([])
        useEffect(()=>{
            axios.get(`https://api.tibiadata.com/v3/character/${characterRank}`).then((res)=>{
                console.log(res)
                setChar(res.data)
            })
        },[])
        return (
            <div>
                <h1>hi</h1>
            </div>
        );
    
    
}

export default Characters

// "https://api.tibiadata.com/v3/character"