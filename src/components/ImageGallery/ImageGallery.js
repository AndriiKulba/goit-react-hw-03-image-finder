import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGallery = ({ children }) => {
  return <ul className="ImageGallery">{children}</ul>;
};
export default ImageGallery;
