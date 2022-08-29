import React, { Component } from "react";

export default class Numbers1 extends Component {
  render() {
    return (
      <div>
        <div className="facts-area text-center text-capitalize">
          <div className="container">
            <div className="row ">
              <div className="col-md-2 col-4 col-sm-6">
                <div className="brachWidth">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/branches.png" />
                    <h3 className=" text-capitalize">NUMBER OF BRANCHES</h3>
                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="15"
                      data-min="0"
                      data-max="28"
                      data-delay="1"
                      data-increment="1"
                    ></div>
                    <span className="plus">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-4 col-sm-6">
                <div className="  ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/club.png" />
                    <h3 className=" text-capitalize">FARMER CLUB MEMBERS</h3>
                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="15"
                      data-min="240000"
                      data-max="242689"
                      data-delay="1"
                      data-increment="20"
                    ></div>
                    <span className="plus plus1">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-4 col-sm-6">
                <div className=" ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/Employees.png" />
                    <h3 className=" text-capitalize">TOTAL EMPLOYEES </h3>

                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="15"
                      data-min="0"
                      data-max="1500"
                      data-delay="1"
                      data-increment="5"
                    ></div>
                    <span className="plus plus2">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-4 col-sm-6">
                <div className=" ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/dealership.png" />
                    <h3 className=" text-capitalize">DEALERS</h3>

                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="35"
                      data-min="6000"
                      data-max="10000"
                      data-delay="1"
                      data-increment="5"
                    ></div>
                    <span className="plus plus3">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-4 col-sm-6">
                <div className=" ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/Manufacturing.png" />
                    <h3 className=" text-capitalize">MANUFACTURING UNITS</h3>
                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="35"
                      data-min="0"
                      data-max="13"
                      data-delay="1"
                      data-increment="1"
                    ></div>
                    <span className="plus">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-4 col-sm-6">
                <div className=" ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/products.png" />
                    <h3 className=" text-capitalize">Products</h3>
                    <div
                      className="numscroller fact-num cw f1"
                      data-slno="35"
                      data-min="0"
                      data-max="250"
                      data-delay="1"
                      data-increment="5"
                    ></div>
                    <span className="plus plus4">+</span>
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
