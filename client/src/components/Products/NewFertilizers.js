import React, { Component } from "react";
import $ from "jquery";
import Header2 from "../Navbar/Header2";
import Footer from "../Footer/Footer";

import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { createEnquiry } from "../../actions/otherActions";
import {
  fetchFertilizers,
  fetchSingleFertilizer,
  fetchSingleAdjuvants,
} from "../../actions/Products";

class NewFertilizers extends Component {
  componentDidMount() {
    $(".list").on("click", function () {
      const value = $(this).attr("data-filter");
      if (value === "all") {
        $(".itemBox").show("1000");
      } else {
        $(".itemBox")
          .not("." + value)
          .hide("1000");
        $(".itemBox")
          .filter("." + value)
          .show("1000");
      }
    });

    trackPromise(this.props.fetchFertilizers());
  }

  // renderProducts() {
  //   return this.props.products.map((product) => {
  //     return (
  //       <div
  //         className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}
  //         key={product._id}
  //         // onClick={() => {
  //         //   trackPromise(this.props.fetchSingleFertilizer(product._id));
  //         // }}
  //       >
  //         <div className={`itemBox ${product.category}`}>
  //           <img src={product.image} />
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <section>
          <ul className="post-filter masonary text-center list-inline text-capitalize">
            <li className="list" data-filter="all">
              All
            </li>
            <li className="list" data-filter="Major">
              Major Nutrients
            </li>
            <li className="list" data-filter="Secondary">
              Secondary Nutrients
            </li>
            <li className="list" data-filter="Micro">
              Micro Nutrients
            </li>
            <li className="list" data-filter="Muti">
              Muti Nutrient Fertilizers
            </li>
            <li className="list" data-filter="Mineral">
              Mineral mixture
            </li>
          </ul>
          <div className="product">
            <div className="itemBox Muti">
              <div className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}>
                <img src="img/MULTIPLEX_IMAGES/Export/2.png" alt=""/>
              </div>
            </div>
            <div className="itemBox Secondary">
              <div className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}>
                <img src="img/MULTIPLEX_IMAGES/Export/1.png" alt=""/>
              </div>
            </div>
            <div className="itemBox Major">
              <div className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}>
                <img src="img/MULTIPLEX_IMAGES/Export/3.png" alt=""/>
              </div>
            </div>
            <div className="itemBox Secondary">
              <div className={`col-lg-4 col-sm-6 col-xs-12 mt-30`}>
                <img src="img/MULTIPLEX_IMAGES/Export/4.png" alt=""/>
              </div>
            </div>
            {/* {this.renderProducts()} */}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    SingleProduct: state.SingleProduct,
  };
};

export default connect(mapStateToProps, {
  fetchFertilizers,
  fetchSingleFertilizer,
  fetchSingleAdjuvants,
  createEnquiry,
})(NewFertilizers);
