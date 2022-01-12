import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../style/form.css';

export default class Form extends React.Component{
    render() {
        return (
            <div className="form col-12 col-lg-6 col-md-6 col-sm-12 mt-4 mt-lg-0 mt-md-0">
                <form class="row">
                    <div class="col-12 col=lg-6 col-md-6 col-sm-12 mb-2">
                        <label for="firstname" className="label">First Name</label>
                        <input id="firstname" type="text" className="form-control shadow-none" aria-label="First name" />
                    </div>
                    <div class="col-12 col=lg-6 col-md-6 col-sm-12 mb-2">
                        <label for="lastname" className="label">Last Name</label>
                        <input id="lastname" type="text" className="form-control shadow-none" aria-label="Last name" />
                    </div>
                    <div class="col-12 col=lg-6 col-md-6 col-sm-12 mb-2">
                        <label for="email" className="label">Email</label>
                        <input id="email" type="email" className="form-control shadow-none" aria-label="First name" />
                    </div>
                    <div class="col-12 col=lg-6 col-md-6 col-sm-12 mb-2">
                        <label for="phone" className="label">Phone Number</label>
                        <input id="phone" type="number" className="form-control shadow-none" aria-label="Last name" />
                    </div>
                    <div class="col-12 mb-2">
                        <label for="phone" className="label">Phone Number</label>
                        <textarea className="area form-control shadow-none" rows="5" cols="20"/>
                    </div>
                    <div className="col-12 mt-3">
                        <button className="w-100 p-2 btn-send-mail">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}