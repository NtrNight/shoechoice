import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/footer.css";
import { Link } from "react-router-dom";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="px-3 pt-3">
                    <div className="item-link row">
                        <div className="about col-md-3 mb-2">
                            <p className="about-title">About</p>
                            <p className="about-text">A website for all kinds of shoes</p>
                        </div>
                        <div className="category-brand col-md-3 mb-2">
                            <p className="category-title">Category Brand</p>
                            <div className="name-brand row">
                                <div className="col">
                                    <p>Nike</p>
                                    <p>Air Jordan</p>
                                    <p>Adidas</p>
                                    <p>Puma</p>
                                    <p>Reebook</p>
                                </div>
                                <div className="col">
                                    <p>Vans</p>
                                    <p>Converse</p>
                                    <p>Skechers</p>
                                </div>
                            </div>
                        </div>
                        <div className="quick-link col-md-3 mb-2">
                            <p className="quick-title">Quick Link</p>
                            <div className="link d-flex flex-column">
                                <Link to={`/About`} className="text-decoration-none text-quick-link">
                                    About
                                </Link>
                                <Link to={`/Contact`} className="text-decoration-none text-quick-link">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="follow-us col-md-3 mb-2">
                            <p className="follow-title">Follow US</p>
                            <div className="follow-icon d-flex">
                                <div className="icon p-1 rounded-3 d-flex align-items-center">
                                    <i class="bi bi-facebook"></i>
                                </div>
                                <div className="icon p-1 rounded-3 d-flex align-items-center ms-1">
                                    <i class="bi bi-instagram"></i>
                                </div>
                                <div className="icon p-1 rounded-3 d-flex align-items-center ms-1">
                                    <i class="bi bi-pinterest"></i>
                                </div>
                                <div className="icon p-1 rounded-3 d-flex align-items-center ms-1">
                                    <i class="bi bi-snapchat"></i>
                                </div>
                                <div className="icon p-1 rounded-3 d-flex align-items-center ms-1">
                                    <i class="bi bi-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-text mt-2 p-0">
                        <p className="text-copyright text-center mb-2">
                            Copyright © 2020 All rights reserved. |  ShoeChoice
                        </p>
                    </div>
            </footer>
        )
    }
}