import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Products extends Component {
  componentDidMount() {
    const nodes = [].slice.call(document.querySelectorAll("li"), 0);
    const directions = { 0: "top", 1: "right", 2: "bottom", 3: "left" };
    const classNames = ["in", "out"]
      .map((p) => Object.values(directions).map((d) => `${p}-${d}`))
      .reduce((a, b) => a.concat(b));

    const getDirectionKey = (ev, node) => {
      const { width, height, top, left } = node.getBoundingClientRect();
      const l = ev.pageX - (left + window.pageXOffset);
      const t = ev.pageY - (top + window.pageYOffset);
      const x = l - (width / 2) * (width > height ? height / width : 1);
      const y = t - (height / 2) * (height > width ? width / height : 1);
      return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    };

    class Item {
      constructor(element) {
        this.element = element;
        this.element.addEventListener("mouseover", (ev) =>
          this.update(ev, "in")
        );
        this.element.addEventListener("mouseout", (ev) =>
          this.update(ev, "out")
        );
      }

      update(ev, prefix) {
        this.element.classList.remove(...classNames);
        this.element.classList.add(
          `${prefix}-${directions[getDirectionKey(ev, this.element)]}`
        );
      }
    }

    nodes.forEach((node) => new Item(node));
  }
  render() {
    return (
      <div>
        <div className="intro1 pb-100 productsSpace">
          <div className="container">
            <div className="row">
              <div className="section-header text-center mb-20">
                <h2 className="f2 c1">Products</h2>
                <br />
                <h1 className="f1 fw-7 c4 fontSize1">
                  Multiplex Range Of Products
                </h1>
              </div>
            </div>
          </div>
          <div className="products_style product_container">
            <ul>
              <li>
                <Link className="normal" to="/fertilizer">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/Fertilizers.png"
                    alt=""
                    style={{ verticalAlign: "none !important" }}
                  />
                </Link>
                <div className="info">
                  <h3>Fertilizers</h3>
                  <p>Balanced Major, Minor, Micro & Secondary nutrients....</p>
                </div>
              </li>
              <li>
                <Link className="normal" to="/growthPromoters">
                  <img src="img/MULTIPLEX_IMAGES/Products/Growth.png" alt="" />
                </Link>
                <div className="info">
                  <h3>Growth Promoters</h3>
                  <p>External application of growth promoters...</p>
                </div>
              </li>

              <li>
                <Link className="normal" to="/adjuvants">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/Adjuvants.png"
                    alt=""
                  />
                </Link>
                <div className="info">
                  <h3>Adjuvants</h3>
                  <p>Improves the performance of nutrients, Insecticides...</p>
                </div>
              </li>
              <li>
                <Link className="normal" to="/bioProducts">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/BioProduct.png"
                    alt=""
                  />
                </Link>
                <div className="info">
                  <h3>Bio-products</h3>
                  <p>Bio-fertilisers, Bio-pesticides, Bio-stimulants...</p>
                </div>
              </li>
              <li>
                <Link className="normal" to="/pesticides">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/Pesticides.png"
                    alt=""
                  />
                </Link>
                <div className="info">
                  <h3>Pesticides</h3>
                  <p>
                    Plant protection becomes critical to control unwanted
                    insects...
                  </p>
                </div>
              </li>
              <li className="products_item7">
                <Link className="normal" to="/pheromones">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/phermone.png"
                    alt=""
                  />
                </Link>
                <div className="info">
                  <h3>Pheromones</h3>
                  <p>
                    Pheromones are chemicals released into environment in small
                    amounts...
                  </p>
                </div>
              </li>
              <li>
                <Link className="normal" to="/seeds">
                  <img src="img/MULTIPLEX_IMAGES/Products/Seeds.png" alt="" />
                </Link>
                <div className="info">
                  <h3>Seeds</h3>
                  <p>
                    Quality seeds maintain their genetic purity with
                    viability...
                  </p>
                </div>
              </li>
              <li className="products_item7">
                <Link className="normal" to="/sprayers">
                  <img
                    src="img/MULTIPLEX_IMAGES/Products/Sprayers.png"
                    alt=""
                  />
                </Link>
                <div className="info">
                  <h3>Sprayers</h3>
                  <p>
                    Spraying technology in agriculture brings in uniformity
                    across the field...
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="productImages">
            <div>
              <div className="row productImagesBlock">
                <div className="col-6 ">
                  <Link to="/fertilizer">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Fertilizers.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/growthPromoters">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Growth.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="row productImagesBlock">
                <div className="col-6 ">
                  <Link to="/adjuvants">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Adjuvants.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/bioProducts">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/BioProduct.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="row productImagesBlock">
                <div className="col-6 ">
                  <Link to="/pesticides">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Pesticides.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/pheromones">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/phermone.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="row productImagesBlock">
                <div className="col-6 ">
                  <Link to="/seeds">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Seeds.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-6">
                  <Link to="/sprayers">
                    <img
                      src="https://urbangreen-images.s3.ap-south-1.amazonaws.com/Sprayers.png"
                      // style={{ margin: "3rem" }}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
