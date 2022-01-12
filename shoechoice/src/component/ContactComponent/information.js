import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../style/information.css';

export default class Information extends React.Component{
    render() {
        return (
            <div className="info col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="info-inner p-2">
                    <div className="box-info-title mb-4">
                        <h4 className="text-title-info">Contact Information</h4>
                        <p className="text-white">
                            Fill up the form and our team will get back to you 
                            within 24 hours
                        </p>
                    </div>
                    <div className="box-contact py-2">
                        <div className="contact-inner d-flex align-items-center mb-2">
                            <i class="bi bi-telephone-fill"></i>
                            <p className="text-white m-0 ms-2">+1234567890</p>
                        </div>
                        <div className="contact-inner d-flex align-items-center mb-2">
                            <i class="bi bi-envelope-fill"></i>
                            <p className="text-white m-0 ms-2">aaaaaa@shoech.com</p>
                        </div>
                        <div className="contact-inner d-flex align-items-center mb-2">
                            <i class="bi bi-geo-alt-fill"></i>
                            <p className="text-white m-0 ms-2">Street 2022</p>
                        </div>
                    </div>
                    <div className="follow-icon d-flex mt-4">
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
        )
    }
}