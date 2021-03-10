import React from 'react';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { v4 as uuidv4 } from 'uuid';

const Searchbar = () => {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}
export default Searchbar;