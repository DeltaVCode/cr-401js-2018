import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({ auth }) => (
  <nav>
    {auth ?
      <ul>
        <li>Welcome, user!</li>
      </ul>
      :
      <ul>
        <li><Link to="/auth/signup">Sign Up</Link></li>
        <li><Link to="/auth/signin">Sign In</Link></li>
      </ul>
    }
  </nav>
);

export default connect(
  // mapStateToProps:
  state => ({
    auth: state.auth,
  })
)(NavBar);
