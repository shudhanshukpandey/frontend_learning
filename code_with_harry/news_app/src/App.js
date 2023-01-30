
import './App.css';
import React, { Component } from 'react'    // use rcc to generate snippet for class based component
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  name="shudhanshu"
  render() {
    return (
      <div>

        <NavBar/>

        <News country="in" catogery="sports"/>
        
      </div>
    )
  }
}
