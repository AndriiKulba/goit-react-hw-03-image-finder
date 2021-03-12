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
    const { activeImage, toggleModal } = this.props;
    return (
      <div className="Overlay" onClick={this.OnBackdropClick}>
        <div className="Modal">
          <img src={activeImage.largeImageURL} alt={activeImage.tag} />
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
