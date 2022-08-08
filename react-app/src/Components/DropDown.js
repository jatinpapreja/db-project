import React from 'react'

export const DropDown = (props) => {
    function handleClick(){
        
    }
  return (
    <div>
        <select name="cars" id="cars">
        <option value="volvo">Failed Trades</option>
        <option value="saab">Mis-Bookings</option>
        <option value="mercedes">Timing Issues</option>
        <option value="audi" onClick={handleClick}>Any Other</option>
        </select>
    </div>
  )
}
