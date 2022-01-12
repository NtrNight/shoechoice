import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/contact.css';

export default class ContactUs extends React.Component{
    render() {
        return (
            <div className="contact mt-4">
                <div className="contact-inner row">
                    <h1 className="col-12 text-title-contact text-center">Contact US</h1>
                    <p className="col-12 text-sub-contact text-center">Any questions or remarks? Just write us a message</p>
                </div>
            </div>
        )
    }
}