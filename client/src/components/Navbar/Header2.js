import React from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";

import { fetchSearches } from "../../actions/otherActions";

class Header2 extends React.Component {
  state = {
    search: "",
  };

  componentDidMount() {
    $(window).on("scroll", function () {
      if (this.scrollY > 1) {
        $("nav").css("background-color", "#f5f5f5");
      } else {
        $("nav").css("background-color", "#f5f5f5");
      }
    });

    $(".search_here").on("click", function () {
      $(".search_bar").slideDown();
    });
    $(".search_close").on("click", function () {
      $(".search_bar").slideUp();
    });

    $(".underline").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  renderSearchList() {
    const searches = [
      { searchTerm: "About Us", link: "/about" },
      { searchTerm: "products", link: "/mgproducts" },
      { searchTerm: "Fertilizers", link: "/fertilizer" },
      { searchTerm: "Growth Promoters", link: "/growthPromoters" },
      { searchTerm: "Adjuvants", link: "/adjuvants" },
      { searchTerm: "Bio Products", link: "/bioProducts" },
      { searchTerm: "Pesticides", link: "/pesticides" },
      { searchTerm: "Seeds", link: "/seeds" },
      { searchTerm: "Sprayers", link: "/sprayers" },
      { searchTerm: "Services", link: "/services" },
      { searchTerm: "Group Of Companies", link: "/#groupOfCompanies" },
      { searchTerm: "News And Articles", link: "/#newsAndArticles" },
      { searchTerm: "Time To Change", link: "/#timeToChange" },
      { searchTerm: "Farmers Choice", link: "/#timeToChange" },
      { searchTerm: "Dr. G P SHETTY", link: "/about#gpShetty" },
      { searchTerm: "Mr. MAHESH G SHETTY", link: "about#aboutManagement" },
      { searchTerm: "Managing Director", link: "about#aboutManagement" },
      { searchTerm: "Mrs. NISHCHITA M SHETTY", link: "/about#she" },
      { searchTerm: "Director", link: "/about#she" },
      { searchTerm: "Contact Us", link: "/contact" },
      { searchTerm: "Our Branches", link: "/contact" },
      { searchTerm: "Awards and Recognitions", link: "/awards" },
      { searchTerm: "certificates", link: "/#certificates" },
      { searchTerm: "Success stories", link: "/success" },
      { searchTerm: "careers", link: "/careers" },
      { searchTerm: "Job Vacancy", link: "/careers" },
      { searchTerm: "Post your Resume", link: "/careers" },
    ];
    return searches
      .filter((val) => {
        if (this.state.search === "") {
          return false;
        } else if (
          val.searchTerm.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
        return false;
      })
      .map((search) => {
        return (
          <li key={search._id} className="list-group-item text-capitalize">
            <a href={search.link}>{search.searchTerm}</a>
          </li>
        );
      });
  }

  render() {
    return (
      <div>
        <header className="header2" style={{ zIndex: "10", background: "" }}>
          <nav
            className="navbar-fixed-top header2"
            style={{ padding: "15px", zIndex: "10" }}
          >
            <div className="container-fluid ">
              <div className="navbar-header ">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#main-menu"
                >
                  {" "}
                  <span></span> <span></span> <span></span>
                </button>
                <Link className="navbar-brand" to="/">
                  <img
                    src="img/MULTIPLEX_IMAGES/MAIN_LOGO/Multiplex.png"
                    alt="logo"
                    width="125px"
                    height="100px"
                  />
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="main-menu">
                <ul className="nav navbar-nav f1 mainMenu text-capitalize">
                  <li className="active underline">
                    <Link to="/">Home</Link>
                  </li>
                  <li className=" underline">
                    <Link to="/about">About</Link>
                    <ul className="sub-menu">
                      <li>
                        <a href="/about#shetty">Founder & Chairman</a>
                      </li>
                      <li>
                        <a href="/about#aboutManagement">Management</a>
                      </li>
                    </ul>
                  </li>
                  <li className="underline">
                    <Link to="/infrastructure">Infrastructure</Link>
                  </li>
                  <li className="underline">
                    <Link to="/mgproducts">Products</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/fertilizer">Fertilizers</Link>
                      </li>
                      <li>
                        <Link to="/growthPromoters">Growth Promoters</Link>
                      </li>
                      <li>
                        <Link to="/adjuvants">Adjuvants</Link>
                      </li>
                      <li>
                        <Link to="/bioProducts">Bio-products</Link>
                      </li>
                      <li>
                        <Link to="/pesticides">Pesticides</Link>
                      </li>
                      <li>
                        <Link to="/pheromones">Pheromones</Link>
                      </li>
                      <li>
                        <Link to="/seeds">Seeds</Link>
                      </li>
                      <li>
                        <Link to="/sprayers">Sprayers</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="underline">
                    <Link to="/services">Services</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/services">Multiplex Farming</Link>
                      </li>
                      <li>
                        <Link to="/lab">Multiplex biotech laboratory</Link>
                      </li>
                      <li>
                        <Link to="/farmingClub">Multiplex Farmers Club</Link>
                      </li>
                      <li>
                        <Link to="/vahini">Multiplex Vahini</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="underline">
                    <Link to="/careers">Careers</Link>
                  </li>
                  {/* <li className="underline">
                    <Link
                      to="#"
                      className="nav-link smoothScroll"
                      data-toggle="modal"
                      data-target="#payment"
                      // style={{ fontSize: "1.5rem" }}
                    >
                      Payment
                    </a>
                  </li> */}
                  <li style={{ marginRight: "1rem" }}>
                    <button className="search_here">
                      <i className="fa fa-search"></i>
                    </button>
                  </li>
                </ul>
                <ul className="nav navbar-nav social-nav navbar-right">
                  <li>
                    {/* <a
                      href="https://www.instagram.com/multiplexgroup/"
                      target="_blank"
                    >
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </a> */}
                    {/* The below changes are made to the above lines to eliminate 'target="_blank"
                    rel="noopener noreferrer"' error */}
                    <a
                      href="https://www.instagram.com/multiplexgroup/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    {/* <a
                      href="https://www.facebook.com/MultiplexGroupofCompanies"
                      target="_blank"
                    >
                      {" "}
                      <i className="fab fa-facebook-f"></i>
                    </a> */}
                    {/* The below changes are made to the above lines to eliminate 'target="_blank"
                    rel="noopener noreferrer"' error */}
                    <a
                      href="https://www.facebook.com/MultiplexGroupofCompanies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    {/* <a
                      href="https://www.linkedin.com/company/multiplex-group-of-companies"
                      target="_blank"
                    >
                      {" "}
                      <i className="fab fa-linkedin"></i>
                    </a> */}
                    {/* The below changes are made to the above lines to eliminate 'target="_blank"
                    rel="noopener noreferrer"' error */}
                    <a
                      href="https://www.linkedin.com/company/multiplex-group-of-companies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    {/* <a
                      href="https://www.youtube.com/MultiplexFarmer"
                      target="_blank"
                    >
                      {" "}
                      <i className="fab fa-youtube-play"></i>
                    </a> */}
                    {/* The below changes are made to the above lines to eliminate 'target="_blank"
                    rel="noopener noreferrer"' error */}
                    <a
                      href="https://www.youtube.com/MultiplexFarmer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <i className="fab fa-youtube-play"></i>
                    </a>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="form-group search_bar">
                <input
                  className="form-control"
                  placeholder="Search Here..."
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                />
                <button className="search_close">&times;</button>
                {this.state.search.length >= 1 ? (
                  <ul className="list-group">{this.renderSearchList()}</ul>
                ) : null}
              </div>
            </div>
          </nav>

          <div
            className="modal fade"
            id="payment"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ zIndex: 9999 }}
          >
            <div
              className="modal-dialog modal-dialog-centered payment_modal"
              role="document"
            >
              <div className="modal-content custom-div ">
                <div className="modal-header">
                  <h2
                    className="modal-title d-block w-100 text-center"
                    id="exampleModalLabel"
                  >
                    UPI PAYMENT
                  </h2>
                  <button
                    type="button"
                    style={{ marginTop: "-40px", marginBottom: "10px" }}
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body mt-4 text-center">
                  <div className="row">
                    <img
                      src="img/MULTIPLEX_IMAGES/upi_payment.jpg"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <br />
        <br />
        <br />
        <br />
        <div
          className="modal fade"
          id="payment3"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ zIndex: 9999 }}
        >
          <div
            className="modal-dialog modal-dialog-centered payment_modal"
            role="document"
          >
            <div className="modal-content custom-div ">
              <div className="modal-header">
                <h2
                  className="modal-title d-block w-100 text-center"
                  id="exampleModalLabel"
                >
                  UPI PAYMENT
                </h2>
                <button
                  type="button"
                  style={{ marginTop: "-40px", marginBottom: "10px" }}
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body mt-4 text-center">
                <div className="row">
                  <img
                    src="img/MULTIPLEX_IMAGES/upi_payment.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    searches: state.testimonials,
  };
};

export default connect(mapStateToProps, { fetchSearches })(Header2);
