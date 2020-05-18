import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin } from "../helpers/auth";
export class Login extends Component {
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
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit} className="login-container">
          <h1>
            Login to
            <span style={{ color: "blue" }}> Chatty</span>
          </h1>
          <p>Fill in the form below to login to your account.</p>
          <div>
            <input
              type="email"
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
          <div className="btns">
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
