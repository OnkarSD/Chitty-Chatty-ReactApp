import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="center">
      <div className="login-container">
        <h1>hii ! welcome to Chatty</h1>
        <h2>Ready to Talk ?</h2>
        <h3>Use the link below and Join us .</h3>
        <Link to="/signup">Create new account</Link>
        <Link to="/login">Login to Account</Link>
      </div>
    </div>
  );
}

export default Home;
