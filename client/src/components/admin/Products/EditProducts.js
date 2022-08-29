import React from "react";
import { Link } from "react-router-dom";

import AdminHeader from "../AdminHeader";

class EditProducts extends React.Component {
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
            <h1 class="f1 fw-7 cw">Edit or Delete Products</h1>
            <h2 class="f2 c3">Select Category</h2>
          </div>
        </div>

        {/* Edit or delete of products */}
        <div className="container edProducts">
          <div className="row products_row">
            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/EDFertilizers" class="my-super-cool-btn">
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
                <Link to="/EDGrowth" class="my-super-cool-btn">
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
                <Link to="/EDAdjuvants" class="my-super-cool-btn">
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
                <Link to="/EDSeeds" class="my-super-cool-btn">
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

            <div className="col-12 col-md-3">
              <div id="wrapper">
                <Link to="/EDSprayer" class="my-super-cool-btn">
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
                <Link to="/EDBio" class="my-super-cool-btn">
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
                <Link to="/EDPesticide" class="my-super-cool-btn">
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
                <Link to="/EDPheromones" class="my-super-cool-btn">
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

export default EditProducts;
