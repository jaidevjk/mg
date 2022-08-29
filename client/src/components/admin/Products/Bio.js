import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class BioForm extends Component {
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
          <h1 className="text-center">Bio Products Form</h1>
          <ProductsForm id={2} />
        </div>
      </div>
    );
  }
}

export default BioForm;
