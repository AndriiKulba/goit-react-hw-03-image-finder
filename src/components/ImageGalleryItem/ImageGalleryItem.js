import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ Images, toggleModal }) => {
  console.log(Images);
  //   return <div></div>;
  return (
    <>
      {Images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={uuidv4()} className="ImageGalleryItem">
            <img
              src={webformatURL}
              alt={id}
              className="ImageGalleryItem-image"
              onClick={toggleModal}
            />
          </li>
        );
      })}
    </>
  );
};
export default ImageGalleryItem;
