import React, { Component } from "react";

export default class Numbers2 extends Component {
  render() {
    return (
      <div>
        <div
          className="facts-area text-center text-capitalize"
          style={{ marginTop: "-1rem" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-6">
                <div className="fact-container">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/branches.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      NUMBER OF BRANCHES
                    </h3>
                    <div className="numscroller fact-num cw f1"></div>
                    28<span className="plus">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="fact-container ">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/club.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      FARMER CLUB MEMBERS
                    </h3>
                    <div className="numscroller fact-num cw f1"></div>
                    242689<span className="plus plus1">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="fact-container">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/Employees.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      TOTAL EMPLOYEES{" "}
                    </h3>
                    <br />
                    <div className="numscroller fact-num cw f1"></div>
                    1500<span className="plus plus2">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="fact-container">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/dealership.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      DEALERS
                    </h3>
                    <br />
                    <div className="numscroller fact-num cw f1"></div>
                    10000<span className="plus plus3">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="fact-container">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/Manufacturing.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      MANUFACTURING UNITS
                    </h3>
                    <div className="numscroller fact-num cw f1"></div>
                    13<span className="plus">+</span>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="fact-container">
                  <div className="single-fact">
                    <img src="img/MULTIPLEX_IMAGES/Export/products.png" alt=""/>
                    <h3 className="fact-title c3 f2 fw-3 text-capitalize">
                      Products
                    </h3>
                    <br />
                    <div className="numscroller fact-num cw f1"></div>
                    250<span className="plus plus4">+</span>
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
