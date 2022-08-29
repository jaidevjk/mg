import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import PropTypes from "prop-types";

import {
  createGallery,
  fetchGallery,
  deleteGallery,
  updateGallery,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class CreateGallery extends React.Component {
  state = {
    image: "",
    category: "",
    thumbnail: "",
    id: "",
    search: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchGallery());
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.id !== prevState.id) {
      const value = this.props.gallery.filter(
        (val) => val._id === this.state.id
      );
      this.setState(value[0]);
    }
  }

  clearValues() {
    this.setState({ image: "", category: "", thumbnail: "", id: "" });
  }

  onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.createGallery(this.state, formData));
    this.setState({ thumbnail: "" });
  }

  onEdit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("photo", this.state.image);
    trackPromise(this.props.updateGallery(this.state.id, this.state, formData));
  }

  renderTable() {
    return this.props.gallery
      .filter((val) => {
        if (this.state.search === "") {
          return val;
        } else if (
          val.category.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return val;
        }
        return false;
      })
      .map((gallery, index) => {
        return (
          <tr key={gallery._id}>
            <td>{index + 1}</td>
            <td>
              <img src={gallery.image} width="100px" alt=""/>
            </td>
            <td>{gallery.thumbnail}</td>
            <td>{gallery.category}</td>
            <td>
              {/* <a
                href=""
                data-toggle="modal"
                data-target="#galleryImg"
                onClick={() => {
                  this.setState({ id: gallery._id });
                }}
              >
                <i className="fa fa-pen"></i>
              </a> */}
              <a
                href="!#"
                data-toggle="modal"
                data-target="#galleryImg"
                onClick={() => {
                  this.setState({ id: gallery._id });
                }}
              >
                <i className="fa fa-pen"></i>
              </a>
            </td>
            <td>
              {/* <a
                onClick={() =>
                  trackPromise(this.props.deleteGallery(gallery._id))
                }
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa-trash fa-2x"></i>
              </a> */}
              <a
                href="!#"
                onClick={() =>
                  trackPromise(this.props.deleteGallery(gallery._id))
                }
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa-trash fa-2x"></i>
              </a>
            </td>
          </tr>
        );
      });
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    // console.log(this.props.gallery);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            <h1 class="f2 c3" style={{ color: "#fff !important" }}>
              Add Images to Gallery
            </h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <br />
        <div className="container">
          <form action="" onSubmit={this.onSubmit.bind(this)}>
            <label>
              Image <span className="label_req">*</span>
            </label>
            <div className="">
              {/* <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ image: base64 })}
                required
                className="form-control"
              /> */}
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  this.setState({ image: e.currentTarget.files[0] });
                }}
              />
              {/* <input
                type="text"
                name="image"
                className="form-control products_input"
                value={this.state.image}
                onChange={(e) => {
                  this.setState({ image: e.target.value });
                }}
              /> */}
              {/* <img src={this.state.image} width="100px" /> */}
            </div>
            <div className="form-group mt-50">
              <label className="form-label">Brief Info</label>
              <textarea
                type="text"
                name="crop"
                className="form-control products_input"
                value={this.state.thumbnail}
                onChange={(e) => {
                  this.setState({ thumbnail: e.target.value });
                }}
                onKeyDown={this.handleKeyDown}
                autoComplete="off"
              ></textarea>
            </div>
            <br />
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  HTMLfor="inputGroupSelect01"
                >
                  Upload To
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={this.state.category}
                onChange={(e) => {
                  this.setState({ category: e.target.value });
                }}
              >
                <option className="disabled" selected>
                  Select Category
                </option>
                <option value="Our Gallery">Our Gallery</option>
                <option value="Awards and Recognitions">
                  Awards and Recognitions
                </option>
                <option value="Career's Page">Career's Page</option>
              </select>
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary sub_btn"
            />
          </form>
          <br />
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Images Preview</h2>
            <div className="input-group mb-3" style={{ display: "flex" }}>
              <div className="input-group-prepend">
                <label
                  className="input-group-text"
                  HTMLfor="inputGroupSelect01"
                >
                  Search By Category
                </label>
              </div>
              <select
                className="custom-select"
                id="inputGroupSelect01"
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                style={{ margin: "auto 2rem" }}
              >
                <option value="">All</option>
                <option value="Our Gallery">Our Gallery</option>
                <option value="Awards and Recognitions">
                  Awards and Recognitions
                </option>
                <option value="Career's Page">Career's Page</option>
              </select>
            </div>
          </div>
          <br />
          <div className="table-responsive">
            <table className="table table-striped styled-table">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Show In</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{this.renderTable()}</tbody>
            </table>
          </div>
        </div>

        {/* modal comes here */}
        <form method="post" onSubmit={this.onEdit.bind(this)}>
          <div
            className="modal fade"
            id="galleryImg"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div className="modal-dialog" role="document">
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
                <div className="modal-body">
                  <div className="">
                    {/* <FileBase64
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) => this.setState({ image: base64 })}
                      required
                      className="form-control"
                    /> */}
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      // value={this.state.image}
                      onChange={(e) => {
                        this.setState({ image: e.currentTarget.files[0] });
                        // console.log(e.currentTarget.files[0]);
                      }}
                    />
                    {/* <img src={this.state.image} width="100px" /> */}
                  </div>
                  <div className="form-group mt-50">
                    <label className="form-label">Brief Info</label>
                    <textarea
                      type="text"
                      name="crop"
                      className="form-control products_input"
                      value={this.state.thumbnail}
                      onChange={(e) => {
                        this.setState({ thumbnail: e.target.value });
                      }}
                      onKeyDown={this.handleKeyDown}
                      autoComplete="off"
                    ></textarea>
                  </div>
                  <br />
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label
                        className="input-group-text"
                        HTMLfor="inputGroupSelect01"
                      >
                        Upload To
                      </label>
                    </div>
                    <select
                      className="custom-select"
                      id="inputGroupSelect01"
                      value={this.state.category}
                      onChange={(e) => {
                        this.setState({ category: e.target.value });
                      }}
                    >
                      <option className="disabled" selected>
                        Select Category
                      </option>
                      <option value="Our Gallery">Our Gallery</option>
                      <option value="Awards and Recognitions">
                        Awards and Recognitions
                      </option>
                      <option value="Career's Page">Career's Page</option>
                    </select>
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

CreateGallery.propTypes = {
  aws_s3_image_url: PropTypes.string,
  msg: PropTypes.string,
  type: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    gallery: state.welcome,
  };
};

export default connect(mapStateToProps, {
  createGallery,
  fetchGallery,
  deleteGallery,
  updateGallery,
})(CreateGallery);
