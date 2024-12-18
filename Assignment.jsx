import React, { useState } from 'react'
import Style from "./Assignment.module.css"


const InkoopAssignment = () => {
  
    let [valid,setValid] = useState("")

    let InputChange = (e)=>{
        let inputvalue = parseInt(e.target.value,10)

         if(isNaN(inputvalue)){
            setValid("Enter a Valid Number")
            return
         }



        if(inputvalue<0){
            setValid("Enter a Positive Value")  

        }
        else if(inputvalue % 2 === 0){

            setValid(`${inputvalue + 2},${inputvalue + 4},${inputvalue + 6}`)
        }
        else
        {
            setValid(`${inputvalue + 2},${inputvalue + 4},${inputvalue + 6}`)
        }
    }

    
  
    return (
    <div>
        <div className={Style.divBox}>
        <input type="text" placeholder="Enter a Number" onChange={InputChange} />
        <p id="message">{valid}</p>
      </div>
    </div>
  )
}

export default InkoopAssignment