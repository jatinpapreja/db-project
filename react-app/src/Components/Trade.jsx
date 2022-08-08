import React, { useCallback, useMemo, useRef, useState } from 'react';
import {NavbarTrade} from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'react-bootstrap';

let filterParams = {
  suppressAndOrCondition: true,
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};


function Trade(props) {

  const deleteTrade = (params)=>{
    console.log(params.data);
  }

  const Wishlist = (params)=>{
    console.log(params);
  }

  const securities = [
    {
        Id: 10,
        BookId: "abcdefg77j12",
        CounterpartyId: "1234plbcd",
        SecurityId: "Unknown",
        Quantity:5,
        Buy_Sell: "Buy",
        TradeDate: "30/08/2022",
        SettlementDate: "30/08/2023",
        UserId: "AAA",
        Price: "1000$",
        Status: "Paid",
      },
      {
        Id: 10,
        BookId: "abcdefg77j12",
        CounterpartyId: "1234plbcd",
        SecurityId: "Unknown",
        Quantity:5,
        Buy_Sell: "Buy",
        TradeDate: "30/08/2022",
        SettlementDate: "30/08/2023",
        UserId: "AAA",
        Price: "1000$",
        Status: "Paid",
      },
      {
        Id: 10,
        BookId: "abcdefg77j12",
        CounterpartyId: "1234plbcd",
        SecurityId: "Unknown",
        Quantity:5,
        Buy_Sell: "Buy",
        TradeDate: "30/08/2022",
        SettlementDate: "30/08/2023",
        UserId: "AAA",
        Price: "1000$",
        Status: "Paid",
      },
      {
        Id: 10,
        BookId: "abcdefg77j12",
        CounterpartyId: "1234plbcd",
        SecurityId: "Unknown",
        Quantity:5,
        Buy_Sell: "Buy",
        TradeDate: "30/08/2022",
        SettlementDate: "30/08/2023",
        UserId: "AAA",
        Price: "1000$",
        Status: "Paid",
      },{
        Id: 10,
        BookId: "abcdefg77j12",
        CounterpartyId: "1234plbcd",
        SecurityId: "Unknown",
        Quantity:5,
        Buy_Sell: "Buy",
        TradeDate: "30/08/2022",
        SettlementDate: "30/08/2023",
        UserId: "AAA",
        Price: "1000$",
        Status: "Paid",
      },
    {
      Id: 10,
      BookId: "abcdefg77j12",
      CounterpartyId: "1234plbcd",
      SecurityId: "Unknown",
      Quantity:5,
      Buy_Sell: "Buy",
      TradeDate: "30/08/2022",
      SettlementDate: "30/08/2023",
      UserId: "AAA",
      Price: "1000$",
      Status: "Paid",
    }
  ];

  const trade_heading = [
    {field:'Id'},
    {field:'BookId'},
    {field:'CounterpartyId'},
    {field:'SecurityId'},
    {field:'Quantity',filter: 'agNumberColumnFilter'},
    {field:'Status'},
    {field:'Price',filter: 'agNumberColumnFilter'},
    {field:'Buy_Sell'},
    {field:'TradeDate',filter:'agDateColumnFilter',filterParams: filterParams},
    {field:'SettlementDate',filter:'agDateColumnFilter',filterParams: filterParams},
    {field:'UserId'},
    {field:'',filter:false,cellRendererFramework:(params)=>
                                   <button className='btn btn-danger'
                                   onClick={()=>deleteTrade(params)}>Delete</button>},
  ];


  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      filter: true,
      filterParams:{suppressAndOrCondition: true},
      resizable: true,
    };
  }, []);

  // const onGridReady = useCallback((params) => {
  //   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .then((resp) => resp.json())
  //     .then((data) => setRowData(data));
  // }, []);

  return (
    <div>
      <NavbarTrade name="User Name" />
      <div className="ag-theme-alpine" style={{height:1000}}>
        <AgGridReact rowData={securities} columnDefs={trade_heading} 
        defaultColDef={defaultColDef} />
      </div>

    {/* <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div> */}
  
    </div>
  );
}

export default Trade;
