import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import { logout } from "../helpers/auth";
export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: auth().currentUser,
      chats: [],
      content: "",
      readError: null,
      writeError: null,
    };
  }

  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readErrror: error.message });
    }
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      writeError: null,
    });
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.uid,
      });
      this.setState({ content: "" });
    } catch (error) {
      this.setState({
        writeError: error.message,
      });
    }
  };

  render() {
    return (
      <div className="center">
        <div className="chats">
          <div>
            {this.state.chats.map((chat) => {
              return (
                <p
                  key={chat.timestamp}
                  className={
                    this.state.user.uid === chat.uid ? "usermsg" : "chatmsg"
                  }
                >
                  {chat.content}
                </p>
              );
            })}
          </div>
          {/* message form */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.content}
              onChange={this.handleChange}
              required
            />
            {this.state.error ? <p>{this.state.writeError}</p> : null}
            <button type="submit" className="info-btn">
              Send
            </button>
          </form>
          <div>
            Logged in as : <strong>{this.state.user.email}</strong>
            <div>
              <button type="submit" className="logout-btn" onClick={logout}>
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
