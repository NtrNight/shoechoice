import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../../style/category.css";

export default class Gender extends React.Component {

    arrowClickGender = () => {
        const checkBox = document.querySelector('.check-box-gender');
        checkBox.classList.toggle('parentBoxGender');
        if (checkBox.classList.contains('parentBoxGender')) {
            checkBox.style.maxHeight = 0;
        }else{
            checkBox.removeAttribute('style');
        }
    }

    render() {
        return (
            <div className="gender my-2">
                <div className="title-box d-flex justify-content-between">
                    <p className="title-name-category">Gender</p>
                    <i className="bi bi-caret-down-fill arrow" onClick={this.arrowClickGender}></i>
                </div>
                <div className="check-box-gender d-flex flex-column mb-2">
                    <div className="men-inner form-check">
                        <input type="radio" className="form-check-input" name="gender" id="men" value="Men" />
                        <label className="form-check-label ms-2" for="men">Men</label>
                    </div>
                    <div className="men-inner form-check">
                        <input type="radio" className="form-check-input" name="gender" id="women" value="Women" />
                        <label className="form-check-label ms-2" for="women">Women</label>
                    </div>
                    <div className="men-inner form-check">
                        <input type="radio" className="form-check-input" name="gender" id="unisex" value="Unisex" />
                        <label className="form-check-label ms-2" for="unisex">Unisex</label>
                    </div>
                </div>
            </div>
        )
    }
}