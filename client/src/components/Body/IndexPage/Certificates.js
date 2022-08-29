import React, { Component } from "react";

export default class Certificates extends Component {
  render() {
    return (
      <div id="certificates">
        <div className="container">
          <div className="row ">
            <div className="col-12 mb-70">
              {/* <div className="section-header text-center">
                <h1 className="f1 fw-7 c4">Certificates</h1>
              </div> */}
              <div
                className="section-header text-center"
                style={{ zIndex: "2", margin: "2rem auto" }}
                id="groups"
              >
                {/*  <h2 className="f2 c1">Group of Companies</h2>  */}
                <h1 className="f1 fw-7 c4 fontSize1">
                  Certificates & Accreditations
                </h1>
              </div>
            </div>
            <div className="certificate_imgs">
              <div className="col-6 col-md-6 col-lg-3  text-center cerImg">
                <img src="img/MULTIPLEX_IMAGES/Certificates/ISO.png" alt=""/>
              </div>
              <div className="col-6 col-md-6 col-lg-3  text-center">
                <img src="img/MULTIPLEX_IMAGES/Certificates/IMO.png" alt=""/>
              </div>
            </div>
            <div className="certificate_imgs">
              <div className="col-6 col-md-6 col-lg-3  text-center cerImg">
                <img src="img/MULTIPLEX_IMAGES/Certificates/TUV.png" alt=""/>
              </div>
              <div className="col-6 col-md-6 col-lg-3 text-center">
                <img src="img/MULTIPLEX_IMAGES/Certificates/NABL.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
