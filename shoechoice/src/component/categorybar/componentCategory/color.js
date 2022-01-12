/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Colors from "../../../data/color/colorData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../../style/category.css";

export default class Color extends React.Component {

  arrowClickColor = () => {
    const checkBox = document.querySelector(".color-field");
    checkBox.classList.toggle("parentColor");
    if (checkBox.classList.contains("parentColor")) {
      checkBox.style.maxHeight = 0;
    } else {
      checkBox.removeAttribute("style");
    }
  };

  render() {
    const listColor = Colors.map((color) => {

        return(
            <div className="color-inner p-0 col-lg-3 col-md-3 col-sm-3 col-3" key={color.id}>
                <a href="#"
                style={{
                  display: 'block',
                  backgroundColor: `${color.code}`,
                  width: `24px`,
                  height: `24px`,
                }}
                className="rounded-circle border border-1 border-secondary p-0 my-0 mx-auto">
                </a>
                <p className="text-dark mt-2 text-center"> {color.name} </p>
            </div>
        )

    })
    return (
      <div className="color my-2">
        <div className="title-box d-flex justify-content-between">
          <p className="title-name-category"> Colors </p>
          <i
            className="bi bi-caret-down-fill arrow"
            onClick={this.arrowClickColor}
          ></i>
        </div>
        <div className="color-field row g-2">
            {listColor}
        </div>
      </div>
    );
  }
}
