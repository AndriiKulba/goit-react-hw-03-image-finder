import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';
import ArrayImages from './db/arrayImage.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { showModal: false };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem
            Images={ArrayImages}
            toggleModal={this.toggleModal}
          />
        </ImageGallery>
        <Button />
        <Loader />
        {showModal && <Modal />}
      </div>
    );
  }
}

export default App;
