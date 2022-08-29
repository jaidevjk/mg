import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header2 from "../Navbar/Header2";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <div className="op-header">
          <div className="section-header text-center section-header1">
            {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
            <h1 className="f1 fw-7 cw">About Us</h1>
            <h3
              style={{
                color: "#fff",
                fontSize: "1.8rem",
                marginTop: "1rem",
              }}
              className="fontSize3"
            >
              Everything you need to know about our Company
            </h3>
            {/* <h2 className="f2 c3">Dr. G P Shetty</h2> */}
          </div>
        </div>

        <div
          className="projects clearfix"
          style={{
            zIndex: "2",
            marginBottom: "2rem",
            overflow: "hidden",
            marginTop: "-3rem",
          }}
          id="gpShetty"
        >
          <div className="container" style={{ overflow: "hidden" }}>
            <div className="container">
              <div
                className="row"
                style={{ overflow: "hidden", marginBottom: "2rem" }}
              >
                <div
                  className="col-12  "
                  style={{
                    fontSize: "2rem",
                    margin: "0rem auto",
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <p>
                    <br />
                    <span style={{ marginLeft: "3rem", fontSize: "4rem" }}>
                      <b>M</b>
                    </span>
                    ultiplex Group of Companies has been pioneers in Agriculture
                    sector since 1974. We are leading manufacturers and
                    suppliers of wide spectrum of Agriculture inputs including
                    fertilisers, Pesticides, Nutrients (Major, Minor and
                    Secondary), Organic Manure, Bio-fertilisers, Bio-pesticides
                    and Bio-stimulants. Multiplex products have been exported to
                    more than 17 countries including Japan, Korea, Ethiopia,
                    Djibouti, Srilanka and Arab countries.
                    <br />
                    Aiming towards the best quality of farm produce, our
                    committed scientists are keen to implement innovative
                    technologies to create crop nutrition and plant protection
                    products. Our products range from Agriculture to
                    Horticulture and extended to animal husbandry and FMCG
                    (Cleaning & Disinfection) moving towards organic era.
                    <br />
                    Our manufacturing units are certified ISO 9001:2015 and ISO
                    14001:2015. Bio fertilisers and Bio pesticides are certified
                    by IMO Switzerland and ECOCERT India Pvt Ltd. Our products
                    are field tested and certified by various agricultural
                    research Institutions and universities across the country
                    and marketed under the brand name – “MULTIPLEX”, a popular
                    brand among farming community since four decades.
                    <br />
                    Our recent extension includes an elevation to pharma grade
                    equipment in manufacturing unit to uphold the quality
                    assurance for our products. Multiplex ensures a total
                    quality management system that sets apart from our
                    competitors.
                  </p>
                </div>
              </div>
            </div>

            <div className="op-header mb-20" id="shetty">
              <div className="section-header text-center  section-header1">
                {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
                <h1 className="f1 fw-7 cw">Dr. G P SHETTY</h1>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "2.2rem",
                    marginTop: "1rem",
                  }}
                >
                  Founder & Chairman
                </h3>
                {/* <h2 className="f2 c3">Dr. G P Shetty</h2> */}
              </div>
            </div>

            <div className="clearfix">
              <div className="row paddingRow">
                <div className="col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box">
                  <div
                    className="row"
                    style={{ background: "#fff !important" }}
                  >
                    {/* <div className="donate f1 fw-7 cw">10% */}
                    {/* <br />Donated</div>  */}
                    <div className="col-lg-6 pl-0 col-lg-push-6 order-1">
                      <img
                        src="img/MULTIPLEX_IMAGES/ceo.png"
                        alt=""
                        className="ceoImg"
                        style={{
                          zIndex: "2",
                          // height: "500px !important",
                          maxWidth: "130% !important",
                          transform: "translateX(-15%)",
                        }}
                      />
                    </div>
                    <div className="col-lg-6 col-lg-pull-6 order-0">
                      <div
                        className=""
                        style={{
                          fontSize: "2rem",
                          background: "#fff",
                        }}
                      >
                        <p className="pb-10">
                          <span
                            style={{ marginLeft: "3rem", fontSize: "4rem" }}
                          >
                            <b>T</b>
                          </span>
                          he spectacular growth of Karnataka Agro Chemicals
                          since 1974 is solely attributed to the vision,
                          dynamism and idealism of our founder Dr. G.P.Shetty.
                          <br />
                          Born in 1940 in a village called Kalathur in Udupi
                          district in an agricultural family, explains his
                          natural affinity towards the farming community.
                        </p>
                        <ul className="f1">
                          <li
                            style={{ cursor: " pointer", marginBottom: "2rem" }}
                          >
                            {" "}
                            <span className="c4 fw-7 pb-40 fontSize5">
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#gps"
                                className="rdm"
                                

                              >
                                Read More
                              </a> */} 
                             {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                              <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#gps"
 
                              >
                                Read More
                              </a>

                              
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                          <li
                            style={{ cursor: " pointer", marginBottom: "2rem" }}
                          >
                            {" "}
                            <span className="c4 fw-7 fontSize5">
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#journeyAgro"
                                className="rdm"
                              >
                                A step towards Sustainable agriculture
                              </a> */}
                              {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                               <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#journeyAgro"
                                
                              >
                                A step towards Sustainable agriculture
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                          <li
                            style={{ cursor: " pointer", marginBottom: "2rem" }}
                          >
                            {" "}
                            <span className="c4 fw-7 fontSize5">
                              {" "}
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#awareness"
                                className="rdm"
                              >
                                A Visionary Entrepreneur
                              </a> */}
                               {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                               <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#awareness"
                                
                              >
                                A Visionary Entrepreneur
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                          <li
                            style={{ cursor: " pointer", marginBottom: "2rem" }}
                          >
                            {" "}
                            <span className="c4 fw-7 fontSize5">
                              {" "}
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#teachings"
                                className="rdm"
                              >
                                Contribution for Nation Building
                              </a> */}
                              {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                              <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#teachings"
                                
                              >
                                Contribution for Nation Building
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                          {/* <li style={{ cursor: " pointer" }}>
                            {" "}
                            <span className="c4 fw-7">
                              {" "}
                              <a
                                className="link"
                                data-toggle="modal"
                                data-target="#birthMulti"
                                className="rdm"
                              >
                                Birth of Multiplex
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div
              className="clearfix"
              id="mahesh"
              style={{ margin: " 2rem 0", overflow: "hidden" }}
              id="aboutManagement"
            > */}
            {/* As we cannot give TWO id's for single element,this below changes are done */}
            <div
              className="clearfix"
              id="mahesh"
              style={{ margin: " 2rem 0", overflow: "hidden" }}
            >
              <div className="row ">
                <div
                  className="op-header"
                  style={{ margin: " 2rem 0", overflow: "hidden" }}
                >
                  <div className="section-header text-center">
                    {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
                    <h1 className="f1 fw-7 cw">Management</h1>
                    {/* <h2 className="f2 c3">Dr. G P Shetty</h2> */}
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box">
                  <div className="row paddingRow">
                    {/* <div className="donate f1 fw-7 cw">10% */}
                    {/* <br />Donated</div>  */}
                    <div className="col-lg-6">
                      <img
                        src="img/MULTIPLEX_IMAGES/AboutUs/MGS.jpg"
                        alt=""
                        style={{
                          zIndex: " 2",
                          " width": "570px",
                          " height": "473px",
                        }}
                      />
                    </div>
                    <div className="col-lg-6" id="director">
                      <div className="project-card">
                        <div
                          className="donate f1 fw-7 cw"
                          style={{ opacity: "0" }}
                        >
                          10%
                          <br />
                          Donated
                        </div>
                        <div className="section-header">
                          <h3 className="f1 fw-7 c4">Mr. MAHESH G SHETTY</h3>
                          <h3>Managing Director</h3>
                        </div>
                        <p className="fw-4 f1">
                          Following his father’s footsteps, Mr. Mahesh G. Shetty
                          continued the vision that his father, Dr, G.P.Shetty
                          had all along. The journey upwards to succeed his
                          father started while he was very young. His passion
                          started while he was a student and joined hands to
                          assist his father. This helped him to comprehend the
                          practical details of agriculture input production and
                          marketing.
                        </p>
                        <ul className="f1">
                          <li style={{ cursor: "pointer" }}>
                            {" "}
                            <span className="c4 fw-7">
                              {" "}
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#mahesh1"
                                className="rdm"
                              >
                                Read More{" "}
                              </a> */}
                               {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                              <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#mahesh1"
                                
                              >
                                Read More{" "}
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" clearfix" id="she">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box">
                  <div className="row paddingRow">
                    {/* <div className="donate f1 fw-7 cw">10% */}
                    {/* <br />Donated</div>  */}
                    <div className="col-lg-6 pl-0 col-lg-push-6">
                      <img
                        src="img/MULTIPLEX_IMAGES/AboutUs/1.png"
                        alt=""
                        style={{ zIndex: " 2", objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-lg-6 col-lg-pull-6">
                      <div className="project-card">
                        <div className="donate f1 fw-7 cw">
                          10%
                          <br />
                          Donated
                        </div>
                        <div className="section-header">
                          <h3 className="f1 fw-7 c4 fontSize2">
                            Mrs. NISHCHITA M SHETTY
                          </h3>
                          <h3>Director</h3>
                        </div>
                        <p className="fw-4 f1">
                          Mrs. Nishchita M Shetty is an independent thinker and
                          a science graduate. So, it came with no surprise that
                          she would start off a subsidiary under her name and
                          initiated M/s. Multiplex Urban Green India Pvt. Ltd.
                        </p>
                        <ul className="f1">
                          <li style={{ cursor: "pointer" }}>
                            {" "}
                            <span className="c4 fw-7">
                              {" "}
                              {/* <a
                                className="link"
                                data-toggle="modal"
                                data-target="#nishchita"
                                className="rdm"
                              >
                                Read More{" "}
                              </a> */}
                               {/* This below changes are  done to remove href warnings and no duplicate warnings */}
                               <a
                                href="!#"
                                className="link rdm"
                                data-toggle="modal"
                                data-target="#nishchita"
                                
                              >
                                Read More{" "}
                              </a>
                              <span className="c1">. . .</span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {/* modal */}
        <div
          className="modal fade"
          id="awareness"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  A Visionary Entrepreneur
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ fontSize: " 2rem" }}>
                  Under the establishments which he initiated across the
                  country, now there is about 1500+ staff who is directly
                  employed by the companies. Over 5,000 + dealers and
                  distributors are working in every nook and corners of the
                  country in almost every state in India.
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
        {/* modal ends */}

        {/* modal  */}
        <div
          className="modal fade"
          id="journeyAgro"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  A step towards Sustainable agriculture
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ "font-size": " 2rem" }}>
                  It is a complex process where organic, ecological, biological
                  and chemical agri resources are used to get potential harvest
                  while ensuring soil health and crop quality. To balance all
                  these micronutrients, bio-activators, bio-fertilizers,
                  bio-pesticides, bio-fungicides and chemical pesticides are
                  recommended by him. In this regard Dr.G.P.Shetty played a
                  pivotal role in rejuvenating soil health and imparting
                  sustainable agriculture practices in India and overseas. All
                  the Agri input products introduced in the brand name of
                  Multiplex under his able guidance are time tested and
                  promising in different agro climatic conditions across the
                  continents.
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
        {/* modal  ends */}

        {/* modal  */}
        <div
          className="modal fade"
          id="teachings"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Contribution for Nation Building
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ "font-size": " 2rem" }}>
                  Among the pioneers of sustainable Indian Agriculture Dr. G.P.
                  Shetty’s contribution to the overall development of the sector
                  and improving the quality of life of farmers is admired by
                  everyone. His service is remembered by institutes, research
                  stations and farmers. Karnataka Government awarded him with
                  the prestigious “Rajyotsava Award” for his outstanding
                  contribution to the Agriculture sector.
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
        {/* modal  ends */}

        {/* Modal */}
        <div
          className="modal  fade"
          id="gps"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Dr. G P SHETTY
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body modal_body">
                <p style={{ "font-size": " 2rem" }}>
                  Dr. Shetty studied his primary and secondary education in
                  Udupi and graduation at the famous Willington College, Sangli.
                  After obtaining B.Sc. Hons from Pune University, he joined
                  Shivaji University Kolhapur for his Post - Graduation. While
                  doing M.Sc. in Plant Physiology he gets the opportunity to
                  associate himself with Dr. G. V. Joshi, winner of the
                  prestigious Bhatnagar Award. Impressed by Shetty's devotion to
                  the subject Dr.Joshi persuaded him to do Doctorate. Under his
                  guidance, Shetty obtained Ph.D. in Plant Physiology and Plant
                  nutrients.
                  <br />
                  <br />
                  Being a farmer himself, Dr. Shetty felt that his knowledge
                  should not be confined to academic corridors, but taken to the
                  fields where it could be of practical use to the farmers. With
                  that ambition, Dr. Shetty started Karnataka Agro Chemicals in
                  1974, under the guidance of his mentor Dr. G. V. Joshi who
                  took pride of proving that the hand that can hold the
                  apparatus could also wield the plough. He would often refer
                  Dr. Shetty as an example for others to emulate.
                  <br />
                  <br />
                  Today, the seed he sowed has grown into a giant tree called
                  MULTIPLEX GROUP OF COMPANIES, meeting the diverse needs of the
                  farmers. With this, Dr. Shetty's ambition to serve the farmers
                  grew Multifold. He continues to be the driving force for us.
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
        {/* Modal ends here */}

        {/* Modal */}
        <div
          className="modal fade"
          id="mahesh1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  MR. MAHESH G SHETTY
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ "font-size": " 2rem" }}>
                  Today with over 25 years of experience in the field of
                  Agricultural Industry and under the continued guidance of his
                  father, Mr. Mahesh G. Shetty has played a crucial role in
                  bringing up the facility into an organization of status,
                  deeply embedded in production and marketing of micronutrients,
                  speciality fertilizers, organic manure, Bio-Fertilizer and
                  Bio-Pesticides, Bio-Activators & Pesticides across India.
                  <br />
                  <br />
                  Since 2009, under his leadership we spread our arms to global
                  relations for Djibouti &, Ethiopia. Owing to the tenacious
                  aspirations and efforts of Mr. Mahesh G. Shetty has been an
                  Honorary Consultant of the Republic of Djibouti.
                  <br />
                  <br />
                  Recognizing his contribution, the “International Competence
                  Centre for Organic Agriculture (ICCOA)” has awarded Mr. Mahesh
                  G. Shetty the title of “Young Industrial Entrepreneur”. Also,
                  under his authority, the Multiplex Group has received the
                  Fertilizer Association of India (FAI) award for “Production,
                  Promotion, and Marketing of Bio Fertilizers”. Also, he had
                  been nominated as the President of “Indian micro fertilizers
                  manufacturers association”.
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
        {/* Modal ends here */}

        {/* Modal */}
        <div
          className="modal fade"
          id="nishchita"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center fontSize3"
                  id="exampleModalLabel"
                >
                  MRS. NISHCHITA M SHETTY
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ "font-size": " 2rem" }}>
                  With the constant support she received from her husband and
                  father-in-law, she envisioned completing the long-cherished
                  vision of Dr. G.P. Shetty to provide chemical residue free
                  food to the urbanites. Her personal vision is to create joy in
                  growing & nurturing of vegetables, fruits and flowers in urban
                  homes by providing organic and eco-friendly products, kits &
                  services. She actively engages herself in the “Go Green, Grow
                  Green” initiative.
                  <br />
                  <br />
                  She is also a director in all the subsidiaries of Multiplex
                  Group. Today she is an acclaimed entrepreneur in her own
                  right.
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
        {/* Modal ends here */}

        {/* Modal */}
        <div
          className="modal fade"
          id="birthMulti"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  Birth of Multiplex
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p style={{ "font-size": " 2rem" }}>
                  To increase the impact of his work, Dr. G.P.Shetty established
                  a full-fledged, prestigious laboratory to test soil samples
                  across the nation in order to help determine the importance of
                  crop nutrients. In his laboratory, he analyzed leaf, soil and
                  water samples of various fields to try and figure out how
                  sustainable they are. But sadly, because of excessive use of
                  chemical fertilizers, the quality of soil has depleted & was
                  unproductive. His main objective all along was to help farmers
                  in need to get good quality crops, hence he started his
                  extensive research on bio products & started releasing the
                  products through Multiplex Bio Tech Pvt. Ltd
                  <br />
                  <br />
                  Because of his immense contribution to the agricultural sector
                  through research for a safer alternative to fertilizers and
                  pesticides, Dr. G.P.Shetty was the recipient of many
                  prestigious awards from several prominent organizations.
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
        {/* Modal ends here */}
      </div>
    );
  }
}
