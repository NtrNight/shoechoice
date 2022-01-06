/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/appbar.css";

class AppBar extends React.Component {
    render(){
        return (
            <header>
                {/* <h1>
                    ShoeChoice
                </h1> */}
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container-fluid">
                        <a className="navbar-brand text-title" href="#">ShoeChoice</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="input-group mx-2 w-100 col">
                                <i className="bi bi-search input-group-text" id="basic-addon1"></i>
                                <input className="form-control shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                            <ul className="navbar-nav me-auto col w-100 align-items-center">
                                <li className="nav-item me-2">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item me-2">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <div className="icon-nav p-1 d-flex justify-content-end align-items-center row">
                                    <li className="nav-item col">
                                        <a className="icon-link"><i className="bi bi-person-circle"></i></a>
                                    </li>
                                    <li className="nav-item col">
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