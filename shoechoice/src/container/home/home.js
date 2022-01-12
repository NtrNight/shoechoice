import React, {Component} from "react";
import AppBar from "../../component/appbar/appbar";
import Category from "../../component/categorybar/categorybar";
import ItemMenu from "../../component/item/itemMenu";
import Footer from "../../component/footerbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style/homepage.css";

class Home extends Component{
    render(){
        return(
            <div className="home m-0 p-0">
                <div className="home-inner d-flex flex-column min-vh-100">
                    <AppBar/>
                    <div className="container row mx-auto my-5">
                        <Category />
                        <ItemMenu />
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    };
}

export default Home;