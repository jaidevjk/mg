import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TimeToChange extends Component {
  render() {
    return (
      <div>
        <div
          className="hotline productsSpace3"
          style={{ zIndex: " 2" }}
          id="timeToChange"
        >
          <div className="txt-row" style={{ zIndex: " 2" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="item">
                    <div className="section-header">
                      <h2 className="f2 c1">Time to change</h2>
                      <h1 className="f1 fw-7 c4 fontSize2">
                        Farmers first choice since 1974
                      </h1>
                    </div>
                    <p className="f1 fw-4 mt-45">
                      Manufacturers and exporters of Micro Nutrients, Organic
                      Manure, Bio-Fertilizers, Bio-Activators, Bio-Pesticides &
                      Pesticides, Multiplex is the leading household brand name
                      for farmers across pan India. With over 40 years of
                      experience in the field of agronomics, we are the pioneers
                      of green farming and providing complete solutions for
                      agriculture and horticulture to increase yield by quantity
                      & quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contac-row mt-10">
            <div className="container">
              <div className="row pos-r">
                <div className="col-lg-6 pos-s col-lg-push-6">
                  <div className="vdo">
                    <img src="img/MULTIPLEX_IMAGES/farmer.png" alt="" />
                    <a
                      href="https://youtu.be/TmKpzLEzCDs"
                      className="play-button html5lightbox"
                    >
                      <i className="fa fa-play c4"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-lg-pull-6">
                  <div className="">
                    <div className="">
                      <h1 className="f1 fw-7 c4 fontSize1">
                        For more inquiries
                      </h1>
                      {/* <Link
                        to="/contact"
                        className="btn_style"
                        style={{ "font-size": " 23px" }}
                      >
                        Contact Us
                      </Link> */}
                      <Link
                        to="/contact"
                        className="btn_style"
                        style={{ "fontSize": " 23px" }}
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
