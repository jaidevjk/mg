import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class FertilizerForm extends Component {
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
          <h1 className="text-center">Fertilizer Form</h1>
          <ProductsForm id={1} product="Fertilizers" />
        </div>
      </div>
    );
  }
}

export default FertilizerForm;
