import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import { fetchGallery } from "../../actions/otherActions";
import Header2 from "../Navbar/Header2";
import Footer from "./Footer";

class Gallery extends Component {
  componentDidMount() {
    document.title = "Our Gallery - Multiplex Group";
    trackPromise(this.props.fetchGallery());
  }

  renderImages() {
    return this.props.gallery
      .filter((value) => {
        if (value.category === "Our Gallery") {
          return value;
        }
        //This below line is added to remove error related to array.filter
        return false;
      })
      .map((gallery) => {
        return (
          <div class="col-md-4 col-xs-6 my-15" key={gallery._id}>
            <div class="gallery-single">
              <a href={gallery.image}>
                <img src={gallery.image} alt="" />
                <span>
                  <i class="fas fas-3x fa-eye"></i>
                </span>
                <h4 className="text-center text-capitalize">
                  {gallery.thumbnail}
                </h4>
              </a>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div>
        <Header2 />
        <div class="op-header">
          <div class=" section-header  section-header1 text-center">
            <h1 class="f1 fw-7 cw">Our Gallery</h1>
            {/* <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Defining our vision of excellence.
            </h2> */}
          </div>
        </div>
        <div class="page-content py-5">
          <div class="gallery-page py-100">
            <div class="container">
              <div class="row popupGallery">{this.renderImages()}</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gallery: state.welcome,
  };
};

export default connect(mapStateToProps, { fetchGallery })(Gallery);
