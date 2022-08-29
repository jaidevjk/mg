import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import {
  fetchCareerVacancy,
  deleteVacancy,
  createVacancy,
  updateVacancy,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";

class AddCareer extends Component {
  state = {
    state: "",
    department: "",
    position: "",
    id: "",
    num: "",
    adminEmail: "",
    othersDep: "",
    qualification: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchCareerVacancy());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.careers.filter(
        (val) => val._id === this.state.id
      );
      //   console.log(value);
      this.setState(value[0]);
      //   console.log(this.state);
    }
  }

  renderStates() {
    const states = [
      { code: "AN", name: "Andaman and Nicobar Islands" },
      { code: "AP", name: "Andhra Pradesh" },
      { code: "AR", name: "Arunachal Pradesh" },
      { code: "AS", name: "Assam" },
      { code: "BR", name: "Bihar" },
      { code: "CG", name: "Chandigarh" },
      { code: "CH", name: "Chhattisgarh" },
      { code: "DH", name: "Dadra and Nagar Haveli" },
      { code: "DD", name: "Daman and Diu" },
      { code: "DL", name: "Delhi" },
      { code: "GA", name: "Goa" },
      { code: "GJ", name: "Gujarat" },
      { code: "HR", name: "Haryana" },
      { code: "HP", name: "Himachal Pradesh" },
      { code: "JK", name: "Jammu and Kashmir" },
      { code: "JH", name: "Jharkhand" },
      { code: "KA", name: "Karnataka" },
      { code: "KL", name: "Kerala" },
      { code: "LD", name: "Lakshadweep" },
      { code: "MP", name: "Madhya Pradesh" },
      { code: "MH", name: "Maharashtra" },
      { code: "MN", name: "Manipur" },
      { code: "ML", name: "Meghalaya" },
      { code: "MZ", name: "Mizoram" },
      { code: "NL", name: "Nagaland" },
      { code: "OR", name: "Odisha" },
      { code: "PY", name: "Puducherry" },
      { code: "PB", name: "Punjab" },
      { code: "RJ", name: "Rajasthan" },
      { code: "SK", name: "Sikkim" },
      { code: "TN", name: "Tamil Nadu" },
      { code: "TS", name: "Telangana" },
      { code: "TR", name: "Tripura" },
      { code: "UK", name: "Uttarakhand" },
      { code: "UP", name: "Uttar Pradesh" },
      { code: "WB", name: "West Bengal" },
    ];

    return states.map((state) => {
      return <option value={state.name}>{state.name}</option>;
    });
  }

  renderDepartment() {
    const departments = [
      "Accounts",
      "Admin",
      "Marketing",
      "Human Resources",
      "Purchase",
      "Others",
    ];

    return departments.map((department) => {
      return <option value={department}>{department}</option>;
    });
  }

  clearValues() {
    this.setState({
      state: "",
      department: "",
      position: "",
      id: "",
      num: "",
      adminEmail: "",
      qualification: "",
    });
  }

  renderTable() {
    return this.props.careers.map((career, index) => {
      return (
        <tr key={career._id}>
          <td>{index + 1}</td>
          <td>{career.state}</td>
          {career.department === "Others" ? (
            <td>{career.othersDep}</td>
          ) : (
            <td>{career.department}</td>
          )}
          <td>{career.position}</td>
          <td>{career.adminEmail}</td>
          <td>{career.qualification}</td>
          <td>{career.num}</td>
          <td>
            {/* <a
              data-toggle="modal"
              data-target="#career"
              onClick={() => {
                this.setState({ id: career._id });
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-pen"></i>
            </a> */}
            {/* The abpve code is replaced by the below code */}
            <a
              href="!#"
              data-toggle="modal"
              data-target="#career"
              onClick={() => {
                this.setState({ id: career._id });
              }}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-pen"></i>
            </a>
          </td>
          <td>
            {/* <a
              onClick={() => trackPromise(this.props.deleteVacancy(career._id))}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-trash"></i>
            </a> */}
            {/* The abpve code is replaced by the below code */}
             <a
              href="!#"
              onClick={() => trackPromise(this.props.deleteVacancy(career._id))}
              style={{ cursor: "pointer" }}
            >
              <i className="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      );
    });
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  onSubmit(e) {
    e.preventDefault();

    trackPromise(this.props.createVacancy(this.state));
    this.clearValues();
  }

  onUpdate(e) {
    e.preventDefault();
    trackPromise(this.props.updateVacancy(this.state.id, this.state));
    // console.log(this.state);
    // this.clearValues();
  }

  render() {
    // console.log(this.props.careers);
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
            <h1 className="f1 fw-7 cw">Post a Job</h1>
            {/* <h2 className="f2 c3">Select Category</h2> */}
          </div>
        </div>

        <div className="container">
          <form action="" onSubmit={this.onSubmit.bind(this)}>
            <div className="row">
              <div className="col-12 col-md-3" style={{ margin: "2rem auto" }}>
                <div className="dropDown">
                  <select
                    value={this.state.state}
                    onChange={(e) => {
                      this.setState({ state: e.target.value });
                    }}
                  >
                    <option>Select State</option>
                    {this.renderStates()}
                  </select>
                </div>
              </div>

              <div className="col-12 col-md-3" style={{ margin: "2rem auto" }}>
                <div className="form-group">
                  <input
                    max="999"
                    placeholder="Position"
                    className="form-control"
                    name="position"
                    value={this.state.position}
                    onChange={(e) => {
                      this.setState({ position: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-md-3" style={{ margin: "2rem auto" }}>
                <div className="form-group">
                  <input
                    placeholder="Email To Be Triggered"
                    className="form-control"
                    name="adminEmail"
                    value={this.state.adminEmail}
                    onChange={(e) => {
                      this.setState({ adminEmail: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-md-3" style={{ margin: "2rem auto" }}>
                <div className="form-group">
                  <input
                    type="number"
                    max="999"
                    placeholder="No. Of Vacancies"
                    className="form-control"
                    name="num"
                    value={this.state.num}
                    onChange={(e) => {
                      this.setState({ num: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-md-3" style={{ margin: "2rem auto" }}>
                <div className="dropDown">
                  <select
                    value={this.state.department}
                    onChange={(e) => {
                      this.setState({ department: e.target.value });
                    }}
                  >
                    <option>Select Department</option>
                    {this.renderDepartment()}
                  </select>
                </div>
              </div>

              {this.state.department === "Others" ? (
                <div
                  className="col-12 col-md-3"
                  style={{ margin: "2rem auto" }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Department"
                      className="form-control"
                      name="num"
                      value={this.state.othersDep}
                      onChange={(e) => {
                        this.setState({ othersDep: e.target.value });
                      }}
                    />
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="col-12 col-md-8" style={{ margin: "2rem auto" }}>
                <div className="form-group">
                  {/* <input
                    placeholder="Qualification and experience"
                    className="form-control"
                    name="qualification"
                    value={this.state.qualification}
                    onChange={(e) => {
                      this.setState({ qualification: e.target.value });
                    }}
                  /> */}

                  <textarea
                    type="text"
                    name="qualification"
                    placeholder="Qualification and experience"
                    className="form-control products_input"
                    value={this.state.qualification}
                    onChange={(e) => {
                      this.setState({ qualification: e.target.value });
                    }}
                    onKeyDown={this.handleKeyDown}
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>

              <div className="col-12 col-md-1" style={{ margin: "2rem auto" }}>
                <input
                  className={`btn btn-success`}
                  type="submit"
                  value="Submit"
                  disabled={
                    !this.state.state ||
                    !this.state.position ||
                    !this.state.department
                  }
                />
              </div>
            </div>
          </form>
        </div>

        <div className="table-responsive">
          <table className="table table-striped styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>State</th>
                <th>Department</th>
                <th>Position</th>
                <th>Email</th>
                <th>Qualification</th>
                <th>No. Of Vacancies</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
        <br />

        {/* modal comes here */}
        <form method="post" onSubmit={this.onUpdate.bind(this)}>
          <div
            className="modal fade"
            id="career"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div className="modal-dialog modal-lg" role="document">
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
                  <div className="row">
                    <div
                      className="col-12 col-md-3"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>State: </label>
                      <div className="dropDown">
                        <select
                          value={this.state.state}
                          onChange={(e) => {
                            this.setState({ state: e.target.value });
                          }}
                        >
                          <option>Select State</option>
                          {this.renderStates()}
                        </select>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-3"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>Position: </label>
                      <div className="form-group">
                        <input
                          max="999"
                          className="form-control"
                          placeholder="Position"
                          value={this.state.position}
                          onChange={(e) => {
                            this.setState({ position: e.target.value });
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-3"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>Email: </label>
                      <div className="form-group">
                        <input
                          placeholder="Email To Be Triggered"
                          className="form-control"
                          name="adminEmail"
                          value={this.state.adminEmail}
                          onChange={(e) => {
                            this.setState({ adminEmail: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="col-12 col-md-3"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>No. of vacancies: </label>
                      <div className="form-group">
                        <input
                          placeholder="No. of Vacancies"
                          className="form-control"
                          name="adminEmail"
                          value={this.state.num}
                          onChange={(e) => {
                            this.setState({ num: e.target.value });
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-9"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>Qualification and experience: </label>
                      <div className="form-group">
                        <textarea
                          type="text"
                          name="qualification"
                          placeholder="Qualification and experience"
                          className="form-control products_input"
                          value={this.state.qualification}
                          onChange={(e) => {
                            this.setState({ qualification: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-3"
                      style={{ margin: "2rem auto" }}
                    >
                      <label>Department: </label>
                      <div className="dropDown">
                        <select
                          value={this.state.department}
                          onChange={(e) => {
                            this.setState({ department: e.target.value });
                          }}
                        >
                          <option>Select Department</option>
                          {this.renderDepartment()}
                        </select>
                      </div>
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
    careers: state.CareerVacancies,
  };
};

export default connect(mapStateToProps, {
  fetchCareerVacancy,
  deleteVacancy,
  createVacancy,
  updateVacancy,
})(AddCareer);
