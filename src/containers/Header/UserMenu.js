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
          height: '49px',
          float: 'right',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'row-reverse'
        }}
      >
        <div
          style={{
            paddingRight: '1.5rem',
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
              position: 'absolute',
              marginTop: '53px'
            }}
          >
            <div className="dropdown" onClick={this.onLogOut}>
              Log Out
            </div>
          </div>
        )}
      </div>
    );
  }

  onLogOut = () => {
    const { onLogOut } = this.props;
    onLogOut()
    this.setState({ dropDownShown: false });
  };
}

export default onClickOutside(UserMenu);
