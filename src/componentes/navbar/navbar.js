import React, {Component} from 'react';
import './navbar.css';
//var NavItem = require('./NavItem');
import logo from '../../assets/descarga (2).jpg';
class navbar extends Component  {
  render() {
    return(
      <div className='Barra'>
        <img src={logo} alt="Smiley face" height="42" width="42"/>
        <h1>Happy Bone</h1>
        <button className="dropbtn">paracetamol</button>
      </div>
    );
  }
}
export default navbar;
