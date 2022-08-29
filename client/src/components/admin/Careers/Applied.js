import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";

import {
  fetchCareers,
  deleteCareer,
  fetchSingleCareer,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";
import { ExportToExcel } from "../ExportToExcel";

class AppliedCandidates extends Component {
  state = {
    search: "",
    state: "",
    department: "",
    position: "",
    name: "",
    mobile: "",
    email: "",
    resume: "",
    message: "",
    id: "",
    fileName:
      "MG Job Application Report " +
      new Date().getDate() +
      "-" +
      parseInt(new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear() +
      " " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds(),
  };

  componentDidMount() {
    trackPromise(this.props.fetchCareers());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.careers.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
      console.log(this.state);
    }
  }

  clearValues() {
    this.setState({
      search: "",
      state: "",
      department: "",
      position: "",
      name: "",
      mobile: "",
      email: "",
      resume: "",
      message: "",
      id: "",
    });
  }

  renderExcelData() {
    // Excel Info
    const careers = [];
    this.props.careers.map((career, index) => {
      // careers.push({
      //   "Sl. No": index + 1,
      //   Name: career.name,
      //   Department: career.department,
      //   State: career.state,
      //   "Applied Date": new Date(career.date).toLocaleString(),
      //   "Applied Position": career.position,
      //   "Mobile No.": career.mobile,
      //   "Email Id": career.email,
      // });

      // The above code is replaced by the below code to prevent the " Array.prototype.map() expects a return value from arrow function array-callback-return "

      return careers.push({
        "Sl. No": index + 1,
        Name: career.name,
        Department: career.department,
        State: career.state,
        "Applied Date": new Date(career.date).toLocaleString(),
        "Applied Position": career.position,
        "Mobile No.": career.mobile,
        "Email Id": career.email,
      });
    });
    return careers;
  }

  renderTable() {
    return this.props.careers.map((career, index) => {
      return (
        <tr key={career._id}>
          <td>{index + 1}</td>
          <td>{career.name}</td>
          <td>{career.state}</td>
          <td>{career.department}</td>
          <td>{new Date(career.date).toLocaleString()}</td>
          <td>{career.position}</td>
          <td>{career.mobile}</td>
          <td>{career.email}</td>
          <td>
            <a href={`mailto:${career.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
            <span> </span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <a href={`tel:${career.mobile}`}>
              <i className="fa fa-phone"></i>
            </a>
          </td>
          <td>
            <Link to={`/appliedInfo?id=${career._id}`}>
              <i className="fa fa-info-circle"></i>
            </Link>
          </td>
          <td>
            {/* <a
              onClick={() => trackPromise(this.props.deleteCareer(career._id))}
            >
              <i className="fa fa-trash"></i>
            </a> */}
            {/* The above code is replaced by the below */}
            <a href="!#"
              onClick={() => trackPromise(this.props.deleteCareer(career._id))}
            >
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      );
    });
  }

  render() {
    // console.log(this.props.SingleCareer.resume);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <div className="op-header">
          <div className="section-header text-center">
            {/* <!-- <h2 className="f2 c3">Contact us</h2> --> */}
            <h1 className="f1 fw-7 cw">Applied Candidates</h1>
            {/* <h2 className="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <div className="table-responsive">
          <ExportToExcel
            apiData={this.renderExcelData()}
            fileName={this.state.fileName}
          />
          <table className="table table-striped styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>State</th>
                <th>Department</th>
                <th>Applied Date</th>
                <th>Position</th>
                <th>Mobile No.</th>
                <th>Email Id</th>
                <th>Contact</th>
                <th>Resume</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
        <br />
        {/* modal comes here */}

        {/* <div
          className="modal fade"
          id="applicant"
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
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  onClick={() => this.clearValues()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1>{this.state.name}</h1>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn red_btn btn-danger"
                  data-dismiss="modal"
                  style={{
                    padding: "1rem 1.5rem",
                    color: "#fff",
                    margin: "0 1rem",
                    borderRadius: "15px",
                  }}
                  onClick={() => this.clearValues()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* modal ends */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    careers: state.careers,
  };
};

export default connect(mapStateToProps, {
  fetchCareers,
  deleteCareer,
  fetchSingleCareer,
})(AppliedCandidates);
