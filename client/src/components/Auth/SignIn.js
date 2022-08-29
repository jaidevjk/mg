import React from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { signin, loginAttempts } from "../../actions/auth";
import { Link } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

class SignIn extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    email: "",
    date: "",
  };

  componentDidMount() {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.setState(
    //         {
    //           latitude: position.coords.latitude,
    //           longitude: position.coords.longitude,
    //         },
    //         (newState) => console.log(newState)
    //       );
    //     },
    //     (err) => console.log(err)
    //   );
    // }
  }

  setDate() {
    const date = new Date();
    this.setState({
      date: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()} Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    });
  }

  renderInput({ input, type, label, meta }) {
    return (
      <div className="field padding-bottom--24">
        <label for="email">{label}</label>
        <input
          {...input}
          type={type}
          autoComplete="off"
          className="form-control"
        />
        <div>
          {meta.touched && meta.error ? (
            <div className="alert alert-danger p-1 my-1">{meta.error}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
  onSubmit = (formValues) => {
    // console.log(this.state);
    // if (this.state.latitude === null) {
    //   alert("Please allow location");
    // } else {
    trackPromise(this.props.signin(formValues, this.props.history));
    // }
    // trackPromise(this.props.loginAttempts(this.state));
  };

  renderSignInForm() {
    return (
      <div>
        <div className="login-root">
          <div
            className="box-root flex-flex flex-direction--column"
            style={{ minHeight: "100vh", flexGrow: " 1" }}
          >
            <div className="loginbackground box-background--white padding-top--64">
              <div className="loginbackground-gridContainer">
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: " top / start / 8 / end" }}
                >
                  <div className="box-root newroot"></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "4 / 2 / auto / 5" }}
                >
                  <div
                    className="
                  box-root
                  box-divider--light-all-2
                  animationLeftRight
                  tans3s
                "
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "6 / start / auto / 2" }}
                >
                  <div
                    className="box-root box-background--blue800"
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "7 / start / auto / 4" }}
                >
                  <div
                    className="box-root box-background--blue animationLeftRight"
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "8 / 4 / auto / 6" }}
                >
                  <div
                    className="
                  box-root
                  box-background--gray100
                  animationLeftRight
                  tans3s
                "
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: "2 / 15 / auto / end" }}
                >
                  <div
                    className="
                  box-root
                  box-background--cyan200
                  animationRightLeft
                  tans4s
                "
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 3 / 14 / auto / end" }}
                >
                  <div
                    className="box-root box-background--blue animationRightLeft"
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 4 / 17 / auto / 20" }}
                >
                  <div
                    className="
                  box-root
                  box-background--gray100
                  animationRightLeft
                  tans4s
                "
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
                <div
                  className="box-root flex-flex"
                  style={{ gridArea: " 5 / 14 / auto / 17" }}
                >
                  <div
                    className="
                  box-root
                  box-divider--light-all-2
                  animationRightLeft
                  tans3s
                "
                    style={{ flexGrow: "1" }}
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="box-root padding-top--24 flex-flex flex-direction--column"
              style={{ flexGrow: " 1", zIndex: " 9" }}
            >
              <div
                className="
              box-root
              padding-top--48
              padding-bottom--24
              flex-flex
              flex-justifyContent--center
            "
              >
                <h1>Multiplex Group of Companies</h1>
              </div>
              <div className="formbg-outer">
                <div className="formbg" style={{ boxShadow: "0 0 10px #000" }}>
                  <div className="formbg-inner padding-horizontal--48">
                    <span className="padding-bottom--15">
                      Sign in to your account
                    </span>
                    {this.props.auth.errorMessage.length >= 2 ? (
                      <div className="text-center alert alert-danger">
                        {this.props.auth.errorMessage}
                      </div>
                    ) : (
                      ""
                    )}
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                      <Field
                        type="email"
                        name="email"
                        label="Email"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        component={this.renderInput}
                      />
                      <div style={{ position: "relative" }}>
                        <Field
                          type="password"
                          name="password"
                          label="Password"
                          component={this.renderInput}
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary my-2"
                        onClick={() => {
                          this.setDate();
                        }}
                        value="Submit"
                      />

                      {/* <Link to="/" className="btn btn-danger mx-2">
                        Cancel
                      </Link> */}
                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderSignInForm()}</div>;
  }
}

function validate(formValues) {
  const errors = {};
  if (!formValues.password) {
    errors.password = "Password is required.";
  }
  if (!formValues.email) {
    errors.email = "Email is required.";
  }
  return errors;
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default compose(
  reduxForm({ form: "signinForm", validate }),
  connect(mapStateToProps, { signin, loginAttempts })
)(withRouter(SignIn));
