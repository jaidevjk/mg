import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { categories } from "../Categories";
import PropTypes from "prop-types";

import {
  fetchFertilizers,
  fetchSingleFertilizer,
  updateFertilizer,
  fetchCategory,
  deleteFertilizer,
  fetchSeeds,
  fetchSingleSeed,
  updateSeeds,
  deleteSeeds,
  updateAdjuvants,
  fetchAdjuvants,
  fetchSingleAdjuvants,
  fetchBioProducts,
  fetchSingleBioProduct,
  updateBioProducts,
  deleteAdjuvant,
  deleteBioProducts,
  fetchPesticides,
  fetchSinglePesticide,
  updateBioPesticide,
  deleteBioPesticide,
  updateGrowth,
  deleteGrowth,
  fetchGrowthPromoters,
  fetchSingleGrowth,
  fetchSprayers,
  fetchSingleSprayer,
  updateSprayers,
  deleteSprayers,
  fetchPheromones,
  updatePheromones,
  deletePheromones,
} from "../../../../actions/Products";

import FileBase64 from "react-file-base64";

class AllProducts extends Component {
  state = {
    name: "",
    available: "",
    crop: "",
    dosage: "",
    benefits: "",
    category: "",
    composition: "",
    image: "",
    image1: "",
    image2: "",
    notes: "",
    others: "",
    activeIngredients: "",
    modeOfAction: "",
    precautions: "",
    specialFeatures: "",
    plantType: "",
    duration: "",
    flowering: "",
    fruitShape: "",
    fruitLength: "",
    podLength: "",
    rootLength: "",
    fruitWeight: "",
    crudWeight: "",
    headWeight: "",
    fruitColor: "",
    fruitBearing: "",
    harvesting: "",
    packageOfPractices: "",
    TimeOfErection: "",
    description: "",
    technicalSpecifications: "",
    search: "",
  };
  componentDidMount() {
    // console.log(this.props.id);
    switch (this.props.id) {
      case 1:
        trackPromise(this.props.fetchFertilizers());
        break;
      case 2:
        trackPromise(this.props.fetchBioProducts());
        break;
      case 3:
        trackPromise(this.props.fetchAdjuvants());
        break;
      case 4:
        trackPromise(this.props.fetchGrowthPromoters());
        break;
      case 5:
        trackPromise(this.props.fetchPesticides());
        break;
      case 6:
        trackPromise(this.props.fetchSeeds());
        break;
      case 7:
        trackPromise(this.props.fetchSprayers());
        break;
      case 8:
        trackPromise(this.props.fetchPheromones());
        break;
      default:
        break;
    }
    // trackPromise(this.props.fetchCategory());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.products.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
      console.log(value[0]);
    }
  }

  clearValues() {
    this.setState({
      name: "",
      available: "",
      crop: "",
      dosage: "",
      benefits: "",
      category: "",
      composition: "",
      image: "",
      image1: "",
      image2: "",
      notes: "",
      others: "",
      activeIngredients: "",
      modeOfAction: "",
      precautions: "",
      specialFeatures: "",
      plantType: "",
      duration: "",
      flowering: "",
      fruitShape: "",
      fruitLength: "",
      podLength: "",
      rootLength: "",
      fruitWeight: "",
      crudWeight: "",
      headWeight: "",
      fruitColor: "",
      fruitBearing: "",
      harvesting: "",
      packageOfPractices: "",
      TimeOfErection: "",
      description: "",
      technicalSpecifications: "",
      search: "",
    });
  }

  deleteProduct(id) {
    switch (this.props.id) {
      case 1:
        trackPromise(this.props.deleteFertilizer(id));
        break;
      case 2:
        trackPromise(this.props.deleteBioProducts(id));
        break;
      case 3:
        trackPromise(this.props.deleteAdjuvant(id));
        break;
      case 4:
        trackPromise(this.props.deleteGrowth(id));
        break;
      case 5:
        trackPromise(this.props.deleteBioPesticide(id));
        break;
      case 6:
        trackPromise(this.props.deleteSeeds(id));
        break;
      case 7:
        trackPromise(this.props.deleteSprayers(id));
        break;
      case 8:
        trackPromise(this.props.deletePheromones(id));
        break;

      default:
        break;
    }
  }

  renderTable() {
    return this.props.products
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.name.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
        return false;
      })
      .map((product, index) => {
        return (
          <tr key={product._id}>
            <th>{index + 1}</th>
            <th>{product.name}</th>
            <td>{product.available}</td>
            <td>{product.benefits}</td>
            <td>{product.category}</td>
            <td>{product.crop}</td>
            <td>{product.dosage}</td>
            <td>{product.composition}</td>
            <td>
              <a 
                href="!#"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => {
                  // switch (this.props.id) {
                  //   case 1:
                  //     trackPromise(
                  //       this.props.fetchSingleFertilizer(product._id)
                  //     );
                  //     break;
                  //   case 2:
                  //     trackPromise(
                  //       this.props.fetchSingleBioProduct(product._id)
                  //     );
                  //     break;
                  //   case 3:
                  //     trackPromise(
                  //       this.props.fetchSingleAdjuvants(product._id)
                  //     );
                  //     break;
                  //   case 4:
                  //     trackPromise(this.props.fetchSingleGrowth(product._id));
                  //     break;
                  //   case 5:
                  //     trackPromise(
                  //       this.props.fetchSinglePesticide(product._id)
                  //     );
                  //     break;
                  //   case 6:
                  //     trackPromise(this.props.fetchSingleSeed(product._id));
                  //     break;
                  //   case 7:
                  //     trackPromise(this.props.fetchSingleSprayer(product._id));
                  //     break;
                  //   default:
                  //     break;
                  // }
                  this.setState({ id: product._id });
                }}
                style={{ cursor: "pointer" }}
                className="pen"
              >
                <i className="fa fa-pen"></i>
              </a>
            </td>
            <td>
              <i
                className="fa fa-trash"
                onClick={() => {
                  this.deleteProduct(product._id);
                  this.setState({ id: product._id });
                }}
                style={{ cursor: "pointer" }}
              ></i>
            </td>
          </tr>
        );
      });
  }

  renderDropDown() {
    if (categories.length === 0) {
      return <div className="lds-dual-ring">Loading...</div>;
    } else {
      return categories.map((val) => {
        if (this.props.id === 1) {
          return val.Fertilizers.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 2) {
          return val.Bio.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 3) {
          return val.Adjuvants.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 4) {
          return val.Growth.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 5) {
          return val.Pesticides.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 6) {
          return val.Seeds.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 7) {
          return val.Sprayers.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        } else if (this.props.id === 8) {
          return val.Pheromones.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          });
        }
        return null; //This line is added to prevent warning regarding to array.map() retutn
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    let formData1 = new FormData();
    formData1.append("photo", this.state.image1);
    switch (this.props.id) {
      case 1:
        trackPromise(
          this.props.updateFertilizer(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 2:
        trackPromise(
          this.props.updateBioProducts(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 3:
        trackPromise(
          this.props.updateAdjuvants(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 4:
        trackPromise(
          this.props.updateGrowth(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 5:
        trackPromise(
          this.props.updateBioPesticide(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 6:
        trackPromise(
          this.props.updateSeeds(this.state.id, this.state, formData, formData1)
        );
        break;
      case 7:
        trackPromise(
          this.props.updateSprayers(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;
      case 8:
        trackPromise(
          this.props.updatePheromones(
            this.state.id,
            this.state,
            formData,
            formData1
          )
        );
        break;

      default:
        break;
    }
    // console.log(this.state);
  }

  render() {
    // console.log(this.props.SingleProduct);
    // console.log(this.props.products);
    return (
      <div>
        <div className="container" style={{ margin: "3rem auto 1rem auto" }}>
          <div className="form-group">
            <label htmlFor="search">Search By Product Name:</label>
            <input
              className="form-control"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              placeholder="Search By Product Name."
              id="search"
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped  styled-table">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th scope="col">Name</th>
                <th scope="col">Available</th>
                <th scope="col">Benefits</th>
                <th scope="col">Category</th>
                <th scope="col">Crop</th>
                <th scope="col">Dosage</th>
                <th scope="col">Composition</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>{this.renderTable()}</tbody>
          </table>
        </div>

        {/* modal comes here */}
        <form method="post" onSubmit={this.onSubmit.bind(this)}>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div className="modal-dialog  modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="exampleModalLabel">
                    Edit Details
                  </h3>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => this.clearValues()}
                    style={{ marginTop: "-40px", marginBottom: "10px" }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body modal_body">
                  <div className="row">
                    <div className="col-12" style={{ margin: "auto 1.5rem" }}>
                      <label
                        className="form-label"
                        style={{ marginTop: "2rem", marginBottom: "-1rem" }}
                      >
                        Category <span className="label_req">*</span>
                      </label>
                      <br />
                      <select
                        value={this.state.category}
                        onChange={(e) => {
                          this.setState({ category: e.target.value });
                        }}
                        className="form-select"
                      >
                        <option className="disabled" required>
                          Select Category
                        </option>
                        {this.renderDropDown()}
                      </select>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          Product Name <span className="label_req">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control products_input"
                          value={this.state.name}
                          onChange={(e) => {
                            this.setState({ name: e.target.value });
                          }}
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12  col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          Packages Available
                          <span className="label_req" style={{ opacity: 0 }}>
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          name="available"
                          className="form-control products_input"
                          value={this.state.available}
                          onChange={(e) => {
                            this.setState({ available: e.target.value });
                          }}
                          autoComplete="off"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Crop</label>
                        <textarea
                          type="text"
                          name="crop"
                          className="form-control products_input"
                          value={this.state.crop}
                          onChange={(e) => {
                            this.setState({ crop: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="form-label">
                          DOSAGE & Methods Of Application:
                        </label>
                        <textarea
                          type="text"
                          name="dosage"
                          className="form-control products_input"
                          value={this.state.dosage}
                          onChange={(e) => {
                            this.setState({ dosage: e.target.value });
                          }}
                          autoComplete="off"
                          onKeyDown={this.handleKeyDown}
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Composition</label>
                      <textarea
                        type="text"
                        name="composition"
                        className="form-control products_input"
                        value={this.state.composition}
                        onChange={(e) => {
                          this.setState({ composition: e.target.value });
                        }}
                        autoComplete="off"
                        onKeyDown={this.handleKeyDown}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Benefits</label>
                      <textarea
                        type="text"
                        name="benefits"
                        className="form-control products_input"
                        value={this.state.benefits}
                        onChange={(e) => {
                          this.setState({ benefits: e.target.value });
                        }}
                        onKeyDown={this.handleKeyDown}
                        autoComplete="off"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Images</label>
                      <div className="" style={{ padding: "0rem 0 5rem 0" }}>
                        <div className="row">
                          <div className="col-md-4 col-4">
                            {/* <img src={this.state.image} width="150px" /> */}
                            <label>Front Image *</label>
                            <input
                              name="image"
                              type="file"
                              // value={this.state.image}
                              accept="image/*"
                              onChange={(e) => {
                                this.setState({
                                  image: e.currentTarget.files[0],
                                });
                              }}
                            />
                          </div>
                          <div className="col-md-4 col-4">
                            <label>Back Image</label>
                            <input
                              name="image"
                              type="file"
                              // value={this.state.image}
                              accept="image/*"
                              onChange={(e) => {
                                this.setState({
                                  image1: e.currentTarget.files[0],
                                });
                              }}
                            />
                          </div>
                          {/*  <div className="col-md-4 col-4">
                            <img src={this.state.image2} width="150px" />
                            <label>Side Image</label>
                            <FileBase64
                              type="file"
                              multiple={false}
                              onDone={({ base64 }) =>
                                this.setState({ image2: base64 })
                              }
                              required
                              className="form-control"
                            />
                            <input
                              type="text"
                              name="image"
                              className="form-control products_input"
                              value={this.state.image2}
                              onChange={(e) => {
                                this.setState({ image2: e.target.value });
                              }}
                            />
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Note</label>
                        <textarea
                          type="text"
                          name="notes"
                          className="form-control products_input"
                          value={this.state.notes}
                          onChange={(e) => {
                            this.setState({ notes: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12  col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Others</label>
                        <textarea
                          type="text"
                          name="notes"
                          className="form-control products_input"
                          value={this.state.others}
                          onChange={(e) => {
                            this.setState({ others: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Active Ingredients</label>
                        <textarea
                          type="text"
                          name="notes"
                          className="form-control products_input"
                          value={this.state.activeIngredients}
                          onChange={(e) => {
                            this.setState({
                              activeIngredients: e.target.value,
                            });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Mode Of Action</label>
                        <textarea
                          type="text"
                          name="notes"
                          className="form-control products_input"
                          value={this.state.modeOfAction}
                          onChange={(e) => {
                            this.setState({ modeOfAction: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Precautions</label>
                        <textarea
                          type="text"
                          name="notes"
                          className="form-control products_input"
                          value={this.state.precautions}
                          onChange={(e) => {
                            this.setState({ precautions: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Special Features</label>
                        <textarea
                          type="text"
                          name="specialFeatures"
                          className="form-control products_input"
                          value={this.state.specialFeatures}
                          onChange={(e) => {
                            this.setState({ specialFeatures: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Plant Type</label>
                        <textarea
                          type="text"
                          name="plantType"
                          className="form-control products_input"
                          value={this.state.plantType}
                          onChange={(e) => {
                            this.setState({ plantType: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Duration</label>
                        <textarea
                          type="text"
                          name="duration"
                          className="form-control products_input"
                          value={this.state.duration}
                          onChange={(e) => {
                            this.setState({ duration: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Flowering</label>
                        <textarea
                          type="text"
                          name="flowering"
                          className="form-control products_input"
                          value={this.state.flowering}
                          onChange={(e) => {
                            this.setState({ flowering: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Fruit Shape</label>
                        <textarea
                          type="text"
                          name="fruitShape"
                          className="form-control products_input"
                          value={this.state.fruitShape}
                          onChange={(e) => {
                            this.setState({ fruitShape: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Fruit Length</label>
                        <textarea
                          type="text"
                          name="fruitLength"
                          className="form-control products_input"
                          value={this.state.fruitLength}
                          onChange={(e) => {
                            this.setState({ fruitLength: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Pod Length</label>
                        <textarea
                          type="text"
                          name="podLength"
                          className="form-control products_input"
                          value={this.state.podLength}
                          onChange={(e) => {
                            this.setState({ podLength: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Root Length</label>
                        <textarea
                          type="text"
                          name="rootLength"
                          className="form-control products_input"
                          value={this.state.rootLength}
                          onChange={(e) => {
                            this.setState({ rootLength: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Fruit Weight</label>
                        <textarea
                          type="text"
                          name="fruitWeight"
                          className="form-control products_input"
                          value={this.state.fruitWeight}
                          onChange={(e) => {
                            this.setState({ fruitWeight: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Crud Weight</label>
                        <textarea
                          type="text"
                          name="crudWeight"
                          className="form-control products_input"
                          value={this.state.crudWeight}
                          onChange={(e) => {
                            this.setState({ crudWeight: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Head Weight</label>
                        <textarea
                          type="text"
                          name="headWeight"
                          className="form-control products_input"
                          value={this.state.headWeight}
                          onChange={(e) => {
                            this.setState({ headWeight: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Fruit Color</label>
                        <textarea
                          type="text"
                          name="fruitColor"
                          className="form-control products_input"
                          value={this.state.fruitColor}
                          onChange={(e) => {
                            this.setState({ fruitColor: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Fruit Bearing</label>
                        <textarea
                          type="text"
                          name="fruitBearing"
                          className="form-control products_input"
                          value={this.state.fruitBearing}
                          onChange={(e) => {
                            this.setState({ fruitBearing: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Harvesting</label>
                        <textarea
                          type="text"
                          name="harvesting"
                          className="form-control products_input"
                          value={this.state.harvesting}
                          onChange={(e) => {
                            this.setState({ harvesting: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">
                          Package Of Practices
                        </label>
                        <textarea
                          type="text"
                          name="packageOfPractices"
                          className="form-control products_input"
                          value={this.state.packageOfPractices}
                          onChange={(e) => {
                            this.setState({
                              packageOfPractices: e.target.value,
                            });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Time Of Erection</label>
                        <textarea
                          type="text"
                          name="TimeOfErection"
                          className="form-control products_input"
                          value={this.state.TimeOfErection}
                          onChange={(e) => {
                            this.setState({ TimeOfErection: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div
                      className="col-12 col-md-6"
                      style={{ margin: "2rem auto" }}
                    >
                      <div className="form-group">
                        <label className="form-label">Description</label>
                        <textarea
                          type="text"
                          name="description"
                          className="form-control products_input"
                          value={this.state.description}
                          onChange={(e) => {
                            this.setState({ description: e.target.value });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12" style={{ margin: "2rem auto" }}>
                      <div className="form-group">
                        <label className="form-label">
                          Technical Specifications
                        </label>
                        <textarea
                          type="text"
                          name="technicalSpecifications"
                          className="form-control products_input"
                          value={this.state.technicalSpecifications}
                          onChange={(e) => {
                            this.setState({
                              technicalSpecifications: e.target.value,
                            });
                          }}
                          onKeyDown={this.handleKeyDown}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>

                    <br />

                    <br />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn red_btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => this.clearValues()}
                    style={{
                      padding: "1rem 1.5rem",
                      color: "#fff",
                      margin: "0 1rem",
                      borderRadius: "10px",
                    }}
                  >
                    Close
                  </button>
                  <input
                    type="submit"
                    value="Save Changes"
                    style={{
                      background: "#56b467",
                      padding: "1rem 1.5rem",
                      color: "#fff",
                      margin: "0 1rem",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* modal ends */}
      </div>
    );
  }
}

AllProducts.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    category: state.category,
    SingleProduct: state.SingleProduct,
  };
};

export default connect(mapStateToProps, {
  fetchFertilizers,
  fetchSingleFertilizer,
  updateFertilizer,
  fetchCategory,
  deleteFertilizer,
  fetchSeeds,
  fetchSingleSeed,
  updateSeeds,
  deleteSeeds,
  updateAdjuvants,
  fetchAdjuvants,
  fetchSingleAdjuvants,
  fetchBioProducts,
  fetchSingleBioProduct,
  updateBioProducts,
  deleteAdjuvant,
  deleteBioProducts,
  fetchPesticides,
  fetchSinglePesticide,
  updateBioPesticide,
  deleteBioPesticide,
  updateGrowth,
  deleteGrowth,
  fetchGrowthPromoters,
  fetchSingleGrowth,
  fetchSprayers,
  fetchSingleSprayer,
  updateSprayers,
  deleteSprayers,
  fetchPheromones,
  updatePheromones,
  deletePheromones,
})(AllProducts);
