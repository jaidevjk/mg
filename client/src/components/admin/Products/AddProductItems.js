import React, { Component } from "react";
import AdminHeader from "../AdminHeader";
import { Link } from "react-router-dom";

export default class AddProductItems extends Component {
  render() {
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Add Products</h1>
            <h2 class="f2 c3">Select Category</h2>
          </div>
        </div>
        <div className="container">
          <br />
          <br />
          <div className="row products_row">
            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/fertilizerForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Fertilizers</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/growthForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span className="text-center">
                    Growth <br /> Promoters
                  </span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/adjuvantsForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Adjuvants</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/seedsForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Seeds</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3 ">
              <div id="wrapper">
                <Link to="/sprayersForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Sprayers</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/bioForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Bio</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/pesticidesForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Pesticides</span>
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/pheromonesForm" class="my-super-cool-btn">
                  <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                  <span>Pheromones</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
