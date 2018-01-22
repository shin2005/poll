import React, { Component } from 'react';
import Modal from 'react-modal';

export default class OptionModal extends Component {
  state = {
    signUp: {
      username: '',
      password: '',
      passwordConfirm: ''
    },
    login: {
      username: '',
      password: ''
    }
  };

  render() {
    const { onClose, isOpen, onLogIn } = this.props;
    const { signUp, login } = this.state;
    return (
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            position: 'absolute',
            width: '50%',
            left: '25%',
            height: '30%',
            top: '30%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'space-around'
          }}
        >
          <form
            style={{
              display: 'flex',
              width: '45%',
              flexDirection: 'column'
            }}
            autoComplete="new-password"
            onSubmit={this.onSignUp}
          >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              I am a new user
            </p>
            <input
              type="text"
              placeholder="My Username"
              autoComplete="off"
              value={signUp.username}
              onChange={event => {
                event.persist();
                this.setState(state => ({
                  signUp: {
                    ...state.signUp,
                    username: event.target.value
                  }
                }));
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={signUp.password}
              onChange={event => {
                event.persist();
                this.setState(state => ({
                  signUp: {
                    ...state.signUp,
                    password: event.target.value
                  }
                }));
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={signUp.passwordConfirm}
              onChange={event => {
                event.persist();
                this.setState(state => ({
                  signUp: {
                    ...state.signUp,
                    passwordConfirm: event.target.value
                  }
                }));
              }}
            />
            <button style={{ marginTop: '1.5rem' }}>Sign Up</button>
          </form>
          <form
            style={{
              display: 'flex',
              width: '45%',
              flexDirection: 'column'
            }}
            onSubmit={event => {
              event.preventDefault();
              onLogIn(login);
            }}
          >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              I am a returning user
            </p>
            <input
              type="text"
              placeholder="My Username"
              value={login.username}
              onChange={event => {
                event.persist();
                this.setState(state => ({
                  login: {
                    ...state.login,
                    username: event.target.value
                  }
                }));
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={event => {
                event.persist();
                this.setState(state => ({
                  login: {
                    ...state.login,
                    password: event.target.value
                  }
                }));
              }}
            />
            <button style={{ marginTop: '1.5rem' }}>Log In</button>
          </form>
        </div>
      </Modal>
    );
  }

  onSignUp = (event) => {
    event.preventDefault()
    const { onSignUp } = this.props;
    const { signUp } = this.state;
    if (signUp.password === signUp.passwordConfirm) {
      onSignUp(signUp);
    } else {
      alert('Passwords do not match');
    }
  };
}
