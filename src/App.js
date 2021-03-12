import './App.css';
import React, { Component } from 'react';
import Api from './components/API/Api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal';
import Button from './components/Button';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    arrayImages: [],
    activeImage: '',
    showModal: false,
    isLoading: true,
  };
  getLargeImg = e => {
    this.setState({ activeImage: e });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    Api.FetchImages()
      .then(data => this.setState({ arrayImages: data, isLoading: false }))
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }
  render() {
    const { arrayImages, activeImage, showModal, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem
            Images={arrayImages}
            getLargeImg={this.getLargeImg}
          />
        </ImageGallery>
        {!isLoading && <Button />}
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

        {showModal && (
          <Modal activeImage={activeImage} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
