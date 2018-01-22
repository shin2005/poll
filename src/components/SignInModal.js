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
    const { onClose, isOpen } = this.props;
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
          <div
            style={{
              display: 'flex',
              width: '45%',
              flexDirection: 'column'
            }}
          >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              I am a new user
            </p>
            <input type="text" placeholder="My Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button style={{ marginTop: '1.5rem' }}>Sign Up</button>
          </div>
          <div
            style={{
              display: 'flex',
              width: '45%',
              flexDirection: 'column'
            }}
          >
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              I am a returning user
            </p>
            <input type="text" placeholder="My Username" />
            <input type="password" placeholder="Password" />
            <button style={{ marginTop: '1.5rem' }}>Log In</button>
          </div>
        </div>
      </Modal>
    );
  }
}
