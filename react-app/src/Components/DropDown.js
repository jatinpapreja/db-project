import React from 'react'

export const DropDown = (props) => {
    function handleClick(event){
        console.log(event.params.value);
    }
  return (
    <div>
        <select name="tag" id="tag">
        <option value="failedTrades" onClick={handleClick}>Select</option>
        <option value="failedTrades" onClick={handleClick}>Failed Trades</option>
        <option value="misBookings"  onClick={handleClick}>Mis-Bookings</option>
        <option value="timingIssues" onClick={handleClick}>Timing Issues</option>
        <option value="anyOther" href="/user"> Any Other</option>
        </select>
    </div>
  )
}
