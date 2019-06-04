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
          <li className="nav-item">
            <NavLink to="/details" className="nav-link">
              Explaination
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
              <a
                className="dropdown-item"
                href="https://github.com/artworkjpm/git_job_tests/tree/master/deporvillage/depor-app"
              >
                github
              </a>
              <a
                className="dropdown-item"
                target="blank"
                href="http://journeyofjpm.blogspot.com/p/work-examples.html"
              >
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
