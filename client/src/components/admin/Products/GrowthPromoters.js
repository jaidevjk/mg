import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class GrowthForm extends Component {
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
        <div className="container">
          <h1 className="text-center">Growth Promoters Form</h1>
          <ProductsForm id={4} />
        </div>
      </div>
    );
  }
}

export default GrowthForm;
