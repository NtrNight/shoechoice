import React from "react";
import AppBar from "../../component/appbar/appbar";
import Footer from "../../component/footerbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactUs, Information, Form } from "../../component/ContactComponent";

export default class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <div className="contact-inner d-flex flex-column">
                    <AppBar/>
                    <div className="container row mx-auto my-5 justify-content-center">
                        <ContactUs />
                        <div className="row col-12 mt-3">
                            <Information />
                            <Form />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}