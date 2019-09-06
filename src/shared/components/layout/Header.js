import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/images/logo.svg';

const logoStyle = {
  maxWidth: '320px',
};

const Header = props => {
  const {
    title = 'Welcome to expense app',
    url = 'http://localhost:3000',
  } = props;
  return (
    <header className="app-header">
      <a href={url}>
        <img src={logo} alt="expenses" style={logoStyle} />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
