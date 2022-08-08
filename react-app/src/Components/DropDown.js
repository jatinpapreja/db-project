import React from 'react'

export const DropDown = (props) => {
    function handleClick(){

    }
  return (
    <div>
        <select name="tag" id="tag">
        <option value="failedTrades">Failed Trades</option>
        <option value="misBookings">Mis-Bookings</option>
        <option value="timingIssues">Timing Issues</option>
        <option value="anyOther" onClick={handleClick}>Any Other</option>
        </select>
    </div>
  )
}
