import React from 'react';
import logo from './logo.svg';
import './App.css';

import CompVar from "./components/MyComponent";

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
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
  return (
    <div>
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