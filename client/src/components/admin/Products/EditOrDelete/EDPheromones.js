import React, { Component } from "react";
import AllProducts from "./Products";
import AdminHeader from "../../AdminHeader";

export default class EDPheromones extends Component {
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
        <h1 className="text-center">Edit or Delete Pheromones</h1>
        <AllProducts id={8} />
      </div>
    );
  }
}
