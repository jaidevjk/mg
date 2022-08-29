import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class AdjuvantsForm extends Component {
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
          <h1 className="text-center">Adjuvants Form</h1>
          <ProductsForm id={3} />
        </div>
      </div>
    );
  }
}

export default AdjuvantsForm;
