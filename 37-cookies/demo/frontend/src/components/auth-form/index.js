import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',

      usernameError: null,
      passwordError: null,

      error: null,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      [name + 'Error']: validate(name, value),
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await this.props.onComplete(this.state);

      this.resetForm();
      this.props.redirect();
    } catch (error) {
      console.error(error);
      this.setState({
        error: error.message || error, // ensure error is a string
      });
    }
  }

  resetForm = () => {
    var state = { error: null };
    ['username', 'password'].forEach(key => {
      state[key] = '';
      state[key + 'Error'] = null;
    });
    this.setState(state);
  }

  render() {
    const { error, username, usernameError, password, passwordError } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="auth-form">
        {error && <p className="error">{error}</p>}

        {usernameError && <label className="error" for="username">{usernameError}</label>}
        <input type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={this.handleChange} />

        {passwordError && <label className="error" for="password">{passwordError}</label>}
        <input type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handleChange} />

        <button type="submit">{this.props.submitButtonText || 'Submit'}</button>
      </form>
    )
  }
}

function validate(name, value) {
  // TODO: implement validation
  return null;
}
