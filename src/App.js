import React, { Component } from 'react';
import Header from './containers/Header';
import Body from './containers/Body';
import Footer from './containers/Footer';
import './App.css';
import SignInModal from './components/SignInModal';
import URL from './constants/URL';
import request from 'axios';

export default class App extends Component {
  state = {
    userId: null,
    username: '',
    modalIsOpen: false
  };

  async componentWillMount() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const { data: { userId, username } } = await request.get(
          `${URL}/users/session`,
          {
            headers: {
              authorization: token
            }
          }
        );
        this.setState({ userId, username });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    const { modalIsOpen, username } = this.state;
    return (
      <div className="App">
        <Header
          username={username}
          onLogOut={this.onLogOut}
          onSignInClick={() => this.setState({ modalIsOpen: true })}
        />
        <Body />
        <Footer />
        <SignInModal
          isOpen={modalIsOpen}
          onClose={() => this.setState({ modalIsOpen: false })}
          onSignUp={this.onSignUp}
          onLogIn={this.onLogIn}
        />
      </div>
    );
  }

  onSignUp = async ({ username, password }) => {
    try {
      const { data: { alreadyExists, token, userId } } = await request.post(
        `${URL}/users`,
        {
          username,
          password
        }
      );
      if (alreadyExists) return alert('User already exists');
      localStorage.setItem('token', token);
      this.setState({
        userId,
        username,
        modalIsOpen: false
      });
    } catch (error) {
      console.error(error);
    }
  };

  onLogIn = async ({ username, password }) => {
    try {
      const { data: { token, userId } } = await request.get(
        `${URL}/users?username=${username}&password=${password}`
      );
      localStorage.setItem('token', token);
      this.setState({
        userId,
        username,
        modalIsOpen: false
      })
    } catch (error) {
      console.error(error);
    }
  };

  onLogOut = () => {
    localStorage.removeItem('token');
    this.setState({
      userId: null,
      username: ''
    });
  };
}
