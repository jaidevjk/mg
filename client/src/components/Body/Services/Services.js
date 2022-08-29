import React, { Component } from "react";
import Header2 from "../../Navbar/Header2";
import Footer from "../../Footer/Footer";

export default class Services extends Component {
  componentDidMount() {
    document.title = "Multiplex Group – Exporter and Manufacturer";
  }

  render() {
    return (
      <div>
        <Header2 />
        <div class="op-header">
          <div class="section-header text-center section-header1">
            {/*   <h2 class="f2 c3">Contact us</h2>  */}
            <h1 class="f1 fw-7 cw fontSize1">Multiplex Farming</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Collaborative Agriculture | Sustainable Farming Methods | Farm
              Management
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
                  <div class="col-lg-6 col-lg-push-6 order-1">
                    <img
                      src="img/MULTIPLEX_IMAGES/services/farm-01.png"
                      alt=""
                      className="servicesImg"
                      // style={{
                      //   zIndex: 2,
                      //   height: "100% !important",
                      //   width: "100% !important",
                      // }}
                    />
                  </div>
                  <div class="col-lg-6 col-lg-pull-6 order-0">
                    <div class="text-justify" style={{ fontSize: "2rem" }}>
                      <p>
                        <span style={{ marginLeft: "3rem", fontSize: "4rem" }}>
                          <b>M</b>
                        </span>
                        ULTIPLEX presents - “Collaborative Agriculture” to
                        passionate agriculturists. We aim to partner in
                        developing and to make barren land as well as semi
                        cultivated land green and productive. The need for
                        holistic approach for agricultural productivity in
                        today’s world has paved way to extend our support to
                        land owners ranging from as small as 10 acres to any
                        number of acres on individual or companies possess.
                        <br />
                        <br />
                        <b>The Background:</b>
                        <br />
                        With four decades of experience in advocating
                        cultivation practices of diversified crops in different
                        agro climatic conditions and managing few lakh acres of
                        land over the years, Multiplex pioneers the
                        Agri-advocacy in every part of the country and beyond
                        the boundaries. By consolidating all our experience,
                        expertise and practical skills, now we wish to associate
                        with you to make your dream land green and productive.
                        Multiplex Group looks forward for a “Total Solution
                        Provider “to improve soil health, crop productivity and
                        quality of life. The integrated approach developed by us
                        to make your land green and productive is accomplished
                        with unmatched quality and innovation coupled with
                        decades of research and development. We are committed to
                        reach your expectation and sustain the relation through
                        trust, transparency and mutual benefits.
                      </p>
                      <p className=" text-justify">
                        <b className="text-left">Way Forward:</b>
                        <br />
                        Are you a land owner? If so, are you interested in
                        making your land green and productive? If yes simply
                        think of Multiplex Farming. Our collaboration will make
                        you dream come true.
                        <br />
                        <br />
                        <b>Let’s work together!</b>
                        <br />
                        Our collaboration will guide you in every step of
                        agricultural activity. Starting from soil test, field
                        layout, land preparation, advice on crop selection, seed
                        sapling selections, information on inputs to be given on
                        regular intervals, weed management, nutrient management,
                        pest and disease management, harvesting post harvesting
                        techniques and market for every crop you wish to have in
                        your field.
                        <br />
                        <br />
                        In precise, we will manage your farm with professionally
                        and maintain transparency to grow crops of your choice.
                      </p>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="servicesText"></div>
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
