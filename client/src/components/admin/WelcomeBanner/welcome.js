import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  createWelcome,
  fetchWelcomeBanner,
  deleteWelcomeBanner,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class Welcome extends React.Component {
  state = {
    image: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchWelcomeBanner());
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.welcome.length === 1 || this.props.welcome.length > 1) {
      alert("You can add only one Welcome Banner.");
    } else {
      let formData = new FormData();
      formData.append("photo", this.state.image);
      // console.log(this.state.image);
      // this.props.uploadImage(formData);
      trackPromise(this.props.createWelcome(formData));
      // this.setState({ thumbnail: "" });
    }
  }

  render() {
    // console.log(this.props.welcome);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            <h1 class="f2 c3">Add Welcome Banner</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <br />
        <div className="container">
          <form action="" onSubmit={this.onSubmit.bind(this)}>
            <label>
              Image <span className="label_req">*</span>
            </label>
            <div className="form-control">
              {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ image: base64 })}
                required
                className="form-control"
              /> */}
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  this.setState({ image: e.currentTarget.files[0] });
                  console.log(e.currentTarget.files[0]);
                }}
              />
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary sub_btn"
            />
          </form>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Image Preview</h2>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (this.props.welcome.length === 1) {
                  trackPromise(
                    this.props.deleteWelcomeBanner(this.props.welcome[0]._id)
                  );
                } else {
                  return;
                }
              }}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
          <br />
          <img
            src={
              this.props.welcome.length === 1
                ? this.props.welcome[0].image
                : null
            }
            alt=""
          />
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    welcome: state.welcome,
  };
};

export default connect(mapStateToProps, {
  createWelcome,
  fetchWelcomeBanner,
  deleteWelcomeBanner,
})(Welcome);
