import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navigation = _ => (
  <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
    <div className="navbar-nav collapse navbar-toggleable-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <i className="icn-logo material-icons">bookmark_border</i>
          Movies
        </NavLink>
        <div className="nav-items clearfix">
          <NavLink className="nav-item nav-link" to="/movies">
            All Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/search">
            Search Movie
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default withRouter(Navigation);
