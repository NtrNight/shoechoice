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
            <div className="category-bar card shadow-sm col-3 p-3">
                <h3 className="text-center my-2">Category</h3>
                <Age />
                <Gender />
                <Price />
                <Type />
                <Color />
            </div>
        );
    };
}

export default CategoryBar;