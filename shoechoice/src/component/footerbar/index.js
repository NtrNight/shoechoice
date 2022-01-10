import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/footer.css";

export default class Footer extends React.Component{
    render(){
        return(
            <footer className="p-3">
                    <div className="item-link row">
                        <div className="about col">
                            <p className="about-title">About</p>
                            <p className="about-text">A website for all kinds of shoes</p>
                        </div>
                        <div className="category-brand col">
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
                        <div className="quick-link col">
                            <p className="quick-title">Quick Link</p>
                            <div className="link">
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="follow-us col">
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
                    <div className="copyright-text mt-2">
                        <p className="text-copyright text-center">
                            Copyright © 2020 All rights reserved. |  ShoeChoice
                        </p>
                    </div>
            </footer>
        )
    }
}