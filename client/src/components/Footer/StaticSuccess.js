import React, { Component } from "react";
import Header1 from "../Navbar/Header2";
import Footer from "./Footer";

export default class StaticSuccess extends Component {
  render() {
    return (
      <div>
        <Header1 />
        <div className="op-header">
          <div className=" section-header  section-header1 text-center">
            {/*   <h2 className="f2 c3">Contact us</h2>  */}
            <h1 className="f1 fw-7 cw">Success Stories</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Multiplex Farmer Happy Farmer
            </h2>
          </div>
        </div>
        <div
          className="testimony pt-md mt-50 mb-50"
          style={{ marginBottom: "5rem !important" }}
        >
          <div className="container" style={{ zIndex: " 2" }}>
            <div className=" section-header  section-header1 text-center">
              <h2 className="f2 c1">Testimonials</h2>
              <br />
              <h1 className="f1 fw-7 c4">What Farmers says</h1>
            </div>
            <div className="row" style={{ zIndex: " 2" }}>
              <div className="col-md-8 col-md-offset-2 col-sm-offset-0 col-xs-offset-0">
                <div className="testimonial owl-carousel">
                  <div className="pw-item f1 text-center">
                    <p>
                      “I have been using Multiplex Products (Multiplex Allbor,
                      Chamak, General Liquid, Samras, Navjeevan G) for my Chilly
                      crop.”
                    </p>
                    <h3>
                      <i class="fa fa-user-circle"></i>
                    </h3>
                    <p className="name fw-7 c1">
                      Multiplex Farmer
                      <br />
                      Manohar Biswal from Suguda District, Deogarh Orissa
                    </p>
                  </div>
                  <div className="pw-item f1 text-center">
                    <p>
                      “I was facing problems with the yield. Multiplex team
                      guided me to use Trishul +, NalPaK and Annapurna. I could
                      harvest 270+ quintal of chillies.”
                    </p>
                    <h3>
                      <i class="fa fa-user-circle"></i>
                    </h3>
                    <p className="name fw-7 c1">
                      Multiplex Farmer <br /> Mr. Nikhil from Maharashtra
                    </p>
                  </div>
                  <div className="pw-item f1 text-center">
                    <p>
                      “I could harvest highest yield of Banana in my area after
                      using Multiplex Products”
                    </p>
                    <h3>
                      <i class="fa fa-user-circle"></i>
                    </h3>
                    <p className="name fw-7 c1">
                      Mutiplex Farmer <br /> Mr. Parthasarathy, Tamil Nadu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cus_container mt-40" style={{ marginTop: "3rem" }}>
          <div
            className=" section-header  section-header1 text-center  mt-40 marginBottom"
            style={{ margin: "2rem 0" }}
          >
            <h1 className="f1 fw-7 c4 fontSize1">
              Multiplex Farmer Testimonials
            </h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/uMQ3rS15OyI?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-12 col-md-4">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/mAcB9oubQ4Q?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="col-12 col-md-4">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/TXUowEKuQhY?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
