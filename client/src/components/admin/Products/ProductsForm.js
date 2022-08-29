import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import { categories } from "./Categories";
import PropTypes from "prop-types";

import {
  createFetlizer,
  fetchCategory,
  createBioProducts,
  createSeedsProducts,
  createSprayersProducts,
  createAdjuvantsProducts,
  createPesticidesProducts,
  createGrowthProducts,
  createPheromones,
} from "../../../actions/Products";
import FileBase64 from "react-file-base64";

class AddProducts extends React.Component {
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
  };

  componentDidMount() {
    // trackPromise(this.props.fetchCategory());
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
      image1: "",
      image2: "",
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    // console.log(this.state.image);
    // this.props.uploadImage(formData);
    switch (this.props.id) {
      case 1:
        trackPromise(this.props.createFetlizer(this.state, formData));
        break;
      case 2:
        trackPromise(this.props.createBioProducts(this.state, formData));
        break;
      case 3:
        trackPromise(this.props.createAdjuvantsProducts(this.state, formData));
        break;
      case 4:
        trackPromise(this.props.createGrowthProducts(this.state, formData));
        break;
      case 5:
        trackPromise(this.props.createPesticidesProducts(this.state, formData));
        break;
      case 6:
        trackPromise(this.props.createSeedsProducts(this.state, formData));
        break;
      case 7:
        trackPromise(this.props.createSprayersProducts(this.state, formData));
        break;
      case 8:
        trackPromise(this.props.createPheromones(this.state, formData));
        break;
      default:
        break;
    }
    this.clearValues();
  }

  renderDropDown() {
    if (categories.length === 0) {
      return;
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
        return null; //This line is added to prevent array.map() return warnings
      });
    }
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    // console.log(categories);
    return (
      <div>
        <form action="" onSubmit={this.onSubmit.bind(this)}>
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
              <div
                className="form-control"
                style={{ padding: "0rem 0 5rem 0" }}
              >
                <div className="row">
                  <div className="col-md-4 col-4">
                    <label>Front Image *</label>
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        this.setState({ image: e.currentTarget.files[0] });
                      }}
                    />
                  </div>
                  {/* <div className="col-md-4 col-4">
                    <label>Back Image</label>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image1: base64 })}
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-4">
                    <label>Side Image</label>
                    <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image2: base64 })}
                      required
                      className="form-control"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
              <div className="form-group">
                <label className="form-label">Notes</label>
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

            <div className="col-12  col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
              <div className="form-group">
                <label className="form-label">Active Ingredients</label>
                <textarea
                  type="text"
                  name="notes"
                  className="form-control products_input"
                  value={this.state.activeIngredients}
                  onChange={(e) => {
                    this.setState({ activeIngredients: e.target.value });
                  }}
                  onKeyDown={this.handleKeyDown}
                  autoComplete="off"
                ></textarea>
              </div>
            </div>

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
              <div className="form-group">
                <label className="form-label">Plant Height</label>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
              <div className="form-group">
                <label className="form-label">Package Of Practices</label>
                <textarea
                  type="text"
                  name="packageOfPractices"
                  className="form-control products_input"
                  value={this.state.packageOfPractices}
                  onChange={(e) => {
                    this.setState({ packageOfPractices: e.target.value });
                  }}
                  onKeyDown={this.handleKeyDown}
                  autoComplete="off"
                ></textarea>
              </div>
            </div>

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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

            <div className="col-12 col-md-6" style={{ margin: "2rem auto" }}>
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
                <label className="form-label">Technical Specifications</label>
                <textarea
                  type="text"
                  name="technicalSpecifications"
                  className="form-control products_input"
                  value={this.state.technicalSpecifications}
                  onChange={(e) => {
                    this.setState({ technicalSpecifications: e.target.value });
                  }}
                  onKeyDown={this.handleKeyDown}
                  autoComplete="off"
                ></textarea>
              </div>
            </div>

            <br />

            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary sub_btn"
            />
            <button
              className="btn btn-danger sub_btn"
              onClick={() => {
                this.clearValues();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

AddProducts.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

export default connect(mapStateToProps, {
  createFetlizer,
  fetchCategory,
  createBioProducts,
  createSeedsProducts,
  createSprayersProducts,
  createAdjuvantsProducts,
  createPesticidesProducts,
  createGrowthProducts,
  createPheromones,
})(AddProducts);
