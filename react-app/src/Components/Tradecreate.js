import React from "react";
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './Tradecreate.css';
// import { withRouter } from "react-router";



class Tradecreate extends React.Component {

//   componentDidMount() {
//     const bond_id = this.props.match.params.id;
//     this.fetchData(bond_id);
// }
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
          // change: false
        };
      }
      handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit = (event) => {
        this.setState({ change: true })
        console.log(this.state);
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
                  <h2>Create Trade</h2>
                  <h5 className="detailT">Enter Details :</h5>
                </div>
            <div className="baC">  
                <label className="labeT">
                Id:
                <input className="inpuT" type="text" value={this.state.value} name="id" onChange={this.handleChange} />
            </label>
            <label className="labeT">
                Book Id:
                <input className="inpuT" type="text" value={this.state.value} name="bookid" onChange={this.handleChange} />
            </label><label className="labeT">
                Counterparty_Id:
                <input className="inpuT" type="text" value={this.state.value} name="counterpartyid" onChange={this.handleChange} />
            </label>
            <label className="labeT">
                Security_Id:
                <input className="inpuT" type="text" value={this.state.value} name="securityid" onChange={this.handleChange} />
            </label>
            <label className="labeT">
              Quantity:
                <input className="inpuT" type="text" value={this.state.value} name="quantity" onChange={this.handleChange} />
            </label>
            <label className="labeT">
              Status:
                <input className="inpuT" type="text" value={this.state.value} name="status" onChange={this.handleChange} />
            </label>
            <label className="labeT">
            Price:
                <input className="inpuT" type="text" value={this.state.value} name="price" onChange={this.handleChange} />
            </label>
            <label className="labeT">
            Buy_Sell:
                <input className="inpuT" type="text" value={this.state.value} name="buy_sell" onChange={this.handleChange} />
            </label>
            <label className="labeT">
            Trade_Date:
                <input className="inpuT" type="text" value={this.state.value} name="tradedate" onChange={this.handleChange} />
            </label>
            <label className="labeT">
            Settlement_Date:
                <input className="inpuT" type="text" value={this.state.value} name="settlementdate" onChange={this.handleChange} />
            </label>
            <label className="labeT">
            User_Id:
                    <input className="inpuT" type="text" value={this.state.value} name="userid" onChange={this.handleChange} />
                </label>
                <Button variant="success" className="bt1 m-3 p-2" id="butnT" onClick={this.handleSubmit}>Submit</Button>{' '}
            {this.state.change && <Navigate to="/trade/:id" replace={true} />}
            <Button variant="success" className="bt1 m-3 p-2" id="butnT" 
            onClick={this.handleCancel}
            >Cancel</Button>{' '}
            {this.state.change && <Navigate to={"/trade/:id"} replace={true} />}
            </div>
      </div>
    </section>
    </div>
        );
      }
    }
    
export default Tradecreate;
