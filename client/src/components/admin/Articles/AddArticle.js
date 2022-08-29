import React from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";

import {
  createArticle,
  fetchArticles,
  deleteArticle,
} from "../../../actions/otherActions";
import AdminHeader from "../AdminHeader";
import FileBase64 from "react-file-base64";

class AddArticle extends React.Component {
  state = {
    month: "",
    date: "",
    image: "",
    description: "",
    link: "",
  };

  componentDidMount() {
    trackPromise(this.props.fetchArticles());
  }

  clearValues() {
    this.setState({
      month: "",
      date: "",
      description: "",
    });
  }

  AddDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var d = new Date();
    this.setState({ month: months[d.getMonth()] });
    this.setState({ date: d.getDate() });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.props.articles.length >= 5) {
      alert("You can add only 5 Articles.");
    } else {
      // console.log(this.state);
      trackPromise(this.props.createArticle(this.state));
      this.clearValues();
    }
  }

  handleKeyDown(e) {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  render() {
    // console.log(this.props.articles);
    return (
      <div>
        <AdminHeader />
        <br />
        <br />
        <br />
        <br />
        <div class="op-header">
          <div class="section-header text-center">
            {/* <!-- <h2 class="f2 c3">Contact us</h2> --> */}
            <h1 class="f1 fw-7 cw">Recent posts and updates</h1>
            {/* <h2 class="f2 c3">Select Category</h2> */}
          </div>
        </div>
        <br />
        <div className="container">
          <form action="" onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label>
                Description <span className="label_req">*</span>
              </label>
              <textarea
                type="text"
                name="description"
                className="form-control products_input"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
                autoComplete="off"
                row="3"
                columns="5"
                required
                onKeyDown={this.handleKeyDown}
              ></textarea>
            </div>
            <div className="form-group">
              <label>
                Video Embed Link <span className="label_req">*</span>
              </label>
              <input
                type="text"
                name="link"
                value={this.state.link}
                onChange={(e) => {
                  this.setState({ link: e.target.value });
                }}
              />
            </div>
            <label>
              Image <span className="label_req">*</span>
            </label>
            <div className="form-control">
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => this.setState({ image: base64 })}
                required
                className="form-control"
              />
            </div>
            <br />
            <br />
            <input
              type="submit"
              value="submit"
              className="btn btn-primary sub_btn"
              onClick={() => {
                this.AddDate();
              }}
            />
            <button
              className="btn btn-danger sub_btn"
              onClick={() => {
                this.clearValues();
              }}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps, {
  createArticle,
  fetchArticles,
  deleteArticle,
})(AddArticle);
