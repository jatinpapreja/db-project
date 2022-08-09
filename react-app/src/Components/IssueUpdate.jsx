
import React from "react";
import { Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import './IssueUpdate.css';

class IssueUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Action:'',
      Description:'',
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
              <h2>Enter Issue</h2>
              <h5>Enter Details :</h5>
            </div>
        <div className="baI">  
            <label className="labe">
                Action  
                <input className="inpu" type="text" value={this.state.value} name="Action" onChange={this.handleChange} />
            </label>
            <label className="labe">
                Description  
                <input className="desc-input" type="text" value={this.state.value} name="Description" onChange={this.handleChange} />
            </label>
                
                
            <Button variant="success" className="bt1 m-3 p-2" id="butnIU" onClick={this.handleSubmit}>Submit</Button>{' '}
        {this.state.change && <Navigate to="/wishlist" replace={true} />}
        <Button variant="success" className="bt1 m-3 p-2" id="butnIU" 
        onClick={this.handleCancel}
        >Cancel</Button>{' '}
        {this.state.change && <Navigate to="/wishlist" replace={true} />}
        </div>
  </div>
</section>
</div>
    );
  }
}

export default IssueUpdate;