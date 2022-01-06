/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/category.css";

class CategoryBar extends React.Component{
    render(){
        return(
            <div className="category-bar card shadow-sm ">
                <h3>Category</h3>
            </div>
        );
    };
}

export default CategoryBar;