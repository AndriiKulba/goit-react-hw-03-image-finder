import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';
import { v4 as uuidv4 } from 'uuid';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  OnBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { toggleModal } = this.props;
    return (
      <div className="Overlay" onClick={this.OnBackdropClick}>
        <div className="Modal">
          <img
            src="https://pixabay.com/get/gd0228ebbee6cb0bde8ff5a889a899deb837c6544114b70034e2e4a752e7de0a081308ce4522820250b52717819ad9a6cea2352bc73be8138b8a1b463001699a9_1280.jpg"
            alt="123"
          />
        </div>
        <button
          type="button"
          className={s.ModalBtn}
          onClick={toggleModal}
        ></button>
      </div>
    );
  }
}
export default Modal;
