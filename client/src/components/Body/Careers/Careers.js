import React, { Component } from "react";
import $ from "jquery";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";
import emailjs from "emailjs-com";
import PropTypes from "prop-types";

import Header2 from "../../Navbar/Header2";
import {
  fetchCareerVacancy,
  fetchSearchedCareerVacancy,
  createCareer,
  fetchGallery,
} from "../../../actions/otherActions";
import Footer from "../../Footer/Footer";
import FileBase64 from "react-file-base64";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Careers extends Component {
  componentDidMount() {
    document.title = "Career - Multiplex Group";
    
  }

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
    adminEmail: "",
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

  componentDidMount() {
    // Calling careers
    trackPromise(this.props.fetchCareerVacancy());
    trackPromise(this.props.fetchGallery());
    this.setState({ update: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.CareerVacancies.filter(
        (val) => val._id === this.state.id
      );
      const obj = value[0];
      if (obj === undefined) {
        return;
      } else {
        delete obj["_id"];
        delete obj["__v"];
        this.setState(obj);
      }
    }
    if (this.state.update !== prevState.update) {
      trackPromise(this.props.fetchGallery());
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

  renderPosition() {
    const positions = ["Accountant", "Farmer", "Doctor", "Police", "Lawyer"];

    return positions.map((position) => {
      return <option value={position}>{position}</option>;
    });
  }

  renderTable() {
    return this.props.CareerVacancies.map((careers, index) => {
      return (
        <tr key={careers._id}>
          <td>{careers.state}</td>
          {careers.department === "Others" ? (
            <td>{careers.othersDep}</td>
          ) : (
            <td>{careers.department}</td>
          )}
          <td>{careers.position}</td>
          <td>{careers.qualification}</td>
          <td>{careers.num}</td>
          <td>
            <button
              class="btn btn-success"
              data-toggle="modal"
              data-target="#formSubmit"
              onClick={() => {
                this.setState({ id: careers._id });
              }}
            >
              Apply
            </button>
          </td>
        </tr>
      );
    });
  }

  clearValues() {
    this.setState({
      search: "",
      name: "",
      mobile: "",
      email: "",
      message: "",
      id: "",
    });
  }

  renderImages() {
    return this.props.gallery
      .filter((value) => {
         
        if (value.category === "Career's Page") {
          return value;
        }
        //This below line is added as Array.prototype.filter expects a value to be returned from within the callback function implying whether to keep or rejeect the current itemm value
        return false 
      })
      .map((gallery) => {
        return (
          <div className="item" key={gallery._id}>
            {/* <img src={gallery.image}/> */}
            <img src={gallery.image} alt=""/>

          </div>
        );
      });
  }

  onSubmit(e) {
    e.preventDefault();
    // trackPromise(this.props.createCareer(this.state));
    // console.log(this.state);
    // emailjs
    //   .sendForm(
    //     "service_j8jcg52",
    //     "template_469u14u",
    //     e.target,
    //     "user_F1QUuoMIYlLWNpsZnA2QW"
    //   )
    //   .then(
    //     (result) => {
    //       // window.location.reload();
    //       alert("Thankyou for Subscribing");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    let formData = new FormData();
    formData.append("photo", this.state.resume);
    trackPromise(this.props.createCareer(this.state, formData));
    this.clearValues();
  }

  onUpdate(e) {
    e.preventDefault();
    trackPromise(this.props.updateVacancy(this.state.id, this.state));
    // console.log(this.state);
    this.clearValues();
  }

  render() {
    // console.log(this.props.careers);
    return (
      <div>
        <Header2 />
        <div class="op-header">
          <div class="section-header text-center  section-header1">
            {/*   <h2 class="f2 c3">Contact us</h2>  */}
            <h1 class="f1 fw-7 cw">Careers</h1>
            <h2
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginTop: "1rem",
              }}
            >
              Come let's grow together!
            </h2>
          </div>
        </div>
        <div className="careerContent">
          <div className="container" style={{ margin: "3rem auto" }}>
            <div className="row project-area clearfix">
              <div className="col-12 text-justify">
                <div style={{ padding: "3rem", fontSize: "2rem" }}>
                  <p>
                    <span style={{ marginLeft: "3rem", fontSize: "4rem" }}>
                      <b>M</b>
                    </span>
                    ultiplex believes to represent innovation in Agri-Technology
                    and thrives to create a healthy ecosystem to achieve the
                    same. Our employees are spread nationwide with different
                    backgrounds and varied culture with a positive attitude to
                    accomplish our vision.
                    <br />
                    Multiplex is delighted to have more than 1500 employees with
                    varied designations, skills, and experience working to
                    provide the quality products timely to maintain a long-term
                    customer relationship.
                    <br />
                    Our employees are entitled for wide benefits from health
                    Insurance and Bonus to retirement benefits to appreciate
                    their dedication towards work. Besides, we look forward to
                    create a platform to bring out the best of an individual in
                    terms of their performance and proficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-header text-center section-header1">
              {/* <h2 className="f2 c1">News & Articles</h2> */}
              <h1 className="f1 fw-7 c4" style={{ margin: "2rem auto" }}>
                Life at Multiplex
              </h1>
            </div>
            <OwlCarousel
              className="owl-theme lab_imgs"
              loop
              margin={10}
              autoplay
              autoplayTimeout={3000}
              responsive={this.state.responsive}
            >
              {this.renderImages()}
            </OwlCarousel>
            <div style={{ margin: "2rem auto" }}>
              <div className="form-group mt-50">
                <label>Search State or Department or Position</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search State or Department or Position"
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                    this.props.fetchSearchedCareerVacancy(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped  styled-table">
                <thead>
                  <tr>
                    {/* <th>Sl. No</th> */}
                    <th>State</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Qualification & Experience</th>
                    <th>No. Of Vacancies</th>
                    <th style={{ opacity: 0 }}>Department</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />

        {/* <!-- Modal 7  --> */}
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade groups"
            id="formSubmit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h2
                    className="modal-title d-block w-100 text-center"
                    id="exampleModalLabel"
                  >
                    Careers Form
                  </h2>
                  <button
                    type="button"
                    style={{ marginTop: " -40px", marginBottom: "10px" }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row" style={{ margin: "2rem auto" }}>
                    <div className="col-md-4 col-12">
                      <label>State: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.state}
                        disabled
                        required
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <label>Position: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.position}
                        disabled
                        required
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <label>Department: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.department}
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div className="row" style={{ margin: "2rem auto" }}>
                    <div className="col-12 col-md-6">
                      <label>Name: </label>
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.name}
                        onChange={(e) => {
                          this.setState({ name: e.target.value });
                        }}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Mobile Number: </label>
                      <input
                        className="form-control"
                        type="number"
                        value={this.state.mobile}
                        onChange={(e) => {
                          this.setState({ mobile: e.target.value });
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="row" style={{ margin: "2rem auto" }}>
                    <div className="col-12 col-md-6">
                      <label>Email Id: </label>
                      <input
                        className="form-control"
                        type="email"
                        value={this.state.email}
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        required
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <label>Upload Resume:</label>
                      <input
                        name="image"
                        type="file"
                        onChange={(e) => {
                          this.setState({ resume: e.currentTarget.files[0] });
                        }}
                      />
                    </div>
                  </div>
                  <div className="row" style={{ margin: "2rem auto" }}>
                    <label>Message: </label>
                    <textarea
                      className="form-control"
                      type="text"
                      value={this.state.message}
                      onChange={(e) => {
                        this.setState({ message: e.target.value });
                      }}
                      onKeyDown={this.handleKeyDown}
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-success"
                  />
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* <!-- Modal footer ends --> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CareerVacancies: state.CareerVacancies,
    gallery: state.welcome,
  };
};

export default connect(mapStateToProps, {
  fetchCareerVacancy,
  fetchSearchedCareerVacancy,
  createCareer,
  fetchGallery,
})(Careers);
