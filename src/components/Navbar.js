import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${document.body.style.backgroundColor==='white'?'light':'dark'} bg-${document.body.style.backgroundColor==='white'?'light':'dark'} `}>
  <div className="container-fluid fs-3">
    {/* <Link className="navbar-brand" to="/textutils">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 column-gap-3">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"><h1>Home</h1></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Ticket">{props.navbar_item1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Concert">{props.navbar_item2}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Login">{props.navbar_item3}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.about}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-blue" style={{"backgroundColor":"blue"}}onClick={props.toggleMode}>Blue</button>
  <button type="button" className="btn btn-grey" style={{"backgroundColor":"grey"}} onClick={props.toggleModeGrey}>Grey</button>
  <button type="button" className="btn btn-black" style={{"backgroundColor":"black"}}onClick={props.toggleModeBlack}>Black</button>

</div>

      <div className={`form-check form-switch text-${document.body.style.backgroundColor==='white'?'dark':'light'}`}>
 
  <label className="fs-4" htmlFor="flexSwitchCheckDefault">Change Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes={
    // title:PropTypes.string,
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "set title here",
    about:"About "
}
