import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CompVar from "./components/MyComponent";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hi'
    };
  }
  updateState = (message) => {
    if (this.state.msg !== message)
      this.setState({ msg: message });
  }
  render() {
    this.rand = Math.floor(Math.random() * 100);
    return (
      <div className="container">
        <div className="row">
          <div>
            <h3>{this.state.msg}</h3>
            <h5>{this.rand}</h5>
            <button onClick={() => { this.updateState('Hello') }} >Change State</button>
          </div>
          <div className="col-2">
            <img src={this.props.pic} width="50px" />
          </div>
          <div className="col-6" style={{ fontSize: 24 }}>
            {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

const Information = (props) => {
  const [getMsg, setMsg] = useState('funState Hi');
  const [getCounter, setCounter] = useState(0);
  const updateCounter = () => {
    // ToDo
    // Write code to update Counter
  }
  return (
    <div>
      <h3>State: {getMsg}</h3>
      <h5>Counter: {getCounter}</h5>
      <button onClick={() => { setCounter(Math.floor(Math.random() * 100)) }} >New Randome Number</button>
      <p>Address: {props.data.address}</p>
      <p>City: {props.data.city}</p>
      <p>Email: {props.data.email}</p>
    </div>
  );
}

function App() {
  const info = {
    address: "H 33, St 99, ParkRoad",
    city: "Islamabad",
    phone: "+9234243442",
    email: "email@email.com"
  }
  return (
    <div className="container">
      <Header
        name="Zaheer Sani"
        pic="https://bmc.edu.pk/wp-content/uploads/2019/03/doctor-red-1.png"
      />
      <Information
        data={info}
      />
    </div>
  );
}

export default App;