import React, { Component } from "react";
import AllProducts from "./Products";
import AdminHeader from "../../AdminHeader";

export default class EDPesticide extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="text-center">Edit or Delete Pesticide</h1>
        <AllProducts id={5} />
      </div>
    );
  }
}
