import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Header2 from "../../Navbar/Header2";
import Footer from "../../Footer/Footer";

export default class Lab extends Component {
  componentDidMount() {
    document.title = "Multiplex Biotech Laboratory";
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
            <h1 class="f1 fw-7 cw fontSize1">Multiplex Biotech Laboratory</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Soil Analysis | Water Analysis | Plant / Leaf Samples | Organic
              Manures | Fertilizer Testing Facility
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
                      {/* <div className="row" className="servicesSection"> */}
                      <div className="row servicesSection">
                        <div className="col-md-6 col-12 text-justify">
                          <p>
                            <span
                              style={{ marginLeft: "3rem", fontSize: "4rem" }}
                            >
                              <b>M</b>
                            </span>
                            ultiplex Bio-tech Laboratory was established in 1991
                            with soil and fertilizer testing. The services were
                            gradually upgraded to extend quality check of soil,
                            water, plant/Leaf, organic manures/compost and
                            fertilizers by adopting new processing technology
                            and standard procedures. Our Research and
                            Development centre is recognized by DSIR, Govt of
                            India and accredited by National Accreditation Board
                            for Testing and Calibration Laboratories (NABL). We
                            take immense pride to be the only laboratory in
                            India to analyse major, minor and secondary
                            nutrients by FCO method in private sector.
                            <br />
                            <br />
                            Multiplex Biotech laboratory is one of the leading
                            testing centres in India equipped with advanced and
                            sophisticated instrumentation. Quality is our utmost
                            priority and hence all our products (manure,
                            fertilisers and micronutrients) are tested and
                            analysed as per FCO regulations. Consequently, our
                            reports are widely acceptable to national and
                            international patrons. We are backed by competent
                            soil scientists and chemists for recommendation of
                            agriculture inputs for specific crops making it
                            easier to farmer community.
                            <br />
                            <br />
                            <b>Analytical Ouality Compilance Services:</b>
                            <br />
                            We ensure precise results to reach our customers by
                            implementing best quality Controllers & technical
                            expertise with several years of experience in this
                            field. Some of the major aspects that we take into
                            consideration are:
                            <br />
                            • Reliable analytical work restricting systematic &
                            random errors within prescribed limits.
                            <br />
                            • To maintain & comply with the requirement of
                            lS0/lEC17025 (2017) by adopting strict internal
                            quality checks & controls according to guidelines by
                            NABL
                            <br />
                            • Preventive maintenance
                            <br />
                            • Use of Certified Reference Materials
                            <br />
                            • Standard appropriate & precisely calibrated
                            instrument
                            <br />
                            • Following validated standard test procedure
                            Non-Conformance & corrective action
                            <br />
                            <br />
                          </p>
                        </div>
                        <div
                          className="col-12 col-md-6"
                          style={{ width: "auto", margin: "auto" }}
                        >
                          <img
                            src="img/MULTIPLEX_IMAGES/LAB/Laboratory.png"
                            className="servicesImg"
                            alt=""
                          />
                        </div>
                      </div>
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
                        <b>Testing Methodogies:</b>
                        <br />
                        <b> 1. Soil Analysis-</b> Soil testing is well
                        recognized as a comprehensive scientific tool to assess
                        inherent strength of soil to supply nutrients to the
                        crop. Our lab technical experts follow ICAR/FAO standard
                        procedure for Estimation of major, secondary and
                        micronutrients including boron and heavy metals. Our
                        highly skilled scientists interpret these results and
                        recommend necessary inputs to farmers.
                        <br />
                        <b> 2. Water Analysis- </b>Multiplex Bio tech Pvt ltd
                        lab chemists follow IS3025 Standard procedure for
                        estimation of different water quality parameters and
                        recommend its’s suitability for agriculture purposes.
                        <br />
                        <b> 3. Plant/leaf Analysis- </b>Many samples are
                        analysed for total plant nutrients and are estimated by
                        implementing ICAR/FAO Standard procedure methods to
                        interpret results
                        <br />
                        <b>4. Fertilizers Analysis- </b>Our lab
                        chemists/analysts follow FCO1985 standard methods for
                        analysis of fertilizers in different samples
                        <br />
                        <b>5. Organic Manures Analysis-</b> Our lab chemists
                        follow FCO 1985 standard method for estimation of total
                        nutrients in raw organic manures and liquid samples.
                        <br />
                        <br />
                        <b>Training Centre For Students:</b>
                        <br />
                        Multiplex Biotech Laboratory is associated with GPSIOAM
                        (GPS Institute of agricultural management) for the
                        course on Post-Graduate Diploma Agricultural Management
                        (PGDAM) and Diploma Agricultural Management (DAM) to
                        provide hands on training for students. We offer limited
                        numbers to ensure maximum learning benefit for our
                        students.
                        <br />
                        <br />
                        <b>Specilal Consideration For Farmer Club Members:</b>
                        <br />
                        Multiplex Biotech Laboratory aims for the benefit of the
                        farmer community and therefore priced low. We are happy
                        to extend our service to Multiplex Farmer Club members
                        to avail an additional 20% discount on our charges.
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
                          <img src="img/MULTIPLEX_IMAGES/LAB/1.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/2.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/3.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/4.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/5.jpg" alt=""/>
                        </div>
                        {/* <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/6.jpg" />
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/7.jpg" />
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/8.jpg" />
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/9.jpg" />
                        </div> */}
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/10.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/11.jpg" alt=""/>
                        </div>
                        <div className="item">
                          <img src="img/MULTIPLEX_IMAGES/LAB/12.jpg" alt=""/>
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
