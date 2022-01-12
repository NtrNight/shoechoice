import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../../style/category.css";

export default class Price extends React.Component {
  arrowClickPrice = () => {
    const checkBox = document.querySelector(".input-price");
    checkBox.classList.toggle("parentBoxInput");
    if (checkBox.classList.contains("parentBoxInput")) {
      checkBox.style.maxHeight = 0;
    } else {
      checkBox.removeAttribute("style");
    }
  };

  render() {
    return (
      <div className="price my-2">
        <div className="title-box d-flex justify-content-between">
          <p className="title-name-category">Price</p>
          <i
            className="bi bi-caret-down-fill arrow"
            onClick={this.arrowClickPrice}
          ></i>
        </div>
        <div className="input-price d-flex flex-column mb-2">
          <div className="input-group w-100 col my-1 position-static">
            <i
              className="bi bi-currency-dollar input-group-text p-1"
              id="basic-addon1"
            ></i>
            <input
              className="form-control shadow-none p-1 position-static"
              type=""
              placeholder="Maximum Price"
              aria-label="Search"
            />
          </div>
          <div className="input-group w-100 col my-1 position-static">
            <i
              className="bi bi-currency-dollar input-group-text p-1"
              id="basic-addon1"
            ></i>
            <input
              className="form-control shadow-none p-1 position-static"
              type=""
              placeholder="Minimum Price"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    );
  }
}
