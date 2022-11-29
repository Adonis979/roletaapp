import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark w-100">
        <div className="container-fluid">
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home">
                  <a className="nav-link active text-white" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us">
                  <a className="nav-link text-white">About Us</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="src/common/navbar#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Types of Blind
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link to="/outside-blinds">
                      <a className="dropdown-item text-white">Outsite Blinds</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/store">
                      <a className="dropdown-item text-white">Store</a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/venetiane">
                      <a className="dropdown-item text-white">Venetiane</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
