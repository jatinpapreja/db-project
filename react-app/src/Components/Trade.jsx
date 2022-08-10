import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import {NavbarTrade} from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'react-bootstrap';
import DeleteIcon from "./DeleteIcon";
import { getTradesOfSecurity } from '../API/tradeApi.js';
import {useParams} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

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

  const params = useParams();
  const bond_id = params.id;

  const deleteTrade = (params)=>{
    console.log(params.data);
  }

  const Wishlist = (params)=>{
    console.log(params);
  }

  // const securities = [
  //   {
  //       Id: 10,
  //       BookId: "abcdefg77j12",
  //       CounterpartyId: "1234plbcd",
  //       SecurityId: "Unknown",
  //       Quantity:5,
  //       Buy_Sell: "Buy",
  //       TradeDate: "30/08/2022",
  //       SettlementDate: "30/08/2023",
  //       UserId: "AAA",
  //       Price: "1000$",
  //       Status: "Paid",
  //     },
  //     {
  //       Id: 10,
  //       BookId: "abcdefg77j12",
  //       CounterpartyId: "1234plbcd",
  //       SecurityId: "Unknown",
  //       Quantity:5,
  //       Buy_Sell: "Buy",
  //       TradeDate: "30/08/2022",
  //       SettlementDate: "30/08/2023",
  //       UserId: "AAA",
  //       Price: "1000$",
  //       Status: "Paid",
  //     },
  //     {
  //       Id: 10,
  //       BookId: "abcdefg77j12",
  //       CounterpartyId: "1234plbcd",
  //       SecurityId: "Unknown",
  //       Quantity:5,
  //       Buy_Sell: "Buy",
  //       TradeDate: "30/08/2022",
  //       SettlementDate: "30/08/2023",
  //       UserId: "AAA",
  //       Price: "1000$",
  //       Status: "Paid",
  //     },
  //     {
  //       Id: 10,
  //       BookId: "abcdefg77j12",
  //       CounterpartyId: "1234plbcd",
  //       SecurityId: "Unknown",
  //       Quantity:5,
  //       Buy_Sell: "Buy",
  //       TradeDate: "30/08/2022",
  //       SettlementDate: "30/08/2023",
  //       UserId: "AAA",
  //       Price: "1000$",
  //       Status: "Paid",
  //     },{
  //       Id: 10,
  //       BookId: "abcdefg77j12",
  //       CounterpartyId: "1234plbcd",
  //       SecurityId: "Unknown",
  //       Quantity:5,
  //       Buy_Sell: "Buy",
  //       TradeDate: "30/08/2022",
  //       SettlementDate: "30/08/2023",
  //       UserId: "AAA",
  //       Price: "1000$",
  //       Status: "Paid",
  //     },
  //   {
  //     Id: 10,
  //     BookId: "abcdefg77j12",
  //     CounterpartyId: "1234plbcd",
  //     SecurityId: "Unknown",
  //     Quantity:5,
  //     Buy_Sell: "Buy",
  //     TradeDate: "30/08/2022",
  //     SettlementDate: "30/08/2023",
  //     UserId: "AAA",
  //     Price: "1000$",
  //     Status: "Paid",
  //   }
  // ];


  const [trades,setTrades] = useState([]);
  useEffect( () => {
    let componentMounted = true ;
  getTradesOfSecurity(bond_id)
        .then (trades => {
            if(componentMounted)
                setTrades(trades)
        })

        return () => componentMounted = false

    }, [])

    console.log(trades);


  const trade_heading = [
    {field:'id'},
    // {field:'BookId'},
    // {field:'CounterpartyId'},
    // {field:'SecurityId'},
    {field:'quantity',filter: 'agNumberColumnFilter'},
    {field:'status'},
    {field:'price',filter: 'agNumberColumnFilter'},
    {headerName:'Buy_Sell',field:'buy_sell'},
    {headerName:'Trade Date',field:'trade_date',filter:'agDateColumnFilter',filterParams: filterParams},
    {headerName:'Settlement Date',field:'settlement_date',filter:'agDateColumnFilter',filterParams: filterParams},
    // {field:'UserId'},
    {field:'',filter:false,cellRendererFramework:(params)=>
                                                      <div onClick={()=>deleteTrade(params)}>
                                                        <DeleteIcon />
                                                      </div>
                                                      },
  ];


  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
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


  const render = () => {
    if(trades.length == 0){
      return(
        <div class="d-flex justify-content-center align-items-center mt-4">
            <Spinner animation="border" />
            <p class="mt-3 ml-3">Loading Trades</p>
        </div>
      )
    }
    else{
      return (
        <div className="ag-theme-alpine" style={{height:600}}>
          <AgGridReact rowData={trades} columnDefs={trade_heading} 
          defaultColDef={defaultColDef} 
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={true}/>
        </div>
      )
      
    }
  }

  return (
    <div>
      <NavbarTrade name="User Name" id={bond_id}/>
      {render()}

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
