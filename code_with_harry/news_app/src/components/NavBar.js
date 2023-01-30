import React, { Component } from 'react'
import PropTypes from 'prop-types'                //rcep is used

export class NavBar extends Component {           // input and hr tag needs to be closed with '/'
  static propTypes = {
                                                    // href="#" will cause issue change it to '/' or '/link_name'
  }

  render() {
    return (
      <>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/">About</a></li>

        {/*adding multi catogeroies for news */}

        <li className="nav-item"><a className="nav-link" href="/">business</a></li>
        <li className="nav-item"><a className="nav-link" href="/">entertaainment</a></li>
        <li className="nav-item"><a className="nav-link" href="/">general</a></li>
        <li className="nav-item"><a className="nav-link" href="/">health</a></li>
        <li className="nav-item"><a className="nav-link" href="/">science</a></li>
        <li className="nav-item"><a className="nav-link" href="/">sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/">techonology</a></li>
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
