import React from "react";
import AppBar from "../../component/appbar/appbar";
import Footer from "../../component/footerbar";
import { Greetings, Services, Brand } from "../../component/AboutComponent/component";
import "bootstrap/dist/css/bootstrap.min.css";

export default class About extends React.Component{
    render(){
        return(
            <div className="about">
                <div className="about-inner d-flex flex-column align-content-between">
                    <AppBar/>
                    <div className="container container-lg container-md container-sm mx-auto my-5 d-flex flex-column align-content-center">
                        <Greetings />
                        <Services />
                        <Brand />
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}