import React, { Component } from 'react';

import {Routes} from './routes';
import Nav from './componentes/navbar/navbar';
import Home from './componentes/home/home';
//import Footer from './componentes/footer/Footer';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div>
              <Routes/>
              <Nav/>
              <Home/>

        </div>
      </div>
    );
  }
}

export default App;
