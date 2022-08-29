import React from "react";
import AdminHeader from "./AdminHeader";
// import ProductsChart from "./HomePage/ProductsChart";
import AdminHomePage from "./AdminHome";

class AdminHome extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <AdminHeader />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <AdminHomePage />
        </div>
      </div>
    );
  }
}

export default AdminHome;
