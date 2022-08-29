import React, { Component } from "react";
import AllProducts from "./Products";
import AdminHeader from "../../AdminHeader";

export default class EDBio extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center">Edit or Delete Bio Product</h1>
        <AllProducts id={2} />
      </div>
    );
  }
}
