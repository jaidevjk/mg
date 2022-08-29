import React, { Component } from "react";
import Header2 from "../Navbar/Header2";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import $ from "jquery";

import { fetchSprayers, fetchSingleSprayer } from "../../actions/Products";
import { createEnquiry } from "../../actions/otherActions";
import { trackPromise } from "react-promise-tracker";
import emailjs from "emailjs-com";

class Sprayers extends Component {
  state = {
    search: "",
    name: "",
    email: "",
    available: "",
    crop: "",
    dosage: "",
    benefits: "",
    category: "",
    composition: "",
    image: "",
    image1: "",
    image2: "",
    notes: "",
    others: "",
    activeIngredients: "",
    modeOfAction: "",
    precautions: "",
    specialFeatures: "",
    plantType: "",
    duration: "",
    flowering: "",
    fruitShape: "",
    fruitLength: "",
    podLength: "",
    rootLength: "",
    fruitWeight: "",
    crudWeight: "",
    headWeight: "",
    fruitColor: "",
    fruitBearing: "",
    harvesting: "",
    packageOfPractices: "",
    TimeOfErection: "",
    description: "",
    technicalSpecifications: "",
    userName: "",
    mobile: "",
    state: "",
    address: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchSprayers());

    $(".list").on("click", function () {
      const value = $(this).attr("data-filter");
      if (value === "all") {
        $(".itemBox").show("1000");
      } else {
        $(".itemBox")
          .not("." + value)
          .hide("1000");
        $(".itemBox")
          .filter("." + value)
          .show("1000");
      }
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  renderProducts() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
        return false;
      })
      .map((product) => {
        return (
          <div
            className={`itemBox ${product.category} masonary-item`}
            key={product._id}
          >
            <div
              className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}
              onClick={() => {
                // trackPromise(this.props.fetchSingleSprayer(product._id));
                this.setState({ id: product._id });
              }}
            >
              <div className="item clearfix">
                <img src={product.image} alt="" />
                <div
                  className="item-content tnz bg_color cw f1"
                  data-toggle="modal"
                  data-target="#krishay"
                >
                  <h2 className="fw-7">{product.name}</h2>
                  <br />
                </div>
              </div>
            </div>
          </div>
        );
      });
  }

  renderSearchList() {
    const searches = [];
    this.props.products.map((product) => {
      // searches.push(product.name);
      //The above line is replaced by the below
      return searches.push(product.name);
    });
    // console.log(searches);
    return searches
      .filter((val) => {
        if (this.state.search === "") {
          return null;
        } else if (
          val.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
        return false;
      })
      .map((search) => {
        // console.log(search);
        return (
          <li
            key={search}
            className="list-group-item text-capitalize"
            onClick={() => {
              this.setState({ search });
              $(".searchList").fadeOut();
            }}
            style={{ cursor: "pointer" }}
          >
            <a href="!#">{search}</a>
          </li>
        );
      });
  }

  onSubmit(e) {
    e.preventDefault();
    trackPromise(
      this.props.createEnquiry({
        userName: this.state.userName,
        email: this.state.email,
        mobile: this.state.mobile,
        state: this.state.state,
        address: this.state.address,
      })
    );

    this.setState({
      userName: "",
      email: "",
      mobile: "",
      state: "",
      address: "",
    });
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

  // Modal Starts here
  // Modal Starts here
  renderModal() {
    return (
      <div
        className="modal fade groups"
        id="krishay"
        tabIndex="-1"
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
                {this.state.name}
              </h2>
              <button
                type="button"
                style={{
                  marginTop: "-40px",
                  marginBottom: " 10px",
                }}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body modal_body">
              <div className="row">
                <div className="col-md-4 my-auto">
                  <div className="row">
                    <div className="col-12">
                      <img src={this.state.image} alt="" />
                    </div>
                    <div className="col-12" style={{ margin: "2rem 0" }}>
                      <img src={this.state.image1} alt="" />
                    </div>
                    <div className="col-12">
                      <img src={this.state.image2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  {this.state.available === "" ? null : (
                    <div>
                      <h4>AVAILABLE PACKING:</h4>
                      <p>{this.state.available}</p>
                    </div>
                  )}
                  {this.state.composition === "" ? null : (
                    <div>
                      <h4>Composition:</h4>
                      <ul
                        style={{
                          fontSize: " 20px",
                          listStyleType: "circle !important",
                        }}
                      >
                        <li>{this.state.composition}</li>
                      </ul>
                    </div>
                  )}
                  {this.state.crop === "" ? null : (
                    <div>
                      <h4>Crop:</h4>
                      <p>{this.state.crop}</p>
                    </div>
                  )}
                  {this.state.dosage === "" ? null : (
                    <div>
                      <h4>DOSAGE & Methods Of Application:</h4>
                      <p>{this.state.dosage}</p>
                    </div>
                  )}
                  {this.state.benefits === "" ? null : (
                    <div>
                      <h4>Benefits:</h4>
                      <p>{this.state.benefits}</p>
                    </div>
                  )}
                  {this.state.notes === "" ? null : (
                    <div>
                      <h4>Notes:</h4>
                      <p>{this.state.notes}</p>
                    </div>
                  )}
                  {this.state.others === "" ? null : (
                    <div>
                      <h4>Others:</h4>
                      <p>{this.state.others}</p>
                    </div>
                  )}
                  {this.state.activeIngredients === "" ? null : (
                    <div>
                      <h4>Active Ingredients:</h4>
                      <p>{this.state.activeIngredients}</p>
                    </div>
                  )}
                  {this.state.modeOfAction === "" ? null : (
                    <div>
                      <h4>Mode Of Action:</h4>
                      <p>{this.state.modeOfAction}</p>
                    </div>
                  )}
                  {this.state.precautions === "" ? null : (
                    <div>
                      <h4>Precautions:</h4>
                      <p>{this.state.precautions}</p>
                    </div>
                  )}
                  {this.state.specialFeatures === "" ? null : (
                    <div>
                      <h4>Special Features:</h4>
                      <p>{this.state.specialFeatures}</p>
                    </div>
                  )}
                  {this.state.plantType === "" ? null : (
                    <div>
                      <h4>Plant Type:</h4>
                      <p>{this.state.plantType}</p>
                    </div>
                  )}
                  {this.state.duration === "" ? null : (
                    <div>
                      <h4>Duration:</h4>
                      <p>{this.state.duration}</p>
                    </div>
                  )}
                  {this.state.flowering === "" ? null : (
                    <div>
                      <h4>flowering:</h4>
                      <p>{this.state.flowering}</p>
                    </div>
                  )}
                  {this.state.fruitShape === "" ? null : (
                    <div>
                      <h4>Fruit Shape:</h4>
                      <p>{this.state.fruitShape}</p>
                    </div>
                  )}
                  {this.state.fruitLength === "" ? null : (
                    <div>
                      <h4>Fruit Length:</h4>
                      <p>{this.state.fruitLength}</p>
                    </div>
                  )}
                  {this.state.podLength === "" ? null : (
                    <div>
                      <h4>Pod Length:</h4>
                      <p>{this.state.podLength}</p>
                    </div>
                  )}
                  {this.state.rootLength === "" ? null : (
                    <div>
                      <h4>Root Length:</h4>
                      <p>{this.state.rootLength}</p>
                    </div>
                  )}
                  {this.state.fruitWeight === "" ? null : (
                    <div>
                      <h4>Fruit Weight:</h4>
                      <p>{this.state.fruitWeight}</p>
                    </div>
                  )}
                  {this.state.crudWeight === "" ? null : (
                    <div>
                      <h4>Crud Weight:</h4>
                      <p>{this.state.crudWeight}</p>
                    </div>
                  )}
                  {this.state.headWeight === "" ? null : (
                    <div>
                      <h4>Plant Height:</h4>
                      <p>{this.state.headWeight}</p>
                    </div>
                  )}
                  {this.state.fruitColor === "" ? null : (
                    <div>
                      <h4>Fruit Color:</h4>
                      <p>{this.state.fruitColor}</p>
                    </div>
                  )}
                  {this.state.fruitBearing === "" ? null : (
                    <div>
                      <h4>Fruit Bearing:</h4>
                      <p>{this.state.fruitBearing}</p>
                    </div>
                  )}
                  {this.state.harvesting === "" ? null : (
                    <div>
                      <h4>Harvesting:</h4>
                      <p>{this.state.harvesting}</p>
                    </div>
                  )}
                  {this.state.packageOfPractices === "" ? null : (
                    <div>
                      <h4>Package Of Practices:</h4>
                      <p>{this.state.packageOfPractices}</p>
                    </div>
                  )}
                  {this.state.TimeOfErection === "" ? null : (
                    <div>
                      <h4>Time Of Erection:</h4>
                      <p>{this.state.TimeOfErection}</p>
                    </div>
                  )}
                  {this.state.description === "" ? null : (
                    <div>
                      <h4>Description:</h4>
                      <p>{this.state.description}</p>
                    </div>
                  )}
                  {this.state.technicalSpecifications === "" ? null : (
                    <div>
                      <h4>Technical Specifications:</h4>
                      <p>{this.state.technicalSpecifications}</p>
                    </div>
                  )}

                  <br />

                  <h4 style={{ margin: "2rem 0" }}>Share:</h4>
                  <div className="share">
                    <ul className="social-nav share_icons">
                      <li>
                        {/* <a
                          href={`http://twitter.com/share?text=Multiplex+Urban+Green+Products&url=${this.state.url}&hashtags=#MultiplexGroupOfCompanies`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a> */}
                        {/* The below changes are made to the above lines to eliminate 'target="_blank"
                          rel="noopener noreferrer"' error */}
                          <a
                          href={`http://twitter.com/share?text=Multiplex+Urban+Green+Products&url=${this.state.url}&hashtags=#MultiplexGroupOfCompanies`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a> */}
                        {/* The below changes are made to the above lines to eliminate 'target="_blank"
                          rel="noopener noreferrer"' error */}
                          <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        {/* <a href="https://www.instagram.com" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a> */}
                        {/* The below changes are made to the above lines to eliminate 'target="_blank"
                          rel="noopener noreferrer"' error */}
                          <a href="https://www.instagram.com" 
                             target="_blank"
                             rel="noopener noreferrer"
                          >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        {/* <a
                          href={`whatsapp://send?text=${window.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a> */}
                        {/* The below changes are made to the above lines to eliminate 'target="_blank"
                          rel="noopener noreferrer"' error */}
                          <a
                          href={`whatsapp://send?text=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 style={{ margin: "1rem 0" }}>Download:</h4>
                  {/* <a
                    className="download_btn"
                    href="https://drive.google.com/file/d/1wac4PNr5nRa607frKa5PHDxo6hTIuBVl/view?usp=sharing"
                    target="_blank"
                  >
                    <i className="fa fa-download"></i>
                  </a> */}
                  {/* The below changes are made to the above lines to eliminate 'target="_blank"
                          rel="noopener noreferrer"' error */}
                  <a
                    className="download_btn"
                    href="https://drive.google.com/file/d/1wac4PNr5nRa607frKa5PHDxo6hTIuBVl/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-download"></i>
                  </a>
                  <h4 style={{ margin: "2rem 0" }}>Enquiry:</h4>
                  <div className="enquiry">
                    <form action="" onSubmit={this.onSubmit.bind(this)}>
                      <div className="form-group">
                        <input
                          autoComplete="off"
                          required
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          value={this.state.userName}
                          onChange={(e) => {
                            this.setState({ userName: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          autoComplete="off"
                          required
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Id"
                          value={this.state.email}
                          onChange={(e) => {
                            this.setState({ email: e.target.value });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          autoComplete="off"
                          required
                          type="number"
                          className="form-control"
                          name="mobile"
                          placeholder="Mobile Number"
                          value={this.state.mobile}
                          onChange={(e) => {
                            this.setState({ mobile: e.target.value });
                          }}
                        />
                      </div>
                      <div className="dropDown">
                        <select
                          name="state"
                          id="states"
                          style={{
                            display: "block",
                            width: "100%",
                            background: "#f5f5f5",
                            padding: "15px",
                            marginBottom: "3rem",
                          }}
                          required
                          value={this.state.state}
                          onChange={(e) => {
                            this.setState({ state: e.target.value });
                          }}
                        >
                          <option value="">Select State</option>
                          {this.renderStates()}
                        </select>
                      </div>

                      <div className="form-group">
                        <textarea
                          type="text"
                          name="address"
                          className="form-control products_input"
                          value={this.state.address}
                          onChange={(e) => {
                            this.setState({ address: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                          placeholder="Address"
                        ></textarea>
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        className="submit_btn btn btn-success"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    // console.log(this.props.SingleProduct);
    return (
      <div>
        <Header2 />
        <div className="op-header">
          <div className=" section-header  section-header1 text-center">
            {/* <h2 className="f2 c3">Products</h2> */}
            <h1 className="f1 fw-7 cw fontSize1">Sprayers</h1>
            <h3
              className="fontSize3"
              style={{ color: "#fff", fontSize: "1.8rem", marginTop: "1rem" }}
            >
              Spraying technology in agriculture brings in uniformity across the
              field.
            </h3>
          </div>
        </div>
        <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
          <div className="form-group ">
            <label htmlFor="search">Search By Product Name:</label>
            <input
              className="form-control"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              placeholder="Search By Product Name."
              id="search"
              autoComplete="off"
            />
          </div>
          {this.state.search.length >= 1 ? (
            <ul className="list-group searchList" style={{ marginTop: "-2%" }}>
              {this.renderSearchList()}
            </ul>
          ) : null}
        </div>
        <div className="page-content" style={{ margin: "3rem auto" }}>
          <div className="container">
            <div className="gallery-filter mb-30 f1">
              <ul className="post-filter masonary text-center list-inline text-capitalize">
                <Link to="/mgproducts" className="back_button">
                  Back
                </Link>
                {/* <li className="filter active" data-filter=".masonary-item">
                  <span className="fw-7">All</span>
                </li> */}
                <li className="filter active list" data-filter="Sprayers">
                  <span className="fw-7">Sprayers</span>
                </li>
              </ul>
              {/* <!-- /.post-filter --> */}
            </div>
            <div className="row project-blocks filter-layout">
              {this.renderProducts()}
            </div>
          </div>
        </div>
        <Footer />
        {this.renderModal()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    SingleProduct: state.SingleProduct,
  };
};

export default connect(mapStateToProps, {
  fetchSprayers,
  fetchSingleSprayer,
  createEnquiry,
})(Sprayers);
