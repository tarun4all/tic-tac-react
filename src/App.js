import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Match from './components/match';
import User from './components/user';
import { message } from 'antd';
import 'antd/dist/antd.css';

const endpoint = "http://127.0.0.1:3011";
const socket = socketIOClient(endpoint);

class App extends Component {
  constructor() {
    super();
    this.state = {
      match: false,
      wait: false,
      response: false,
      username: '',
      turn: '',
      val: '',
      play: '',
    };
  }

  componentDidMount() {
    socket.on("turn", (data) => {
      console.log(data);
      // eslint-disable-next-line
      if (data.code == "2") {
        this.setState({
          match: true
        });
        this.userData(data.user);
        message.success(data.msg);
      } else if (data.code == "101") {
        this.setState({
          wait: true
        });
        message.warning(data.msg);
      } else if (data.code == "102") {
        message.error(data.msg);
      }
    });

    socket.on("game", (data) => {
      if (data.code == "2") {
        message.success(data.msg);
      } else {
        this.setState({
          play: data.user.match
        });
      }
    });
  }

  userData = (user) => {
    if(user.f.sid == socket.id) {
      this.setState({
        turn: user.f.turn,
        val: user.f.val,
        play: user.match
      });
    } else if (user.l.sid == socket.id) {
      this.setState({
        turn: user.l.turn,
        val: user.l.val,
        play: user.match
      });
    } 
  }

  connect = (username) => {
    this.setState({
        username: username
    });
    let data = {
      username: username,
      sid: socket.id
    };
    socket.emit("room", data);
  }

  square = (turn) => {
    let data = {
      turn: turn,
      type: this.state.val == '0'? 'O' : 'X',
      player: this.state.username
    };
    socket.emit("match", data);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.match ? <Match press = {this.square}  play = {this.state.play}/> : <User disable = {this.state.wait} connect = {this.connect} />}
      </div>
    );
  }
}

export default App;
