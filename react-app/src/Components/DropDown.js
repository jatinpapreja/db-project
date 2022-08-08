import React from 'react'

export const DropDown = (props) => {
    function handleClick(event){
        console.log(event.params.value);
    }
  return (
    <div>
        <select name="tag" id="tag">
<<<<<<< HEAD
        <option value="select">Select</option>
        <option value="failedTrades">Failed Trades</option>
        <option value="misBookings">Mis-Bookings</option>
        <option value="timingIssues">Timing Issues</option>
        <option value="anyOther" onClick={handleClick}>Any Other</option>
=======

        <option value="failedTrades" onClick={handleClick}>Select</option>
        <option value="failedTrades" onClick={handleClick}>Failed Trades</option>
        <option value="misBookings"  onClick={handleClick}>Mis-Bookings</option>
        <option value="timingIssues" onClick={handleClick}>Timing Issues</option>
        <option value="anyOther" href="/user"> Any Other</option>
>>>>>>> 33388a4ca8b4f7b85055d8ed5d9966a6d484faf8

        </select>
    </div>
  )
}
