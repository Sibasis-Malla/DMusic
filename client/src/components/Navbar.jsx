import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg my-1  bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <Link to="/Home" style={{textDecoration:'none', color: '#FFF' }}>DMusic</Link>
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item"></li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/Home"style={{textDecoration:'none', color: '#FFF' }}>Home</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/License"style={{textDecoration:'none', color: '#FFF' }}>License</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/Payments"style={{ textDecoration:'none',color: '#FFF' }}>Payments</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
  );
}
export default Navbar;

