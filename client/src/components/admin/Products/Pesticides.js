import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class PesticidesForm extends Component {
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
          <h1 className="text-center">Pesticides Form</h1>
          <ProductsForm id={5} />
        </div>
      </div>
    );
  }
}

export default PesticidesForm;
