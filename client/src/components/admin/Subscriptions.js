import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import AdminHeader from "./AdminHeader";
import { fetchSubscribers, deleteSubscriber } from "../../actions/otherActions";
import { ExportToExcel } from "./ExportToExcel";

class Subscriptions extends Component {
  state = {
    fileName:
      "MG Subscribers Report " +
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
    trackPromise(this.props.fetchSubscribers());
  }

  renderTable() {
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return this.props.subscriptions.map((subscriber, index) => {
      return (
        <tr key={subscriber._id}>
          <td>{index + 1}</td>
          <td>{subscriber.email}</td>
          <td>{new Date(subscriber.date).toLocaleString()}</td>
          <td>
            <a href={`mailto:${subscriber.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
          </td>
          <td>
            <i
              className="fa fa-trash"
              onClick={() => {
                trackPromise(this.props.deleteSubscriber(subscriber._id));
              }}
              style={{ cursor: "pointer" }}
            ></i>
          </td>
        </tr>
      );
    });
  }

  renderExcelData() {
    // Excel Info
    const subscribers = [];
    this.props.subscriptions.map((subscriber, index) => {
      // subscribers.push({
      //   "Sl. No": index + 1,
      //   "Subscriber Email Id": subscriber.email,
      //   "Joining Date": new Date(subscriber.date).toLocaleString(),
      // });

      return  subscribers.push({
              "Sl. No": index + 1,
              "Subscriber Email Id": subscriber.email,
              "Joining Date": new Date(subscriber.date).toLocaleString(),
            });

    });
    return subscribers;
  }

  render() {
    console.log(this.props.subscriptions);
    return (
      <div>
        <div class="op-header">
          <br />
          <br />
          <br />
          <br />
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Subscriptions</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <AdminHeader />
        <div className="table-responsive">
          <ExportToExcel
            apiData={this.renderExcelData()}
            fileName={this.state.fileName}
          />
          <table className="table table-striped styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Email</th>
                <th>Date</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    subscriptions: state.subscriptions,
  };
};
export default connect(mapStateToProps, { fetchSubscribers, deleteSubscriber })(
  Subscriptions
);
