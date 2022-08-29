import React, { Component } from "react";
import { trackPromise } from "react-promise-tracker";
import { connect } from "react-redux";

import Header2 from "../../Navbar/Header2";
import { fetchCareers } from "../../../actions/otherActions";
import Footer from "../../Footer/Footer";

class CareersForm extends Component {
  render() {
    return (
      <div>
        <Header2 />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    careers: state.careers,
  };
};

export default connect(mapStateToProps, { fetchCareers })(CareersForm);
