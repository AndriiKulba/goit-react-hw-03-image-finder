import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';
import { v4 as uuidv4 } from 'uuid';

const Button = () => {
  return (
    <button type="button" className={s.Button}>
      Load more
    </button>
  );
};
export default Button;
