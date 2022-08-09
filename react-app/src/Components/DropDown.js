import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const DropDown = (props) => {
  const navigate = useNavigate();
    function handleChange(event){
        console.log((event.target.value));

        if(event.target.value === "Any Other")
          {navigate("/Issueupdate");}
    }

    const options = ["Failed Trades","Mis-Bookings", "Timing Issues"];
    
    function handleClick(){
        console.log(props.content);
    }

  return (
    <div onClick={handleClick}>
        <select defaultValue="Select" name="tag" id="tag"  onChange={(params)=>handleChange(params)}>

        <option value="Select" disabled>Select</option>
        {
          options.map(op=>{
            return (
              <option value={op}>{op}</option>
            )
          })
        }
        <option value="Any Other"> Any Other</option>

        </select>
    </div>

  )
}