import React, { useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {NavbarSecurity} from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'react-bootstrap';
import DeleteIcon from './DeleteIcon';
import {getSecurities} from '../API/securityApi.js'

const INITIAL_SECURITIES = []


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


function User(props) {

  const userWishlist = [];

  const deleteSecurity = (params)=>{
    console.log(params.data);
  }

  const Wishlist = (params)=>{
    // console.log(params);
    userWishlist.push(params.data);
  }

  function addToWishlist(){
      // call post method to add "userWishlist"
      console.log('Added to Users Wishlist');
      
  }


  // const securities = [
  //   {
  //     Id: 1,
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
  //     ISIN: "abcghfghij12",
  //     CUSIP: "123a5abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "12/07/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Failed",
  //     Action: "In Progress"
  //   },
  //   {
  //     Id: 3,
  //     ISIN: "ajkdefghij12",
  //     CUSIP: "1vh45abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "25/09/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Failed",
  //   },
  //   {
  //     Id: 4,
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
  //     ISIN: "abmlefghij12",
  //     CUSIP: "12345anld",
  //     Issuer: "Unknown",
  //     MaturityDate: "26/10/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Failed",
  //     Action: "In Progress"
  //   },
  //   {
  //     Id: 6,
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
  //     ISIN: "abcdefgh6712",
  //     CUSIP: "12365abcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "12/01/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Failed",
  //   },
  //   {
  //     Id: 8,
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
  //     ISIN: "abcdefg77j12",
  //     CUSIP: "1234plbcd",
  //     Issuer: "Unknown",
  //     MaturityDate: "30/08/2022",
  //     Coupon: "5%",
  //     Type: "AAA",
  //     FaceValue: "1000$",
  //     Status: "Failed",
  //     Action: "In Progress"
  //   }
  // ];

  const [securities,setSecurities] = useState(INITIAL_SECURITIES);
  useEffect( () => {
    let componentMounted = true ;
  getSecurities()
        .then (securities => {
            if(componentMounted)
                setSecurities(securities)
        })

        return () => componentMounted = false

    }, [])

    console.log(securities);

  const securities_heading = [
    {field:'id'},
    {headerName:'Add To WishList',field:'Add To WishList',filter:false,cellRendererFramework:(params)=>
                                    <input type="checkbox" onClick={()=>Wishlist(params)}></input>},
    {headerName:'ISIN',field:'isin',minWidth:120,cellRendererFramework:(params)=>
                                        <a href={"/trade/"+params.data.isin}>{params.data.isin}</a>},
    {headerName:'CUSIP',field:'cusip'},
    {field:'issuer'},
    {headerName:"Maturity Date",field:'maturity_date',filter: 'agDateColumnFilter',filterParams: filterParams},
    {field:'coupon'},
    {field:'type'},
    {headerName:'Face Value',field:'facevalue'},
    {field:'status'},
    {headerName:'Actioner ID',field:'actioner'},
    {field:'',filter:false,cellRendererFramework:(params)=>
                                  <div onClick={()=>deleteSecurity(params)}>
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


  if (securities.length == 0) {
    return (
      <div>
        <NavbarSecurity name="User Name" />
         <p> No Securities data yet!..</p>

      </div>
      
    );
}

  return (
    <div>
      <NavbarSecurity name="User Name" />
      <Button style={{marginLeft:10}} onClick={addToWishlist}>Add to WishList</Button>
      <div className="ag-theme-alpine" style={{height:600}}>
        <AgGridReact rowData={securities} columnDefs={securities_heading} 
        defaultColDef={defaultColDef} 
        pagination={true}
        paginationPageSize={10}
        paginationAutoPageSize={true}/>
      </div>


    
    </div>
  );
}

export default User;
