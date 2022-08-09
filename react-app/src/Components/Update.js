import React from "react";
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './Create.css';
import {updateSecurity} from '../API/securityApi'

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      isin: '',
      cusip: '',
      issuer: '',
      maturity_date: '',
      coupon: '',
      type: '',
      facevalue: '',
      status: '',
      // change: false
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({ change: true })
    console.log(this.state);
    updateSecurity(this.state);
    alert('Details submitted');
  }
  handleCancel = (event) => {
    this.setState({ change: true })
  }

  render() {
    return (

      <div>
      <section className="Reg">
        <div className='container mt-9'>
        <div>
              <h2>Update Security</h2>
              <h5 className="detailU">Enter Details :</h5>
            </div>
        <div className="baU">  
            <label className="labe">
                Id  :
                <input className="inpu" type="text" value={this.state.value} name="id" onChange={this.handleChange} />
            </label>
            <label className="labe">
                ISIN  :
                <input className="inpu" type="text" value={this.state.value} name="isin" onChange={this.handleChange} />
            </label><label className="labe">
                CUSIP  :
                <input className="inpu" type="text" value={this.state.value} name="cusip" onChange={this.handleChange} />
            </label>
            <label className="labe">
                Issuer   :
                <input className="inpu" type="text" value={this.state.value} name="issuer" onChange={this.handleChange} />
            </label>
            <label className="labe">
             Maturity Date :
                <input className="inpu" type="text" value={this.state.value} name="maturity_date" onChange={this.handleChange} />
            </label>
            <label className="labe">
              Coupon  :
                <input className="inpu" type="text" value={this.state.value} name="coupon" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Type  :
                <input className="inpu" type="text" value={this.state.value} name="type" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Face Value  :
                <input className="inpu" type="text" value={this.state.value} name="facevalue" onChange={this.handleChange} />
            </label>
            <label className="labe">
              Status  :
                <input className="inpu" type="text" value={this.state.value} name="status" onChange={this.handleChange} />
            </label>
            <Button variant="success" className="bt1 m-3 p-2" id="butn" onClick={this.handleSubmit}>Submit</Button>{' '}
        {this.state.change && <Navigate to="/user" replace={true} />}
        <Button variant="success" className="bt1 m-3 p-2" id="butn" 
        onClick={this.handleCancel}
        >Cancel</Button>{' '}
        {this.state.change && <Navigate to="/user" replace={true} />}
        </div>
  </div>
</section>
</div>
    );
  }
}

export default Update;
