import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header2 from "../../Navbar/Header2";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

export default class FarmingClub extends Component {
  componentDidMount() {
    document.title =
      "Multiplex Farmer Club - Crop Management | Exciting Benefits | Technical Support";
  }

  state = {
    update: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  };

  render() {
    return (
      <div>
        <Header2 />
        <div class="op-header">
          <div class="section-header text-center section-header1">
            {/*   <h2 class="f2 c3">Contact us</h2>  */}
            <h1 class="f1 fw-7 cw fontSize1">Multiplex Farmer Club</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Crop Management | Exciting Benefits | Technical Support
            </h2>
          </div>
        </div>

        {/* Services Starts Here */}
        <div class="cus_container">
          <div class="project-area clearfix">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box">
                <div class="row">
                  {/*  <div class="donate f1 fw-7 cw">10% */}
                  {/*  <br />Donated</div>  */}
                  <div class="col-12">
                    <div class="text-justify" style={{ fontSize: "2rem" }}>
                      <p>
                        <span style={{ marginLeft: "3rem", fontSize: "4rem" }}>
                          <b>O</b>
                        </span>
                        ur attempt to give back more than expected to at least
                        few of our beloved farmers, we initiated Multiplex
                        Farmer’s Club. It is a platform for farmers to seek
                        scientific information on crop management at their door
                        step. Any Indian farmers are eligible to join the farmer
                        club member to avail the benefits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div
                      style={{
                        fontSize: "2rem",
                      }}
                    >
                      <p>
                        <b>Benefits For Members:</b>
                        <br />
                        • Priority to deliver, demonstrate, technical support to
                        the farmers.
                        <br />
                        • Precise technical information from our executives.
                        <br />
                        • Free demonstration of our products on field
                        <br />
                        • Farmer’s kit worth Rs. 250/- will accompany with
                        products more than the registration fee.
                        <br />
                        • Coverage of Accidental Death insurance of Rs. 50,000/-
                        (Rupees fifty thousand only)
                        <br />
                        • Eligible for a lucky draw to win exciting prizes.
                        <br />
                        • For an addition of every 5,000 farmers to the club,
                        there is a lucky draw to win mobiles, cycles, sprayers
                        and many more!
                        <br />• Cash prize of Rs. 1,00,000/- (Rs One lakh) for
                        lucky draw winner for every 50,000 farm club members
                        <br />
                        <br />
                        <Link to="/contact" className="contactLink">
                          <b>
                            Contact your nearest branch for more information.{" "}
                            <i
                              className="fa fa-hand-point-right fa-1x"
                              style={{ color: "light green" }}
                            ></i>
                          </b>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div
                      className="container-fluid"
                      style={{ margin: "2rem auto" }}
                    >
                      <OwlCarousel
                        className="owl-theme lab_imgs"
                        loop
                        margin={10}
                        autoplay
                        autoplayTimeout={3000}
                        responsive={this.state.responsive}
                      >
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/1.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/2.jpg" alt=""/>
                        </div>
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/3.jpg" />
                        </div> */}
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/4.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/5.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/6.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/7.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/8.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/9.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/10.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/11.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/MFC/12.jpg" alt=""/>
                        </div>
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services ends */}

        <Footer />
      </div>
    );
  }
}
