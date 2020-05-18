import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  githubSignIn = async () => {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit} className="login-container">
          <h1>
            Sign up For <span style={{ color: "blue" }}>Chatty</span>
          </h1>
          <p>Fill in the info below and create account</p>
          <div>
            <input
              type="text"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit" className="info-btn">
              SignUp
            </button>
            <p>Or</p>
            <button
              onClick={this.googleSignIn}
              type="button"
              className="gsign-btn"
            >
              SIgn Up with Google
            </button>
            <button
              onClick={this.githubSignIn}
              type="button"
              className="gitsign-btn"
            >
              SIgn Up with GitHub
            </button>
          </div>
          <hr />
          <hr />
          <p>
            Ohh! Already have an account ? Nice <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
