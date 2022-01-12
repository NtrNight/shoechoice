/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/appbar.css";
import { Link, NavLink } from "react-router-dom";

class AppBar extends React.Component {
    render(){
        return (
            <header className="shadow-sm position-sticky top-0 bg-white border-bottom">
                <nav className="navbar navbar-expand-lg navbar-light container-lg container-md container-sm">
                    <div className="container-fluid d-flex align-items-center">
                        <Link className="navbar-brand text-title me-5 fs-1" to={`/`}>ShoeChoice</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav align-items-center row w-100 justify-content-between">
                                <li className="nav-item col-lg-5 p-0">
                                    <div className="input-group">
                                        <i className="bi bi-search input-group-text" id="basic-addon1"></i>
                                        <input className="form-control shadow-none" type="search" placeholder="Search" aria-label="Search" />
                                    </div>
                                </li>
                                <li className="nav-item col-lg-1 my-2 p-0">
                                    <NavLink 
                                    exact
                                    activeClassname = "active"
                                    className="nav-link text-lg-center p-0" 
                                    to={`/`} 
                                    aria-current="page"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item col-lg-1 my-2 p-0">
                                    <NavLink 
                                    to={`/About`} 
                                    activeClassname = "active"
                                    className="nav-link text-lg-center p-0" 
                                    aria-current="page"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item col-lg-1 my-2 p-0">
                                    <NavLink 
                                    to={`/Contact`}
                                    activeClassname="active" 
                                    className="nav-link text-lg-center p-0" 
                                    aria-current="page"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <div className="icon-nav col-lg-3 row my-2 p-0">
                                    <a className="bi bi-person-circle icon-link nav-item-icon col-lg-6 text-lg-end p-0 my-2"></a>
                                    <a className="bi bi-bag icon-link nav-item-icon col-lg-6 text-lg-end p-0 my-2"></a>
                                </div>
                            </ul>
                        
                        </div>
                    </div>
                </nav>
            </header>
        );
    };
}

export default AppBar;