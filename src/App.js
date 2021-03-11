import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal';
import Button from './components/Button';
import ArrayImages from './db/arrayImage.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { showModal: false, isLoading: false };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal, isLoading } = this.state;
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
        {isLoading && (
          <Loader
            type="BallTriangle"
            color="#21319c"
            secondaryColor="#5d75fd"
            height={40}
            width={40}
            className="loader"
          />
        )}

        {showModal && <Modal toggleModal={this.toggleModal} />}
      </div>
    );
  }
}

export default App;
