import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../../style/category.css";

export default class Type extends React.Component {
  arrowClickType = () => {
    const checkBox = document.querySelector(".check-box-type");
    checkBox.classList.toggle("parentBoxType");
    if (checkBox.classList.contains("parentBoxType")) {
      checkBox.style.maxHeight = 0;
    } else {
      checkBox.removeAttribute("style");
    }
  };

  render() {
    return (
      <div className="type my-2">
        <div className="title-box d-flex justify-content-between">
          <p className="title-name-category">Type</p>
          <i
            className="bi bi-caret-down-fill arrow"
            onClick={this.arrowClickType}
          ></i>
        </div>
        <div className="check-box-type d-flex flex-column mb-2">
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="sneaker"
              value="Sneaker"
            />
            <label className="form-check-label ms-2" for="sneaker">
              Sneaker
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="slip_on"
              value="Slip On"
            />
            <label className="form-check-label ms-2" for="slip_on">
              Slip On
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="boat"
              value="Boat"
            />
            <label className="form-check-label ms-2" for="boat">
              Boat
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="boots"
              value="Boots"
            />
            <label className="form-check-label ms-2" for="boots">
              Boots
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="stiletto"
              value="Stiletto"
            />
            <label className="form-check-label ms-2" for="stiletto">
              Stiletto
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="pumps"
              value="Pumps"
            />
            <label className="form-check-label ms-2" for="pumps">
              Pumps
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="derby"
              value="Derby"
            />
            <label className="form-check-label ms-2" for="derby">
              Derby
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="type"
              id="peep_toe_heels"
              value="Peep Toe Heels"
            />
            <label className="form-check-label ms-2" for="peep_toe_heels">
              Peep Toe Heels
            </label>
          </div>
        </div>
      </div>
    );
  }
}
