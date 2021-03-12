import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ Images, getLargeImg }) => {
  return (
    <>
      {Images.map(Image => {
        return (
          <li key={Image.id} className="ImageGalleryItem">
            <img
              src={Image.webformatURL}
              alt={Image.tag}
              className="ImageGalleryItem-image"
              onClick={() => getLargeImg(Image)}
            />
          </li>
        );
      })}
    </>
  );
};
export default ImageGalleryItem;
