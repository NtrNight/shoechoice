/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/appbar.css";
import { Link } from "react-router-dom";

class AppBar extends React.Component {
    render(){
        return (
            <header className="d-flex justify-content-center">
                {/* <h1>
                    ShoeChoice
                </h1> */}
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-title me-2" to={`/`}>ShoeChoice</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="input-group mx-2 w-100 col">
                                <i className="bi bi-search input-group-text p-1" id="basic-addon1"></i>
                                <input className="form-control shadow-none p-1" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                            <ul className="navbar-nav me-auto col w-100 row align-items-center">
                                <li className="nav-item col-2">
                                    <Link to={`/Home`} className="nav-link" aria-current="page">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item col-2">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item col-2">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <div className="icon-nav d-flex align-items-center row col-6">
                                    <li className="nav-item col d-flex justify-content-end">
                                        <a className="icon-link"><i className="bi bi-person-circle"></i></a>
                                    </li>
                                    <li className="nav-item col d-flex justify-content-end">
                                        <a className="icon-link"><i className="bi bi-bag"></i></a>
                                    </li>
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