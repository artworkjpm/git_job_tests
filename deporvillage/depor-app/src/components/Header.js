import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact to="/" className="navbar-brand">
        <b>Order Explorer Test</b> <span>By John Moran</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink exact to="/" className="nav-link">
              App <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/details" className="nav-link">
              Details
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href=".."
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More information
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="..">
                github
              </a>
              <a className="dropdown-item" href="..">
                portfolio
              </a>
              <div className="dropdown-divider" />
              <NavLink to="/liked" className="nav-link">
                Did you like this test by John Moran?
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
