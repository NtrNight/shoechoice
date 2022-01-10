/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Shoes from "../../data/itemShoes/shoesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/item.css";
import { Link, Route, Router } from "react-router-dom";
import Detail from "../../container/detail";


class ItemMenu extends React.Component {
  render() {
    const itemList = Shoes.map((shoe) => {
      return (
          
            <div className="item-inner" key={shoe.id}>
                <Link to={
                  {
                    pathname : `/Produk/${shoe.no_series}/${shoe.name_shoes}`,
                  }
                } className="text-link text-decoration-none">
                  <img src={`${shoe.img_poster}`} alt={`${shoe.name_shoes}`}></img>
                </Link>
                <div className="row d-flex align-items-center mt-2">
                    <div className="col box-name-rate">
                    <Link to={
                      {
                        pathname : `/Produk/${shoe.no_series}/${shoe.name_shoes}`,
                      }
                    } className="text-link text-decoration-none">
                      <p className="text-name-product">{shoe.name_shoes}</p>
                    </Link>

                    {(shoe.rate_shoes === 1 ) ?
                    <div className="row">
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                    </div> : ''}

                    {(shoe.rate_shoes === 2 ) ?
                    <div className="row">
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                    </div> : ''}

                    {(shoe.rate_shoes === 3 ) ?
                    <div className="row">
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star col"></i>
                        <i class="bi bi-star col"></i>
                    </div> : ''}

                    {(shoe.rate_shoes === 4) ?
                    <div className="row">
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star col"></i>
                    </div> : ''}

                    {(shoe.rate_shoes === 5) ?
                    <div className="row">
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                        <i class="bi bi-star-fill col"></i>
                    </div> : ''}
                    </div>
                    <div className="col box-price-color d-flex flex-column align-items-end">
                    <p className="text-price">${shoe.price_shoes}</p>
                    <p className="text-color">{shoe.color_shoes.length} Colors</p>
                    </div>
                </div>
            </div>
      );
    });
    return (
      <div className="Item col">
        <div className="row item-header-field align-items-center">
          <div className="col-6 mb-2">
            <h4 className="title-name ms-3">All Shoes</h4>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end mb-2">
            <h5 className="text-short-by  mx-3 mt-2">Short By</h5>
            <select
              class="form-select w-50 shadow-none p-1"
              aria-label="Default select example"
            >
              <option value="Most Suitable" selected>
                Most Suitable
              </option>
              <option value="Review">Review</option>
              <option value="Latest">Latest</option>
              <option value="Highest Price">Highest Price</option>
              <option value="Lowest Price">Lowest Price</option>
            </select>
          </div>
        </div>
        <div className="item-main mt-3 ms-3 row">
          {itemList}
        </div>
      </div>
    );
  }
}

export default ItemMenu;
