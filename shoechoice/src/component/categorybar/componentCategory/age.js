import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../../style/category.css";

export default class Age extends React.Component {

    arrowClickAge = () => {
        const checkBox = document.querySelector('.check-box-age');
        checkBox.classList.toggle('parentBoxAge');
        if (checkBox.classList.contains('parentBoxAge')) {
            checkBox.style.maxHeight = 0;
        }else{
            checkBox.removeAttribute('style');
        }
    }

  render() {
    return (
      <div className="age my-2">
        <div className="title-box d-flex justify-content-between">
          <p className="title-name-category">Age</p>
          <i
            className="bi bi-caret-down-fill arrow"
            onClick={this.arrowClickAge}
          ></i>
        </div>
        <div className="check-box-age d-flex flex-column my-2">
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="age"
              id="kids"
              value="Kids"
            />
            <label className="form-check-label" for="kids">
              Kids
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="age"
              id="teenager"
              value="Teenager"
            />
            <label className="form-check-label" for="teenager">
              Teenager
            </label>
          </div>
          <div className="men-inner form-check">
            <input
              type="radio"
              className="form-check-input"
              name="age"
              id="adult"
              value="Adult"
            />
            <label className="form-check-label" for="adult">
              Adult
            </label>
          </div>
        </div>
      </div>
    );
  }
}
