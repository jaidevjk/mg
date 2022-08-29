import React, { Component } from "react";
import AllProducts from "./Products";
import AdminHeader from "../../AdminHeader";

export default class EDSprayer extends Component {
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
        <h1 className="text-center">Edit or Delete Sprayer</h1>
        <AllProducts id={7} />
      </div>
    );
  }
}
