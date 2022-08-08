import React from 'react'

export const DropDown = (props) => {
    function handleClick(event){
        console.log(event.params.value);
    }
  return (
    <div>
        <select name="tag" id="tag">
        <option value="select">Select</option>
        <option value="failedTrades">Failed Trades</option>
        <option value="misBookings">Mis-Bookings</option>
        <option value="timingIssues">Timing Issues</option>
        <option value="anyOther" onClick={handleClick}>Any Other</option>

        </select>
    </div>
  )
}
