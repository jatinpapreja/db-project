import React, { useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {NavbarSecurity} from "./Navbar";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from 'react-bootstrap';
import DeleteIcon from './DeleteIcon';
import server from '../API/server';
import {getSecurities,deleteSecurity} from '../API/securityApi.js'

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

  // fetch details of user...
  const userWishlist = [];

  // const deleteSecurity = (params)=>{
  //   console.log(params.data);
  // }

  const Wishlist = (params)=>{
    // console.log(params);
    userWishlist.push(params.data);
  }

  async function addToWishlist(){
      // call post method to add "userWishlist"
      for(let security of userWishlist){
        server.post(`api/v1/setActionerForSecurity/${security.id}/actioner/2`,{});
        console.log(security.id);
      }
      console.log('Added to Users Wishlist');
      
  }

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
    {field:'id',cellRendererFramework:(params)=>
    <a href={"/trade/"+params.data.id}>{params.data.id}</a>},
    {headerName:'Add To WishList',field:'Add To WishList',filter:false,cellRendererFramework:(params)=>
                                    <input type="checkbox" onClick={()=>Wishlist(params)}></input>},
    {headerName:'ISIN',field:'isin',minWidth:120,},
    {headerName:'CUSIP',field:'cusip'},
    {field:'issuer'},
    {headerName:"Maturity Date",field:'maturity_date',filter: 'agDateColumnFilter',filterParams: filterParams},
    {field:'coupon'},
    {field:'type'},
    {headerName:'Face Value',field:'facevalue'},
    {field:'status'},
    {headerName:'Actioner ID',field:'actioner'},
    {field:'',filter:false,cellRendererFramework:(params)=>
                                  <div onClick={()=>deleteSecurity(params.data.id)}>
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


  if (securities.length === 0) {
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
