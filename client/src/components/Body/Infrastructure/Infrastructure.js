import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header2 from "../../Navbar/Header2";
import Footer from "../../Footer/Footer";

export default class Infrastructure extends Component {
  componentDidMount() {
    document.title = "Multiplex Group - Manufacturers and exporters";
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
          <div class=" section-header  section-header1 text-center">
            {/*   <h2 class="f2 c3">Contact us</h2>  */}
            <h1 class="f1 fw-7 cw">Our Facility</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Innovative | Trust | Quality
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
                    <div class="" style={{ fontSize: "2rem" }}>
                      <div className="col-12 text-justify">
                        <p>
                          <span
                            style={{ marginLeft: "3rem", fontSize: "4rem" }}
                          >
                            <b>M</b>
                          </span>
                          ultiplex Group has established its manufacturing units
                          in Bengaluru, Tumukur, Hubli, Bhuvaneshwar and
                          Ghaziabad to take its pride to produce quality
                          agriculture inputs. Our infrastructure is well
                          equipped with progressive technology and stringent
                          quality assured protocols. We aspire to bring out
                          exceptional solutions for crop nutrition and plant
                          protection. Our units are strategically designed
                          towards recycling and sustainability for waste
                          disposal. Safety controls for our resources are high
                          priority and has been implemented in all our units.
                          <br />
                          <br />
                          Our production units are spread across acres with
                          pharma grade equipment for maximum production to
                          upheld the market needs with top quality assurance.
                        </p>
                      </div>
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
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/1.JPG" alt=""/>
                        </div>
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/2.jpg" />
                        </div> */}
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/3.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/4.JPG" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/5.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/6.JPG" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/7.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/8.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/9.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/10.jpg" alt=""/>
                        </div>
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/Infrastructure/11.jpg" />
                        </div> */}
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
