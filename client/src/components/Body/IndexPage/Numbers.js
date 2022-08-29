import React, { Component } from "react";
import CountUp from "react-countup";

export default class Numbers extends Component {
  state = { delay: 0 };

  componentDidMount() {
    window.onload = function () {
      var loadTime =
        window.performance.timing.domContentLoadedEventEnd -
        window.performance.timing.navigationStart;
      console.log("Page load time is " + loadTime);
      return loadTime;
    };
  }

  render() {
    return (
      <div>
        <div className="facts-area text-center " style={{ marginTop: "-1rem" }}>
          <div className="container numbersCenter">
            <div className="row ">
              <div className="noOfBranches">
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-map-marked-alt num_icons"></i>
                      </h2>
                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Number of Branches
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="15"
                        data-min="0"
                        data-max="28"
                        data-delay="1"
                        data-increment="1"
                      ></div> */}
                      {/* <span className="scrollNum">28+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={28}
                        duration={3}
                        separator=" "
                        decimal=","
                        suffix=" +"
                        delay={2}
                      />
                      {/* <span className="plus plus5">+</span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container ">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-archway num_icons"></i>
                      </h2>

                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Farmer Club Members
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="15"
                        data-min="250000"
                        data-max="255189"
                        data-delay="1"
                        data-increment="20"
                      ></div> */}
                      {/* <span className="scrollNum">261069+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={265284}
                        duration={3}
                        separator=","
                        decimal=","
                        suffix="+"
                        delay={2}
                      />
                      {/* <span className="plus plus1">+</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="noOfBranches">
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-user-tie num_icons"></i>
                      </h2>

                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Total <br className="smBreak" /> Employees{" "}
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="15"
                        data-min="0"
                        data-max="1500"
                        data-delay="1"
                        data-increment="5"
                      ></div> */}
                      {/* <span className="scrollNum">1500+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={1500}
                        duration={3}
                        separator=","
                        decimal=","
                        suffix="+"
                        delay={2}
                      />
                      {/* <span className="plus plus2">+</span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-user-shield num_icons"></i>
                      </h2>
                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Authorized <br className="smBreak" />
                        Dealers
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="35"
                        data-min="6000"
                        data-max="10000"
                        data-delay="1"
                        data-increment="5"
                      ></div> */}
                      {/* <span className="scrollNum">10000+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={10000}
                        duration={3}
                        separator=","
                        decimal=","
                        suffix="+"
                        delay={2}
                      />
                      {/* <span className="plus plus3">+</span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="noOfBranches">
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-industry num_icons"></i>
                      </h2>

                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Manufacturing <br className="smBreak" /> Units
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="35"
                        data-min="0"
                        data-max="13"
                        data-delay="1"
                        data-increment="1"
                      ></div> */}
                      {/* <span className="scrollNum">13+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={13}
                        duration={3}
                        separator=","
                        decimal=","
                        suffix="+"
                        delay={2}
                      />
                      {/* <span className="plus plus5">+</span> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6">
                  <div className="fact-container">
                    <div className="single-fact">
                      <h2>
                        <i className="fas fa-shopping-cart num_icons"></i>
                      </h2>

                      <h3 className="fact-title" style={{ color: "#fff" }}>
                        Range of <br className="smBreak" /> Products
                      </h3>
                      {/* <div
                        className="numscroller fact-num cw f1"
                        data-slno="35"
                        data-min="0"
                        data-max="250"
                        data-delay="1"
                        data-increment="5"
                      ></div> */}
                      {/* <span className="scrollNum">250+</span> */}
                      <CountUp
                        className="scrollNum"
                        start={0}
                        end={250}
                        duration={3}
                        separator=","
                        decimal=","
                        suffix="+"
                        delay={2}
                      />
                      {/* <span className="plus plus4">+</span> */}
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
