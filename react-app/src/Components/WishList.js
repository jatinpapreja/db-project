import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import {NavbarWishlist} from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'react-bootstrap';
import {DropDown}  from './DropDown';
import {AiFillDelete} from "react-icons/fa";
import server from '../API/server';

 
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


function WishList(props) {

  const userName = localStorage.getItem("username");
  const userId = localStorage.getItem('userID');
  const assignTag = (params)=>{
    console.log(params.data);
    // const val = document.getElementById("tag").value;
    // console.log(val);
  }

  async function getUserWishlist(userId) {
    const response = await server.get(`api/v1/getWishlist?ID=1`);
    return response.data;
}

  const [securities,setSecurities] = useState([]);
  useEffect( () => {
    let componentMounted = true ;
  getUserWishlist(userId)
        .then (securities => {
            if(componentMounted)
                setSecurities(securities)
        })

        return () => componentMounted = false

    }, [])



  // const securities = [
  //   {
  //     Id: 1,
  //     Tag: null,
  //     ISIN: "abcdefghij12",
  //     CUSIP: "12345abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "20/08/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 2,
  //     Tag: null,
  //     ISIN: "abcghfghij12",
  //     CUSIP: "123a5abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "12/07/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 3,
  //     Tag: null,
  //     ISIN: "ajkdefghij12",
  //     CUSIP: "1vh45abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "25/09/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 4,
  //     Tag: null,
  //     ISIN: "abcdqrghij12",
  //     CUSIP: "12345ayud",
  //     Issuer: "Unknown",
  //     MaturityDate: "19/06/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 5,
  //     Tag: null,
  //     ISIN: "abmlefghij12",
  //     CUSIP: "12345anld",
  //     Issuer: "Unknown",
  //     MaturityDate: "26/10/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 6,
  //     Tag: null,
  //     ISIN: "abcd67fghij12",
  //     CUSIP: "10l45abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "20/05/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 7,
  //     Tag: null,
  //     ISIN: "abcdefgh6712",
  //     CUSIP: "12365abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "12/01/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 8,
  //     Tag: null,
  //     ISIN: "abcdev8hij12",
  //     CUSIP: "12345a5cd",
  //     Issuer: "Unknown",
  //     MaturityDate: "22/11/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 9,
  //     Tag: null,
  //     ISIN: "abcdefibij12",
  //     CUSIP: "12345c8cd",
  //     Issuer: "Unknown",
  //     MaturityDate: "28/12/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   },
  //   {
  //     Id: 10,
  //     Tag: null,
  //     ISIN: "abcdefg77j12",
  //     CUSIP: "1234plbcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "30/08/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Paid",
  //   }
  // ];

  const securities_heading = [
    {field:'id'},
    {field:'tag', minWidth:130, cellRendererFramework:(params) => <DropDown content = {params.data} />},
    {field:'isin',cellRendererFramework:(params)=>
                                        <a href={"/trade/"+params.data.ISIN}>{params.data.ISIN}</a>},
    {field:'cusip'},
    {field:'issuer'},
    {field:'maturity_date',filter: 'agDateColumnFilter',filterParams: filterParams},
    {field:'coupon'},
    {field:'type'},
    {field:'facevalue'},
    {field:'status'},
    {field:'',filter:false,cellRendererFramework:(params)=>
                                   <button className='btn btn-success'
                                   onClick={()=>assignTag(params)}>Assign</button>},
    
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

  return (
    <div>
      <NavbarWishlist name={userName} id={userId}/>
      <div className="ag-theme-alpine" style={{height:600}}>
        <AgGridReact rowData={securities} columnDefs={securities_heading} 
        defaultColDef={defaultColDef} 
        pagination={true}
        paginationPageSize={10}
        paginationAutoPageSize={true}/>
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

export default WishList;
