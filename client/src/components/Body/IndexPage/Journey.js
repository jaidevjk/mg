import React, { Component } from "react";

export default class Journey extends Component {
  render() {
    return (
      <div className="mainJourney">
        <div className="section-header text-center smJourney">
          {/* <h2 className="f2 c1">News & Articles</h2> */}
          <h1 className="f1 fw-7 c4">Our Journey</h1>
        </div>
        <div id="journey" className="dummy_hello" style={{ opacity: 0 }}>
          <h2>Hello</h2>
        </div>
        <div className="text-center " style={{ position: "relative" }}>
          <div className="journey">
            {/* 
            There is no heading added to display
            <h2 className="f2 c1"></h2> */}
            <br />
            <h1 className="f1 fw-7 c4">Our Journey</h1>
          </div>
        </div>
        <div className="background">
          <div className="hotstone mile1">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/1974.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>1974</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile1">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile1">
                  Read More....
                </a>
              </div>
            </div>
          </div>
          <div
            className="modal fade  modal-dialog-centered"
            id="mile1"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ marginTop: "-40px", marginBottom: "10px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      // style={{"font-weight":" bolder, "font-size":" 3rem;"}}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>1974</h3>
                  <p style={{ padding: "1rem" }}>
                    We started as Karnataka Agro chemicals with our brand
                    “Multiplex” in Agriculture sector.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="hotstone mile2">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/1975.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>1975</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile2">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile2">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade "
            id="mile2"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>1975</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex brand was registered in other states and
                    Andhra-Pradesh being the first to market our products.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile3">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/1982.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>1982</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile3">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile3">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile3"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>1982</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex products extended its operation in Tamil Nadu by
                    opening a branch
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile4">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/1996.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>1996</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile4">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile4">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile4"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>1996</h3>
                  <p style={{ padding: "1rem" }}>
                    Understanding the need in the market, we focused on
                    research, exclusive formulation, mass production and
                    marketing of pesticides. Different variety of seeds were
                    introduced to market under Multiplex Brand.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile5">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/1999.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>1999</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile5">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile5">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile5"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>1999</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex celebrates silver jubilee with a vision to bring
                    quality products to farming community
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile6">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2000.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2000</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile6">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile6">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile6"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2000</h3>
                  <p style={{ padding: "1rem" }}>
                    We inaugurated a manufacturing for Zinc Sulphate unit in
                    Peenya, Bangalore and an exclusive production unit for
                    organic manure, Biofertilizers, Bio activators and
                    Biopesticides.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile7">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2003.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2003</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile7">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile7">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile7"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2003</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex was accredited with the prestigious organic
                    certification by IMO, Switzerland for the entire production
                    of Bioproducts
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile8">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2004.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2004</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile8">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile8">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile8"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2004</h3>
                  <p style={{ padding: "1rem" }}>
                    Our manufacturing units Karnataka Agro Chemicals, Multiplex
                    Biotech Pvt Ltd and Multiplex Agricare Pvt Ltd were
                    certified with ISO 9001 & ISO 14001. Our range of
                    biofertilizers and biopesticides were available in liquid
                    form from this year.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile9">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2006.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2006</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile9">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile9">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile9"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2006</h3>
                  <p style={{ padding: "1rem" }}>
                    For the efforts in developing novel production in the field
                    of Agri-Biotechnology, Multiplex Biotech Pvt Ltd was
                    recognized by the Department of Scientific and Industrial
                    Research (DSIR).
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile10">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2012.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2012</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile10">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile10">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile10"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2012</h3>
                  <p style={{ padding: "1rem" }}>
                    We collaborated with a prestigious organization to open a
                    new venture in the field of mechanized paddy sowing and
                    transplantation. Outcome of this project gave farmers
                    substantial growth in paddy cultivation based on improved
                    yield both in quality and quantity.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile11">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2015.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2015</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile12">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile12">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile11"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2013</h3>
                  <p style={{ padding: "1rem" }}>
                    With a growing trend towards organic era in urban community,
                    Multiplex Urban Green (MUG) came up with a novel way of
                    growing vegetables on their own terrace, balcony or backyard
                    by providing them with Krushi Garden kit containing all the
                    required agriculture units and services.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile12">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2013.JPG"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2013</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile11">
                  Read More....
                </a> */}
                 {/* The below changes are made to remove href attribute warnings */}
                 <a href="!#" data-toggle="modal" data-target="#mile11">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile12"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2015</h3>
                  <p style={{ padding: "1rem" }}>
                    The Multiplex group came up with an innovative initiative
                    called Multiplex Farming. Multiplex farming is a form of
                    collaborative agriculture where Multiplex will partner up
                    with a landowner to help develop his/her barren land as well
                    as semi-cultivated land. Multiplex farming will provide a
                    flexible solution and helps to manage soil and crops by
                    scientifically analysing and providing proper solutions.
                    Scope is to cover everything from the basic land preparation
                    to managing the Farm & Marketing of products.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile13">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2016-GPS.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2016</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile13">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile13">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile13"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2016</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex Group started to branch out with products without
                    chemical residue. To achieve this, we came up with a model
                    farm to grow fruits and vegetables near Bangalore. All this
                    was started under the subsidiary “Safe and Farm Fresh”.
                    Additionally, the farm also has dairy, poultry, and sheep
                    rearing units. From here, produce is marketed to various
                    select outlets in Bangalore. (GPSIOAM)
                    <br />
                    <br />
                    GPS Institute of Agricultural Management was established
                    under the guidance and initiative of Dr. G.P.Shetty’ s Agri
                    Research and Educational Trust. This prestigious institute
                    offers courses in Post Graduate Diploma in Agricultural
                    Management and Diploma in Agricultural Management (GPSIOAM).
                    These short-term courses are opening opportunities for
                    Entrepreneurs across the agriculture sector & to make them
                    industry ready for recruitment by Agri companies.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile14">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2017.jpg"
                className="card-img-top"
                alt="mile"
                style={{
                  height: "100px !important",
                  width: "100px !important",
                }}
              />
              <div className="card-body text-center">
                <h4>
                  <b>2017</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile14">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile14">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile14"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2017</h3>
                  <p style={{ padding: "1rem" }}>
                    Due to ever increasing demand for Multiplex products, an
                    exclusive manufacturing facility was inaugurated at
                    Ghaziabad under the guidance of Founder Dr G P Shetty and
                    Managing Director Mr Mahesh G Shetty. The facility has been
                    manufacturing all types of Micronutrients, Specialized
                    fertilizers, Soil conditioners, Biofertilizers to meet the
                    requirements of Northern India.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile15">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2019.jpg"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2019</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile15">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile15">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile15"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2019</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex Drone Pvt Ltd was established to provide advanced
                    technology with drones for agriculture purpose.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}

          <div className="hotstone mile16">
            <div className="wave"></div>
            <div className="card shadow rounded">
              <img
                src="img/MULTIPLEX_IMAGES/OurJourney/2021.JPG"
                className="card-img-top"
                alt="mile"
              />
              <div className="card-body text-center">
                <h4>
                  <b>2021</b>
                </h4>
                {/* <a data-toggle="modal" data-target="#mile16">
                  Read More....
                </a> */}
                {/* The below changes are made to remove href attribute warnings */}
                <a href="!#" data-toggle="modal" data-target="#mile16">
                  Read More....
                </a>
              </div>
            </div>
          </div>

          {/* Modal comes here */}
          <div
            className="modal fade  modal-dialog-centered"
            id="mile16"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Milestones
                  </h3>
                  <button
                    type="button"
                    className="close"
                    style={{ float: " right", marginTop: "-35px" }}
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      style={{ marginTop: "-40px", marginBottom: "10px" }}
                    >
                      &times;
                    </span>
                  </button>
                </div>
                <div className="modal-body modal_para">
                  <h3 style={{ padding: " 0 1rem" }}>2021</h3>
                  <p style={{ padding: "1rem" }}>
                    Multiplex Biotech Pvt Ltd equipped with pharma grade
                    manufacturing unit was established at Tumkur with a
                    production capacity of 50,000 ltrs/day.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal ends */}
        </div>
      </div>
    );
  }
}
