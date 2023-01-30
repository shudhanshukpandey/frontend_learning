
import './App.css';
import React, { Component } from 'react'    // use rcc to generate snippet for class based component
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  Route
} from 'react-router-dom'

export default class App extends Component {
  name="shudhanshu"
  render() {
    return (
      <div>

        <NavBar/>
        {/* <News country="in" catogery="general"/> */}
        <Routes>
          <Route exact path="/" element=             {<News key="general" country="in" catogery="general"/>}/>
          <Route exact path="/about" element=        {<News key="about" country="in" catogery="about"/>}/>
          <Route exact path="/business" element=     {<News key="business" country="in" catogery="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" catogery="entertainment"/>}/>
          <Route exact path="/science" element=      {<News key="science" country="in" catogery="science"/>}/>
          <Route exact path="/general" element=      {<News key="general" country="in" catogery="general"/>}/>
          <Route exact path="/health" element=       {<News key="health" country="in" catogery="health"/>}/>
          <Route exact path="/sports" element=       {<News key="sports" country="in" catogery="sports"/>}/>
          <Route exact path="/tech" element=         {<News key="tech" country="in" catogery="technology"/>}/>
        </Routes>         
                 
      </div>
    )         
  }
}
// keys are needed if same component is called again and again if not then react will not be able to find with props to pass at the moment
