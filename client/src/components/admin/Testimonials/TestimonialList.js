import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import FileBase64 from "react-file-base64";

import AdminHeader from "../AdminHeader";
import {
  fetchTestimonial,
  deleteTestimonial,
  updateTestimonials,
  fetchSingleTestimonial,
} from "../../../actions/otherActions";

class Testimonials extends Component {
  state = { name: "", image: "", description: "", id: "" };

  componentDidMount() {
    trackPromise(this.props.fetchTestimonial());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.testimonials.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  clearValues() {
    this.setState({ name: "", description: "", id: "" });
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(this.props.updateTestimonials(this.state.id, this.state));
  }
  renderTable() {
    return this.props.testimonials.map((subscriber, index) => {
      return (
        <tr key={subscriber._id}>
          <td>{index + 1}</td>
          <td>{subscriber.name}</td>
          <td>{subscriber.description}</td>
          <td>
            <img src={subscriber.image} alt=""/>
          </td>
          <td>
            <a
              href="!#"
              data-toggle="modal"
              data-target="#testimonial"
              onClick={() => {
                this.setState({ id: subscriber._id });
              }}
            >
              <i className="fa fa-pen"></i>
            </a>
          </td>
          <td>
            <a
              href="!#"
              onClick={() => {
                trackPromise(this.props.deleteTestimonial(subscriber._id));
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      );
    });
  }
  render() {
    // console.log(this.props.testimonials);
    return (
      <div>
        <div class="op-header">
          <br />
          <br />
          <br />
          <br />
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Testimonials</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <AdminHeader />

        <div className="table-responsive">
          <table className="table table-striped styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>

        {/* modal comes here */}
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade"
            id="testimonial"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.clearValues()}
                    style={{ marginTop: "-40px", marginBottom: "10px" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                      }}
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="benefits"
                      className="form-control"
                      value={this.state.description}
                      onChange={(e) => {
                        this.setState({ description: e.target.value });
                      }}
                      autoComplete="off"
                      row="15"
                      columns="10"
                      height="200px"
                    ></textarea>
                  </div>
                  <label>Images</label>
                  <div style={{ display: "flex" }}>
                    <div>
                      <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          this.setState({ image: base64 })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn red_btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => this.clearValues()}
                    style={{
                      padding: "1rem 1.5rem",
                      color: "#fff",
                      margin: "0 1rem",
                      borderRadius: "10px",
                    }}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save Changes"
                    style={{
                      background: "#56b467",
                      padding: "1rem 1.5rem",
                      color: "#fff",
                      margin: "0 1rem",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* modal ends */}
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
  fetchTestimonial,
  deleteTestimonial,
  updateTestimonials,
  fetchSingleTestimonial,
})(Testimonials);
