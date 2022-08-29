import React, { Component } from "react";
import Header2 from "../Navbar/Header2";
import Footer from "./Footer";
import { fetchTestimonial } from "../../actions/otherActions";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class SuccessStories extends Component {
  componentDidMount() {
    document.title = "Success Stories - Multiplex Farmer Happy Farmer";
    trackPromise(this.props.fetchTestimonial());
  }

  renderTestimonial() {
    return this.props.testimonials.map((testimonial) => {
      return (
        <div key={testimonial._id}>
          <img src={testimonial.image} />
          <div className="myCarousel">
            <p>{testimonial.description}</p>
            <h3>{testimonial.name}</h3>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <Header2 />
        <div className="op-header">
          <div className=" section-header  section-header1 text-center">
            {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
            <h1 className="f1 fw-7 cw">Success Stories</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Multiplex farmer happy farmer
            </h2>
          </div>
        </div>
        <div className="testimony pt-md">
          <div className="container" style={{ zIndex: 2 }}>
            <div className=" section-header  section-header1 text-center">
              <h2 className="f2 c1">Testimonials</h2>
              <br />
              <h1 className="f1 fw-7 c4">What Farmers says</h1>
            </div>
            <div className="row" style={{ zIndex: 2 }}>
              <div className="col-md-8 col-md-offset-2 col-sm-offset-0 col-xs-offset-0">
                <Carousel
                  showArrows={false}
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  interval={6100}
                  background="white"
                >
                  {this.renderTestimonial()}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* youtube links */}
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div
            className=" section-header  section-header1 text-center"
            style={{ margin: "2rem 0" }}
          >
            <h1 className="f1 fw-7 c4">Multiplex Farmer Testimonials</h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/OyasqpuXtZo"
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
                src="https://www.youtube.com/embed/reFMhtmYJXI"
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
                src="https://www.youtube.com/embed/1Clmpz-e-NE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {/* youtube links ends */}

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials,
  };
};

export default connect(mapStateToProps, { fetchTestimonial })(SuccessStories);
