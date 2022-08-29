import React, { Component } from "react";
import Header2 from "../../Navbar/Header2";
import Footer from "../../Footer/Footer";

export default class Vahini extends Component {
  componentDidMount() {
    document.title = "Multiplex Vahini - Sustainable Farming";
  }

  render() {
    return (
      <div>
        <Header2 />
        <div class="op-header">
          <div class="section-header text-center section-header1">
            {/*   <h2 class="f2 c3">Contact us</h2>  */}
            <h1 class="f1 fw-7 cw fontSize1">Multiplex Vahini</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Sustainable Farming | Crop Management | Nutrient & Pest Management
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
                  <div class="col-lg-6 pl-0 col-lg-push-6 order-1">
                    <img
                      src="img/MULTIPLEX_IMAGES/services/vahini.jpg"
                      width="100%"
                      className="vahiniImg"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 col-lg-pull-6 order-0">
                    <div class="textPadding text-justify">
                      <p>
                        <span style={{ marginLeft: "3rem", fontSize: "4rem" }}>
                          <b>M</b>
                        </span>
                        ultiplex Vahini, a bi-monthly agriculture magazine is an
                        initiative of Multiplex Group’s extension activity.
                        Vahini provides scientific know how on sustainable
                        farming methods, Package of practices for season
                        specific crops and researched articles. Farmers refer
                        and adopt crop management techniques based on our
                        technical journals.
                        <br />
                        <br />
                        Multiplex Vahini comprehends scientific information on
                        sustainable farming. It aims to hand hold farmers
                        throughout the crop cycle to manage pests, diseases and
                        nutrients for improved quality and quantity of the
                        produce.
                        <br />
                        <br />
                        We have included a dedicated space in the magazine to
                        provide updates from the Department of Agriculture,
                        Government of Karnataka. It also comprehends relevant
                        information on policy changes and updates on trends in
                        agriculture technology.
                        <br />
                        <br />
                      </p>
                      {/* <img src="img/MULTIPLEX_IMAGES/services/vahini1.jpg" /> */}
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
