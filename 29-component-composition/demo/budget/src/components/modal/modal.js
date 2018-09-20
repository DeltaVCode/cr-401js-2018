import React, { Component } from 'React';
import PropTypes from 'prop-types';
import './modal.css';

export default class Modal extends Component {
  render() {
    const wrapperClassName = this.props.show ? 'modal display-block' : 'modal display-none';
    return (
      <div className={wrapperClassName}>
        <main>
          <button onClick={this.props.handleClose} className="modal-close">&times;</button>

          {this.props.title && 
            <h2>{this.props.title}</h2>}

          {this.props.children}
          {/*
            <Modal handleClose={...}>
              <form>
                ...
              </form>
            </Modal>
          */}
        </main>
      </div>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  handleClose: PropTypes.func,
  children: PropTypes.node,
};
