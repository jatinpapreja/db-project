import React from "react";
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './Tradecreate.css';

class Tradeupdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      bookid: '',
      counterpartyid: '',
      securityid: '',
      quantity: '',
      status: '',
      price: '',
      buy_sell: '',
      tradedate: '',
      settlementdate: '',
      userid:'',
      change: false
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    this.setState({ change: true })
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
              <h2>Update Trade</h2>
              <h5>Enter Details :</h5>
            </div>
        <div className="ba">  
            <label className="labe">
                Id:
                <input className="inpu" type="text" value={this.state.value} name="id" onChange={this.handleChange} />
            </label>
            <label className="labe">
                Book Id:
                <input className="inpu" type="text" value={this.state.value} name="bookid" onChange={this.handleChange} />
            </label><label className="labe">
                Counterparty_Id:
                <input className="inpu" type="text" value={this.state.value} name="counterpartyid" onChange={this.handleChange} />
            </label>
            <label className="labe">
                Security_Id:
                <input className="inpu" type="text" value={this.state.value} name="securityid" onChange={this.handleChange} />
            </label>
            <label className="labe">
              Quantity:
                <input className="inpu" type="text" value={this.state.value} name="quantity" onChange={this.handleChange} />
            </label>
            <label className="labe">
              Status:
                <input className="inpu" type="text" value={this.state.value} name="status" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Price:
                <input className="inpu" type="text" value={this.state.value} name="price" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Buy_Sell:
                <input className="inpu" type="text" value={this.state.value} name="buy_sell" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Trade_Date:
                <input className="inpu" type="text" value={this.state.value} name="tradedate" onChange={this.handleChange} />
            </label>
            <label className="labe">
            Settlement_Date:
                <input className="inpu" type="text" value={this.state.value} name="settlementdate" onChange={this.handleChange} />
            </label>
            <label className="labe">
            User_Id:
                <input className="inpu" type="text" value={this.state.value} name="userid" onChange={this.handleChange} />
            </label>
            <Button variant="success" className="bt1 m-3 p-2" id="butn" onClick={this.handleSubmit}>Submit</Button>{' '}
        {this.state.change && <Navigate to="/trade/:id" replace={true} />}
        <Button variant="success" className="bt1 m-3 p-2" id="butn" 
        onClick={this.handleCancel}
        >Cancel</Button>{' '}
        {this.state.change && <Navigate to="/trade/:id" replace={true} />}
        </div>
  </div>
</section>
</div>
    );
  }
}

export default Tradeupdate;
