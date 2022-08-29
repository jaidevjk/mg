import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import AdminHeader from "./AdminHeader";
import { fetchContacts, deleteContacts } from "../../actions/otherActions";
import { ExportToExcel } from "./ExportToExcel";

class Enquires extends Component {
  state = {
    fileName:
      "MG Contacts Report " +
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
    trackPromise(this.props.fetchContacts());
  }
  renderTable() {
    return this.props.contacts.map((contact, index) => {
      return (
        <tr key={contact._id}>
          <td>{index + 1}</td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.mobile}</td>
          <td>{contact.department}</td>
          <td>{new Date(contact.date).toLocaleString()}</td>
          <td>{contact.state}</td>
          <td>{contact.address}</td>
          <td>{contact.message}</td>
          <td>
            <a href={`mailto:${contact.email}`}>
              <i className="fa fa-envelope"></i>
            </a>
            <span> </span>
            <span>&nbsp;</span>
            <span>&nbsp;</span>
            <a href={`tel:${contact.mobile}`}>
              <i className="fa fa-phone"></i>
            </a>
          </td>
          <td>
            <i
              className="fa fa-trash"
              onClick={() => {
                trackPromise(this.props.deleteContacts(contact._id));
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
    const contacts = [];
    this.props.contacts.map((contact, index) => {
      // contacts.push({
      //   "Sl. No": index + 1,
      //   "Customer Name": contact.name,
      //   "Customer Email": contact.email,
      //   "Customer Mobile Number": contact.mobile,
      //   Department: contact.department,
      //   "Date of enquiry": new Date(contact.date).toLocaleString(),
      //   Message: contact.message,
      //   state: contact.address,
      //   address: contact.address,
      // });

       return contacts.push({
                "Sl. No": index + 1,
                "Customer Name": contact.name,
                "Customer Email": contact.email,
                "Customer Mobile Number": contact.mobile,
                Department: contact.department,
                "Date of enquiry": new Date(contact.date).toLocaleString(),
                Message: contact.message,
                state: contact.address,
                address: contact.address,
              });
    });
    return contacts;
  }

  render() {
    // console.log(this.props.contacts);
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Quick Contacts</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <AdminHeader />

        <div className="table-responsive">
          <ExportToExcel
            apiData={this.renderExcelData()}
            fileName={this.state.fileName}
          />
          <table className="table table-striped  styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
                <th>Department</th>
                <th>Date</th>
                <th>State</th>
                <th>Address</th>
                <th>Message</th>
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
    contacts: state.subscriptions,
  };
};
export default connect(mapStateToProps, { fetchContacts, deleteContacts })(
  Enquires
);
