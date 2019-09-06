import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo.svg';

const burgerStyle = {
  borderStyle: 'none',
  outlineStyle: 'none',
  background: '#ffffff',
};

const Header = props => {
  const {
    title = 'Welcome to expense app',
    url = 'http://localhost:3000',
  } = props;
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href={url}>
          <img src={logo} width="112" height="28" alt={title} />
        </a>

        <button
          type="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          style={burgerStyle}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" type="button">
                <strong>Sign up</strong>
              </button>
              <button type="button" className="button is-light">
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Header;
