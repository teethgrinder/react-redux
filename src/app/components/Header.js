import React from "react";
import {withRouter} from "react-router";
import {BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
const Header = (props) => {
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link" to="/">Spider</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" >
                <NavLink className="nav-link" activeClassName="selected"  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeClassName="selected" to={`/user/${props.username}`}>User</NavLink>
              </li>

            </ul>

          </div>
        </nav>

    );
}
const withHeader= withRouter(Header);
export {withHeader as Header}
