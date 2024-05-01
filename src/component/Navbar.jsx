import React from 'react';
import { UserProfile } from './user/UserProfile';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <div className="content">
        <div className="container-fluid"></div>
    <div className="main-panel">
        <nav className="navbar navbar-expand-lg fixed">
  <div className="container-fluid">
    <a className="navbar-brand" href="/user/dashbord" margine-right="50vw">
      {" "}
      Dashboard{" "}
    </a>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navigation"
    >
      <ul className="nav navbar-nav mr-auto" margine-right="50vw">
       
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nc-icon nc-zoom-split" />
            <span className="d-lg-block">&nbsp;Search</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/user/profile">
            <span className="no-icon">Account</span>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#pablo">
            <span className="no-icon">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

    </div>

    </>
  )}