import React, {Component} from 'react';
import './home.css';
import log from '../../assets/Craneo frontal.jpg';


class home extends Component  {
  render() {
    return(

<div className="contenedor">

<div className="craneo"><h1>Craneo</h1></div>
<div className="craneo1"><img src={log} alt="Smiley face" height="300" width="300"/></div>

</div>
    );
  }
}
export default home;
