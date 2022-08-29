import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class SprayersForm extends Component {
  render() {
    return (
      <div className="container">
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h1 className="text-center">Sprayers Form</h1>
          <ProductsForm id={7} />
        </div>
      </div>
    );
  }
}

export default SprayersForm;
