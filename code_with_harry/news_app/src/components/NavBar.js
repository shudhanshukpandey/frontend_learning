import React, { Component } from 'react'
import PropTypes from 'prop-types'     //rcep is used


import { NavLink } from 'react-router-dom'
export class NavBar extends Component {           // input and hr tag needs to be closed with '/'
  static propTypes = {
                                                    // to="#" will cause issue change it to '/' or '/link_name'
  }

  render() {
    return (
      <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">News-App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>

        {/*adding multi catogeroies for news */}

        <li className="nav-item"><NavLink className="nav-link" to="/business">business</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/entertainment">entertaainment</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/general">general</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/health">health</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/science">science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/sports">sports</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/tech">techonology</NavLink></li>
      {/* use alt+shift+ctrl + arrow */}



      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </>
    )
  }
}

export default NavBar
