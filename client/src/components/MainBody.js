import React from "react";
import { trackPromise } from "react-promise-tracker";

import MainCarousel from "./Body/IndexPage/MainCarousel";
import OurTeam from "./Body/IndexPage/ourTeam";
import NavBar from "./Navbar/Header";
import GroupOfCompanies from "./Body/IndexPage/GroupOfCompanies";
import TimeToChange from "./Body/IndexPage/TimeToChange";
import Products from "./Body/IndexPage/Products";
import Journey from "./Body/IndexPage/Journey";
import Footer from "./Footer/Footer";
import Numbers from "./Body/IndexPage/Numbers";
import NewsAndArticles from "./Body/IndexPage/NewsAndArticles";
import GroupOfCompanies1 from "./Body/IndexPage/GroupOfCompanies1";
import { AddVisitors } from "../actions/otherActions";
import { connect } from "react-redux";
import Certificates from "./Body/IndexPage/Certificates";
import Numbers2 from "./Body/IndexPage/Numbers2";
import StaticNumbers from "./Body/IndexPage/StaticNumbers";
import StaticNews from "./Body/IndexPage/StaticNews";

class MainBody extends React.Component {
  componentDidMount() {
    document.title =
      "Multiplex Group – Manufacturers and exporters of Micro Nutrients";
    if (!localStorage.getItem("multiplexVisitor")) {
      trackPromise(this.props.AddVisitors());
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainCarousel />
        {/* <OurTeam /> */}
        {/* <Numbers /> */}
        <Numbers />
        {/* <Numbers2 /> */}
        {/* <GroupOfCompanies /> */}
        <GroupOfCompanies1 />
        {/* <StaticNumbers /> */}
        <Products />
        <TimeToChange />
        <Certificates />
        <StaticNews />
        {/* <NewsAndArticles /> */}
        <Journey />
        <Footer />
      </div>
    );
  }
}

export default connect(null, { AddVisitors })(MainBody);
