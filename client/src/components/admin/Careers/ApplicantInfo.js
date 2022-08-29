import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { Document, Page } from "react-pdf";

import { fetchSingleCareer } from "../../../actions/otherActions";
import "./career.css";
import AdminHeader from "../AdminHeader";

class CandidateInfo extends Component {
  state = { numPages: null, pageNumber: 1 };
  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    trackPromise(this.props.fetchSingleCareer(queryParams.get("id")));
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ numPages });
  }

  render() {
    // console.log(this.props.SingleCareer);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <div className="op-header">
          <div className="section-header text-center">
            {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
            <h1 className="f1 fw-7 cw">Applicant Information</h1>
            {/* <h2 className="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <div className="container">
          <a
            className="btn btn-primary text-light"
            href="/appliedCandidates"
            style={{ margin: "2rem auto" }}
          >
            Back
          </a>
          <div className="row">
            <div className="col-12 col-md-6 careerObject">
              {/* <object data={this.props.SingleCareer.resume}></object> */}
              <Document
                file={this.props.SingleCareer.resume}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={this.state.pageNumber} />
              </Document>
              <a
                href={this.props.SingleCareer.resume}
                style={{ color: "blue" }}
              >
                click here to download
              </a>
            </div>
            <div className="col-12 col-md-6 applied">
              <p>
                <b>Name:</b> {this.props.SingleCareer.name}
              </p>
              <p>
                <b>State:</b> {this.props.SingleCareer.state}
              </p>
              <p>
                <b>Department:</b> {this.props.SingleCareer.department}
              </p>
              <p>
                <b>Position:</b> {this.props.SingleCareer.position}
              </p>
              <p>
                <b>Mobile No. :</b> {this.props.SingleCareer.mobile}
              </p>
              <p>
                <b>Email Id:</b> {this.props.SingleCareer.email}
              </p>
              <p>
                <b>Message:</b> {this.props.SingleCareer.message}
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    SingleCareer: state.SingleCareer,
  };
};

export default connect(mapStateToProps, {
  fetchSingleCareer,
})(CandidateInfo);
