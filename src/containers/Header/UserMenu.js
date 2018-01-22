import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class UserMenu extends Component {
  state = {
    dropDownShown: false
  };
  handleClickOutside = event => {
    this.setState({ dropDownShown: false });
  };
  render() {
    const { username } = this.props;
    const { dropDownShown } = this.state;
    return (
      <div
        style={{
          width: '10rem',
          height: '49px',
          float: 'right',
          marginRight: '0.5rem',
          cursor: 'pointer'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}
          onClick={() => this.setState({ dropDownShown: true })}
        >
          {username}
        </div>
        {dropDownShown && (
          <div
            style={{
              color: '#bababa',
              border: '1px solid #dddddd',
              borderRightWidth: '4px',
              borderBottomWidth: '4px',
              borderTop: 'none',
              width: '10rem',
              textAlign: 'center',
              marginTop: '4px',
              padding: '0.5rem',
              position: 'absolute',
              background: '#fff'
            }}
          >
            Log Out
          </div>
        )}
      </div>
    );
  }
}

export default onClickOutside(UserMenu);
