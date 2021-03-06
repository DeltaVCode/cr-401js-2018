import React from 'react';
import { connect } from 'react-redux';
import AuthForm from '../auth-form';
import * as actions from '../../actions/auth';

class AuthContainer extends React.Component {
  render() {
    const authType = this.props.match.params.type;
    if (authType === 'signout') {
      this.props.signoutHandler(() => this.props.history.push('/'));
      return null;
    }

    const submitButtonText =
      authType === 'signup' ? 'Sign Up' : 'Sign In';

    const handleComplete = this.props[authType + 'Handler'];

    return (
      <AuthForm
        onComplete={handleComplete}
        submitButtonText={submitButtonText} 
        redirect={() => this.props.history.push('/')}
        />
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  signinHandler: user => dispatch(actions.loginRequest(user)),
  signupHandler: user => dispatch(actions.signupRequest(user)),
  signoutHandler: redirect => dispatch(actions.logoutRequest(redirect)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
