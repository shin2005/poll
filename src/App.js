import React, { Component } from 'react';
import Header from './containers/Header'
import Body from './containers/Body';
import Footer from './containers/Footer';
import './App.css';
import SignInModal from './components/SignInModal';

export default class App extends Component {
  state = {
    modalIsOpen: false
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <SignInModal
          isOpen={modalIsOpen}
          onClose={() => this.setState({ modalIsOpen: false })}
        />
      </div>
    );
  }
}
