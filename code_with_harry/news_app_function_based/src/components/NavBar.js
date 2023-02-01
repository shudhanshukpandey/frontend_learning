import React from 'react'
import { NavLink } from 'react-router-dom'



export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Indi-News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/tect">Tech</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
        
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}
