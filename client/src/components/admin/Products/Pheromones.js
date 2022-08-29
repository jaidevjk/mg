import React, { Component } from "react";
import ProductsForm from "./ProductsForm";
import AdminHeader from "../AdminHeader";

class PheromonesForm extends Component {
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
          <h1 className="text-center">Pheromones Form</h1>
          <ProductsForm id={8} />
        </div>
      </div>
    );
  }
}

export default PheromonesForm;
