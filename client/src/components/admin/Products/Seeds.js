import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class SeedsForm extends Component {
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
          <h1 className="text-center">Seeds Form</h1>
          <ProductsForm id={6} />
        </div>
      </div>
    );
  }
}

export default SeedsForm;
