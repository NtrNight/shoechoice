import React, {Component} from "react";
import AppBar from "../../component/appbar/appbar";
import Category from "../../component/categorybar/categorybar";

class Home extends Component{
    render(){
        return(
            <div className="homePage">
                <AppBar/>
                <div className="Main">
                    <Category />
                </div>
            </div>
        )
    };
}

export default Home;