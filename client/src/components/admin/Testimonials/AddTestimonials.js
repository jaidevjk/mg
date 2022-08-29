import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import {
  createTestimonial,
  fetchTestimonial,
  updateTestimonials,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class AddTestimonial extends React.Component {
  state = {
    name: "",
    image: "",
    description: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchTestimonial());
  }

  clearValues() {
    this.setState({
      name: "",
      description: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.testimonials.length >= 5) {
      alert("You can add only 5 Testimonials.");
    } else {
      trackPromise(this.props.createTestimonial(this.state));
      this.clearValues();
    }
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    console.log(this.props.testimonials);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Add Testimonials</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <br />
        <div className="container">
          <h2 className="text-center">Testimonials Form</h2>
          <form action="" onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label>
                Farmer Name <span className="label_req">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control products_input"
                value={this.state.name}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label>
                Description <span className="label_req">*</span>
              </label>
              <textarea
                type="text"
                name="description"
                className="form-control products_input"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
                autoComplete="off"
                row="3"
                columns="5"
                required
                onKeyDown={this.handleKeyDown}
              ></textarea>
            </div>
            <label>
              Image <span className="label_req">*</span>
            </label>
            <div className="form-control">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ image: base64 })}
                required
                className="form-control"
              />
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary sub_btn"
            />
            <button
              className="btn btn-danger sub_btn"
              onClick={() => {
                this.clearValues();
              }}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testimonials: state.testimonials,
  };
};

export default connect(mapStateToProps, {
  createTestimonial,
  fetchTestimonial,
  updateTestimonials,
})(AddTestimonial);
