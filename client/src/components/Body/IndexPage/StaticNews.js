import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class StaticNews extends Component {
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
        <div className="blog" style={{ zIndex: 2 }} id="newsAndArticles">
          <div className="container">
            <div className="section-header text-center newsHeading">
              <h2 className="f2 c1">News & Articles</h2>
              <h1 className="f1 fw-7 c4 fontSize1">Recent posts and updates</h1>
            </div>
            <div className="row">
              <div
                className="col-12 col-sm-4 play_vdo newsMargin"
                style={{ height: "250px" }}
              >
                <img
                  src="img/MULTIPLEX_IMAGES/foundersday.png"
                  height="250px"
                  alt=""
                />
                <div className="vdo">
                  <a
                    href="https://youtu.be/dfZjxqzFnm8"
                    className="play-button html5lightbox"
                  >
                    <i className="fa fa-play c4"></i>
                  </a>
                </div>
                <h4 className="text-center" style={{ margin: "1.5rem auto" }}>
                  47th year of Founder's Day
                </h4>
              </div>
              <div
                className="col-12 col-sm-4 play_vdo newsMargin res_margin"
                style={{ height: "250px" }}
              >
                <img src="img/MULTIPLEX_IMAGES/women.jpg" height="250px" alt=""/>
                <div className="vdo">
                  <a
                    href="https://youtu.be/5G5iilyQDj0"
                    className="play-button html5lightbox"
                  >
                    <i className="fa fa-play c4"></i>
                  </a>
                </div>

                <h4 className="text-center" style={{ margin: "1.5rem auto" }}>
                  Women's Day Celebration
                </h4>
              </div>
              <div
                className="col-12 col-sm-4 play_vdo newsMargin"
                style={{ height: "250px" }}
              >
                <img src="img/MULTIPLEX_IMAGES/mbt.jpg" height="250px" alt=""/>
                <div className="vdo">
                  <a
                    href="https://youtu.be/9QYNPV58oM0"
                    className="play-button html5lightbox"
                  >
                    <i className="fa fa-play c4"></i>
                  </a>
                </div>
                <h4 className="text-center" style={{ margin: "1.5rem auto" }}>
                  Inauguration of Multiplex Bio Tech
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
