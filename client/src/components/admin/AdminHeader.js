import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";

import { logout } from "../../actions/auth";

class AdminHeader extends Component {
  render() {
    return (
      <div>
        <header className="header1" style={{ zIndex: "10" }}>
          <nav
            className="navbar-fixed-top mb-0 bg4"
            style={{ padding: "15px", zIndex: "9999" }}
          >
            <div className="container-fluid">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/adminHome">
                  <img
                    src="img/MULTIPLEX_IMAGES/MAIN_LOGO/Multiplex.png"
                    alt="logo"
                    width="125px"
                    height="100px"
                  />
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  width: "50%",
                  marginLeft: "40%",
                }}
              >
                <h2>
                  <b>Admin Panel</b>
                </h2>
                <ul className="nav navbar-nav  mainMenu text-capitalize">
                  <li className="underline">
                    <Link to="/adminHome">Dashboard</Link>
                  </li>
                  <li className="underline">
                    <a
                      href="!#"
                      className="my-auto btn btn-secondary"
                      onClick={() => {
                        trackPromise(this.props.logout(this.props.history));
                      }}
                    >
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logout })(withRouter(AdminHeader));
