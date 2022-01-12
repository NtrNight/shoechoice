import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../../style/brand.css';

export default class Brand extends React.Component{
    render(){
        return(
            <div className="brand row mt-4">
                <div className="col-12">
                    <h1 className="text-title-brand">Popular Brands</h1>
                </div>
                <div className="col-12 mt-2 row">
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Nike</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Air Jordan</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Adidas</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Puma</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Reebook</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Vans</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Converse</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Skechers</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Nike</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Nike</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Nike</p>
                    </div>
                    <div className="text-inner-brands col-4 col-lg-2 col-md-3 col-sm-4">
                        <p className="text-center text-brand">Nike</p>
                    </div>
                </div>
            </div>
        )
    }
}