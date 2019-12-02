import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { compose } from "redux";
import { loginAction } from "../../actions/userActions";
import "./Login.css";

const firebase = require("firebase");

class Login extends Component {
  state = {
    motDePasse: "",
    email: "",
    errors: {}
  };

  componentWillMount() {
    localStorage.clear();
  }

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // onSubmit = async () => {
  //   this.props
  //     .loginAction({
  //       email: this.state.email,
  //       motDePasse: this.state.motDePasse
  //     })
  //     .then(() => {
  //       this.props.history.push("/admin");
  //     });
  // await firebase
  //   .auth()
  //   .signInWithEmailAndPassword(this.state.email, this.state.motDePasse)
  //   .then(
  //     () => {
  //       this.props.history.push("/admin");
  //     },
  //     err => {
  //       this.setState({ serverError: true });
  //       console.log("Error logging in: ", err);
  //     }
  //   );
  //};

  onSubmit = e => {
    e.preventDefault();

    const client = {
      email: this.state.email,
      motDePasse: this.state.motDePasse
    };

    axios
      .post("http://localhost:8080/clients/login", client)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("Authorization", res.data.token);
        if (
          res.data.user.role === "agent" ||
          res.data.user.role === "chefAgence"
        ) {
          this.props.history.push("/admin");
        } else {
          return false;
        }
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Subscribe</p>
              <div className="grey-text">
                <MDBInput
                  label="Your E-mail"
                  name="email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  // value={this.state.email}
                  onChange={this.handlechange}
                />
                <MDBInput
                  label="Your password"
                  name="motDePasse"
                  icon="user"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.motDePasse}
                  onChange={this.handlechange}
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="info" onClick={this.onSubmit}>
                  Send <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default compose(connect(null, { loginAction }), withRouter)(Login);
