/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Shoes from "../../data/itemShoes/shoesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min";
import "../../style/item.css";
import { Link, Route, Router } from "react-router-dom";


class ItemMenu extends React.Component {
  render() {
    const itemList = Shoes.map((shoe) => {
      return (
          
            <div className="item-inner col-12 col-lg-4 col-md-4 col-sm-6 col-6 col-xl-3 col-xxl-2" key={shoe.id}>
                <Link to={
                  {
                    pathname : `/Produk/${shoe.no_series}/${shoe.name_shoes}`,
                  }
                  } 
                  className="img-link text-link text-decoration-none">
                  <img src={`${shoe.img_poster}`} alt={`${shoe.name_shoes}`} className="img-fluid"></img>
                </Link>
                <div className="row mt-2 p-0 mx-0">
                    <div className="col-12 col-lg-8 col-md-12 col-sm-12 box-name-rate row p-0 mx-0">
                      <Link to={
                        {
                          pathname : `/Produk/${shoe.no_series}/${shoe.name_shoes}`,
                        }
                      } className="text-link text-decoration-none p-0">
                        <p className="text-name-product m-0">{shoe.name_shoes}</p>
                      </Link>

                      {(shoe.rate_shoes === 1 ) ?
                      <div className="col-12 p-0 mx-0">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                      </div> : ''}

                      {(shoe.rate_shoes === 2 ) ?
                      <div className="col-12 p-0 mx-0">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                      </div> : ''}

                      {(shoe.rate_shoes === 3 ) ?
                      <div className="col-12 p-0 mx-0">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                          <i class="bi bi-star"></i>
                      </div> : ''}

                      {(shoe.rate_shoes === 4) ?
                      <div className="col-12 p-0 mx-0">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                      </div> : ''}

                      {(shoe.rate_shoes === 5) ?
                      <div className="col-12 p-0 mx-0">
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                      </div> : ''}
                    </div>

                    <div className="col-12 col-lg-4 col-md-12 col-sm-12 text-lg-end box-price-color p-0">

                      <p className="text-price p-0 m-0">${shoe.price_shoes}</p>
                      <p className="text-color p-0 m-0">{shoe.color_shoes.length} Colors</p>

                    </div>

                </div>
            </div>
      );
    });
    return (
      <div className="Item col-lg-9 mb-5 mt-4 p-2">
        <div class="row item-header-field align-items-center justify-content-between w-100 m-0 mb-2 pb-3">
          <div class="col-12 col-md-6 col-lg-6 col-sm-12 p-0">
            <h4 class="title-name">All Shoes</h4>
          </div>
          <div class="col-12 col-md-6 col-lg-6 col-sm-12 row align-items-center justify-content-md-end justify-content-lg-end p-0 mx-0">
              <label class="form-label text-short-by w-auto col-6 col-md-6 me-md-2 me-lg-2 me-2 text-md-end text-sm-end p-0 m-0" for="inputState">Short By</label>
              <select class="form-select col-6 w-75 col-md-6 shadow-none " aria-label="Default select example" id="inputState">
                <option value="Most Suitable">Most Suitable</option>
                <option value="Review">Review</option><option value="Latest">Latest</option>
                <option value="Highest Price">Highest Price</option>
                <option value="Lowest Price">Lowest Price</option>
                </select>
            </div>
        </div>
        <div className="item-main row gy-3 p-0 m-0">
          {itemList}
        </div>
      </div>
    );
  }
}

export default ItemMenu;
