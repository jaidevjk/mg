import React, { Component } from "react";
import Header1 from "../Navbar/Header2";
import Footer from "./Footer";

export default class Blogs extends Component {
  componentDidMount() {
    document.title = "Blogs & Videos -  Multiplex group";
  }

  render() {
    return (
      <div>
        <Header1 />
        <div className="op-header">
          <div className=" section-header  section-header1 text-center">
            {/*   <h2 className="f2 c3">Contact us</h2>  */}
            <h1 className="f1 fw-7 cw">Blogs & Videos</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Technical and Product Information
            </h2>
          </div>
        </div>

        <div class="cus_container">
          <div class="project-area clearfix">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2 col-lg-offset-0 project-box">
                <div class="row">
                  {/*  <div class="donate f1 fw-7 cw">10% */}
                  {/*  <br />Donated</div>  */}

                  <div class="col-lg-12 col-12 mb-20">
                    <h1 className="f1 fw-7 c4 fontSize1 text-center mb-20 fontSize4">
                      Micronutrients in Crop Production
                    </h1>
                    <div class="text-justify" style={{ fontSize: "2rem" }}>
                      <p>
                        Large numbers of research workers are studying the
                        importance of micronutrients in crop production all over
                        the world. Indian scientists are in the forefront and
                        have contributed over 25% of the total research papers
                        published. However, research is limited to academic
                        importance and the papers on micronutrients remained as
                        the personal documents. They received awards but the
                        results of their research have not reached the farmers.
                        <br />
                        <br />
                        Today, awareness of use of micronutrients in India among
                        the farmers is due to the sustained propaganda by a few
                        micronutrients formulators. Though leaders of the Green
                        Revolution agree in private that micronutrients increase
                        crop production, the Indian farmers were belatedly
                        recommended to use multi-micronutrients by the
                        Agriculture and Horticulture Departments. However,
                        today. Ministry of Agriculture, Government of India, New
                        Delhi has realized the importance of
                        multi-micronutrients and balanced nutrition in the
                        sustenance of higher crop production.
                        <br />
                        <br />
                        In America and United Kingdom, hundreds of firms are
                        engaged in multi-micronutrient formulations with
                        different formulations for various crops. Some firms are
                        having a turnover of about several million dollars every
                        year. Today, agriculture in India has become more
                        intensive. Naturally, farmers must be informed about the
                        recent developments in plant nutrition. Indian farmers
                        can compete with their counterparts anywhere else as far
                        as crop production is concerned; but they are ignorant
                        of modern research on micronutrients.
                        <br />
                        <br />
                        As per the directions of the Ministry of Agriculture,
                        Government of India, New Delhi, almost all State
                        Governments have fixed the grades of multi-micronutrient
                        fertilizers for their states based on crop varieties and
                        soil conditions.
                        <br />
                        <br />
                        It is generally felt that multi-micronutrient
                        fertilizers should be used whenever deficiencies occur.
                        This attitude does not hold good in the present context
                        and a definite recommendation of multi-micronutrients as
                        in the case of NPK fertilizer is essential. NPK (major
                        nutrients) fertilizers are used to increase crop
                        production and not just to correct NPK deficiency in
                        plant. In India, scope of using multi-micronutrient
                        fertilizers is restricted as many people talk more about
                        deficiency but still feel that multi-micronutrient are
                        essential for enhancing the yield and quality of
                        produce.
                        <br />
                        <br />
                        Recently, high yielding varieties of wheat, paddy, and
                        cotton were evolved on the basis of their capacity for
                        consuming high doses of fertilizers. Thus, when high
                        yielders require more NPK, it is relevant that they
                        require more secondary and micronutrients than the
                        traditional varieties. Though soil contains sufficient
                        quantity of NP and K, NPK fertilizers are used as an
                        agro input but micronutrients do not have this
                        privilege, though all scientists speak about the
                        importance of balanced nutrients including micronutrient
                        in crop production.
                      </p>
                      {/* <img src="img/MULTIPLEX_IMAGES/services/vahini1.jpg" /> */}
                    </div>
                  </div>
                  <div class="col-lg-12 text-center col-12 pl-0 mt-20">
                    <img
                      src="img/MULTIPLEX_IMAGES/micro.jpg"
                      alt=""
                      className="vahiniImg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="cus_container videosSec mt-40"
          style={{ marginTop: "3rem" }}
        >
          <div
            className=" section-header  section-header1 text-center mt-40 marginBottom"
            style={{ margin: "2rem 0" }}
          >
            <h1 className="f1 fw-7 c4 fontSize1">Product Information Videos</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/-iJOR3vIeak?controls=0"
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
                src="https://www.youtube.com/embed/YDo0VXmt-ng?controls=0"
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
                src="https://www.youtube.com/embed/Zz6-xBw-WJs?controls=0"
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
