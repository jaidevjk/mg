import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVisitors } from "../../actions/otherActions";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";

class AdminHomePage extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchVisitors());
  }

  render() {
    // console.log(this.props.visitors);
    return (
      <div>
        <div className="row" style={{ margin: "2rem auto" }}>
          <div className="col-12 col-md-3 text-success">
            <Link to="/addProductItems">
              <div className="admin_col">Add Products</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-danger">
            <Link to="/editProducts">
              <div className="admin_col">Edit Products</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-info">
            <Link to="/welcomeBanner">
              <div className="admin_col">Welcome Banner</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-success">
            <Link to="/quickContact">
              <div className="admin_col">Quick Contacts</div>
            </Link>
          </div>
        </div>
        <div className="row" style={{ margin: "2rem auto" }}>
          {/* <div className="col-12 col-md-3 text-primary">
           <Link to="/addArticles">
              <div className="admin_col">Add Success Stories</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-primary">
           <Link to="/articleList">
              <div className="admin_col">Edit or Delete Stories</div>
            </Link>
          </div> */}
          <div className="col-12 col-md-3 text-warning">
            <Link to="/Subscriptions">
              <div className="admin_col">Subscribers</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-info">
            <Link to="/Enquires">
              <div className="admin_col">Product Enquires</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-danger">
            <Link to="/appliedCandidates">
              <div className="admin_col">CV / Resumes</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-warning">
            <Link to="/addCareer">
              <div className="admin_col">Post a Job</div>
            </Link>
          </div>
        </div>
        <div className="row" style={{ margin: "2rem auto" }}>
          {/* <div className="col-12 col-md-3 text-success">
           <Link to="/AddTestimonial">
              <div className="admin_col">Add Testimonials</div>
            </Link>
          </div>
          <div className="col-12 col-md-3  text-success">
           <Link to="/testimonial">
              <div className="admin_col">Edit or Delete Testimonials</div>
            </Link>
          </div> */}
        </div>
        <div className="row" style={{ margin: "2rem auto" }}>
          <div className="col-12 col-md-3 text-success">
            <Link to="/createGallery">
              <div className="admin_col">Gallery</div>
            </Link>
          </div>
          <div className="col-12 col-md-3 text-primary">
            <a href="!#">
              <div className="admin_col">
                No. of Visitors:{" "}
                <span className="text-warning">
                  {this.props.visitors.length === 0
                    ? null
                    : this.props.visitors[0].count}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visitors: state.visitors,
  };
};

export default connect(mapStateToProps, { fetchVisitors })(AdminHomePage);
