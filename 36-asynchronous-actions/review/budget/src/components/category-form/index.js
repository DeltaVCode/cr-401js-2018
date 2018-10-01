import React, { Component } from 'react';

const defaultState = {
  title: '',
};

export default class CategoryForm extends Component {
  constructor(props) {
    super(props);

    // Initialize form
    this.state = props.category || defaultState;
  }

  componentDidUpdate() {
    console.log('__FORM_STATE__', this.state);
  }

  // Note this is not handleSubmit(event)
  // so we don't have to this.handleSubmit.bind(this)
  handleSubmit = (event) => {
    event.preventDefault();

    console.log('saving', this.state)
    this.props.handleComplete(this.state);

    // Reset insert form
    if (!this.props.category) {
      this.setState(defaultState);
    }
  }

  handleChange = (event) => {
    const { name, value, type } = event.target;

    // Set property matching current input name to value
    this.setState({
      [name]: type === 'number' ? +value : value,
    });
  }

  /* equivalent to above, but tedious to write
  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
        <button type="submit" className="first-form-button">
          {this.props.category ? 'Update' : 'Create'}
          {' '}{/* <= this is how you insert an actual space in HTML */}
          Category
        </button>
      </form>
    );
  }
}
