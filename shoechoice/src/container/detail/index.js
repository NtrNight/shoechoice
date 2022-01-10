/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AppBar from "../../component/appbar/appbar";
import Footer from "../../component/footerbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/detail.css';
import Size from "../../data/size/size";

export default class Detail extends React.Component{
    render(){
        return(
            <div className="detail">
                <div className="detail-inner">
                    <AppBar/>
                    <div className="container mx-auto my-lg-5">
                        <div className="main-header row pb-5">
                            <div className="col-6 img-main row row-cols-2">
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                                <div className="img-main-inner col-2">
                                    <img className=" rounded-3 img-fluid" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"></img>
                                </div>
                            </div>
                            <div className="col-4 text-main">
                                <div className="text-title-main">
                                    <h3>Nike Revolt</h3>
                                </div>
                                <div className="text-type-main mt-1">
                                    <p>Man Shoes</p>
                                </div>
                                <div className="text-price-main my-5">
                                    <p>$210</p>
                                </div>
                                <div className="text-select-size-main">
                                    <h5 className="text-short-by">Select Size</h5>
                                    <div className="d-flex">
                                        <div className="size-type w-25 me-2">
                                            <select
                                            class="form-select shadow-none p-1"
                                            aria-label="Default select example"
                                            >
                                            <option value="UK" selected>
                                                UK
                                            </option>
                                            <option value="Erope">Erope</option>
                                            <option value="Asia">Asia</option>
                                            </select>
                                        </div>
                                        <div className="size-much w-25">
                                            <select
                                            class="form-select shadow-none p-1"
                                            aria-label="Default select example"
                                            >
                                            <option value="Size" selected>
                                                Size
                                            </option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-ready-stock mt-1 mb-4">
                                    <p className="text-danger">*Ready Stock</p>
                                </div>
                                <div className="button-select my-3">
                                    <button className="btn-add-to-cart w-100 mb-2 p-2 rounded-3">
                                        <i class="bi bi-bag-fill me-2"></i>
                                        Add To Bag
                                    </button>
                                    <button className="btn-add-favorite w-100 p-2 rounded-3">
                                        <i class="bi bi-heart me-2"></i>
                                        Favorite
                                    </button>
                                </div>
                                <div className="text-detail-main">
                                    <p className="detail-title">Detail : Nike Revolt</p>
                                    <p className="text-detail mb-2">
                                        Voluptate nulla anim occaecat proident fugiat cillum laborum culpa labore irure occaecat pariatur dolore fugiat. Deserunt officia consectetur excepteur consequat irure esse voluptate culpa ea pariatur non. Incididunt ea dolore anim nulla laborum sint sint cillum cillum aliquip. Aliquip amet exercitation sunt laborum magna laborum officia esse laborum ut. Incididunt ea anim elit duis.
                                    </p>
                                </div>
                                <div className="mt-3 free-delivery-text d-flex justify-content-between align-items-center">
                                    <p>Free Delivery and Return</p>
                                    <i class="bi bi-caret-down-fill arrow"></i>
                                </div>
                            </div>
                        </div>
                        <div className="riview-text mt-3 pb-3">
                            <div className="riview-title  d-flex">
                                <p className="title-riview">
                                    Riviews
                                </p>
                                <p className="number-ofreviews ms-1">
                                    (200)
                                </p>
                            </div>
                            <p className="write-text">
                                <a href="#">Write A Riviews</a>
                            </p>
                        </div>
                        <div className="text-wearing">
                            <p className="title-wearing mb-3">How others are wearing it</p>
                            <div className="img-wearing row">
                                <div className="wear-inner col">
                                    <div className="img-wear-inner rounded-3">
                                        <img className="" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                                    </div>
                                    <p className="text-wear-name mt-1">
                                        Mike Tyson
                                    </p>
                                </div>
                                <div className="wear-inner col">
                                    <div className="img-wear-inner rounded-3">
                                        <img className="" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                                    </div>
                                    <p className="text-wear-name mt-1">
                                        Mike Tyson
                                    </p>
                                </div>
                                <div className="wear-inner col">
                                    <div className="img-wear-inner rounded-3">
                                        <img className="" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                                    </div>
                                    <p className="text-wear-name mt-1">
                                        Mike Tyson
                                    </p>
                                </div>
                                <div className="wear-inner col">
                                    <div className="img-wear-inner rounded-3">
                                        <img className="" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                                    </div>
                                    <p className="text-wear-name mt-1">
                                        Mike Tyson
                                    </p>
                                </div>
                                <div className="wear-inner col">
                                    <div className="img-wear-inner rounded-3">
                                        <img className="" src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"></img>
                                    </div>
                                    <p className="text-wear-name mt-1">
                                        Mike Tyson
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}