import React from "react";
import {FriendsSVG, ResponSVG, ShoppingSVG, SupportSVG} from './../../../assets/icon_svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/service.css';

export default class Services extends React.Component{
    render(){
        return(
            <div className="service mb-4 row">
                <div className="col-12 mb-3">
                    <h1 className="title-service">Why Use our Service</h1>
                </div>
                <div className="img-service col-12 row justify-content-center m-0">
                    <div className="img-inner col-12 col-lg-3 col-md-3 col-sm-12 mb-2">
                        <img src={`${FriendsSVG}`} className="img-fluid"></img>
                        <h3 className="text-img mt-2">Best Guides</h3>
                        <p className="text-detail-service">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Risus etiam aenean in adipiscing tellus diam molestie eget.
                        </p>
                    </div>
                    <div className="img-inner col-12 col-lg-3 col-md-3 col-sm-12 mb-2">
                        <img src={`${ResponSVG}`} className="img-fluid"></img>
                        <h3 className="text-img mt-2">Fast Response</h3>
                        <p className="text-detail-service">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Risus etiam aenean in adipiscing tellus diam molestie eget.
                        </p>
                    </div>
                    <div className="img-inner col-12 col-lg-3 col-md-3 col-sm-12 mb-2">
                        <img src={`${ShoppingSVG}`} className="img-fluid"></img>
                        <h3 className="text-img mt-2">Fast Shipping</h3>
                        <p className="text-detail-service">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Risus etiam aenean in adipiscing tellus diam molestie eget.
                        </p>
                    </div>
                    <div className="img-inner col-12 col-lg-3 col-md-3 col-sm-12 mb-2">
                        <img src={`${SupportSVG}`} className="img-fluid"></img>
                        <h3 className="text-img mt-2">Fast Support</h3>
                        <p className="text-detail-service">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Risus etiam aenean in adipiscing tellus diam molestie eget.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}