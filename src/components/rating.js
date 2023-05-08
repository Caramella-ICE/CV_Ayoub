import React from "react";
import { useEffect } from "react";



function Rating({rating}){
   

    let ratings=[]
    
        
        for(let i =0 ;i<5;i++){
            let color;
            (i+1) <= rating ? color= "green" : color= "lightgray"
            ratings.push(<div key={i} style={{backgroundColor: color}}></div>)
        }

    

    return(<div className="rating" >
        {ratings}
    </div>)
}
export default Rating;