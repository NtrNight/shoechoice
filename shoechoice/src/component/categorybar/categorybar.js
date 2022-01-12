/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Age, Gender, Price, Type, Color } from "./componentCategory";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/category.css";

class CategoryBar extends React.Component{

    render(){
        return(
            <div className="category-bar col-lg-3 mt-4 p-2">
                <div className="category-inner position-static card shadow-sm p-2">
                    <h3 className="text-center my-2">Category</h3>
                    <Age />
                    <Gender />
                    <Price />
                    <Type />
                    <Color />
                </div>
            </div>
        );
    };
}

export default CategoryBar;