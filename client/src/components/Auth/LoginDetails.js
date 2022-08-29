import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { compose } from "redux";
import { withRouter } from "react-router";

import AdminHeader from "../admin/AdminHeader";
import { fetchLogins } from "../../actions/auth";

// const mapStyles = {
//   width: "500px",
//   height: "180px",
// };

class LoginDetails extends Component {
  componentDidMount() {
    trackPromise(this.props.fetchLogins());
  }

  renderTable() {
    if (this.props.auth.authData === null) {
      return;
    } else {
      return this.props.auth.authData.map((data, index) => {
        return (
          <tr key={data._id}>
            <td width="2%">{index + 1}</td>
            <td class="bg-success" width="40%">
              <table>
                <tr>
                  <th>Email:</th>
                  <td>{data.email}</td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>{data.date}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>
                    {data.email.toLowerCase() === "admin@gmail.com" ? (
                      <span style={{ color: "green" }}>Success</span>
                    ) : (
                      <span style={{ color: "red" }}>Failed</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Position:</th>
                  <td>
                    Latitude:{data.latitude} <br /> Longitude:{data.longitude}
                  </td>
                </tr>
              </table>
            </td>
            {/* <td height="200px">
              <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{
                  lat: data.latitude,
                  lng: data.longitude,
                }}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={"This is test name"}
                />
              </Map>
            </td> */}
          </tr>
        );
      });
    }
  }

  render() {
    // console.log(this.props.auth.authData);

    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Login Attempts</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <AdminHeader />

        <table className="table table-striped  styled-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Information</th>
              {/* <th>Location</th> */}
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default compose(
  connect(mapStateToProps, { fetchLogins })
  // GoogleApiWrapper({
  //   apiKey: "AIzaSyD_lCiDHYXjrCU49pW_iKWr_IsD5v3ZgeQ",
  // })
)(withRouter(LoginDetails));
