import { getAllPhoto } from 'API/Users';
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    modal: false,
    search: '',
    page: 1,
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = async (q = '', page = 1) => {
    try {
      const { hits } = await getAllPhoto(q, page);
      this.setState({ photos: hits });
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  getSearch = value => {
    this.setState({ page: 1, search: value });
  };

  getPage = prev => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  // Новва частина

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhotos(this.state.search);
    }
  }
  openModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };
  onWindowCloseModal = el => {
    if (el.code === 'Escape') {
      this.closeModal();
      window.removeEventListener('keydown', this.onWindowCloseModal);
    }
  };

  render() {
    console.log(this.state);
    const { photos } = this.state;
    return (
      <div>
        <Modal
          closeModal={this.closeModal}
          largeImageURL={photos.largeImageURL}
        />
        <Searchbar getSearch={this.getSearch}></Searchbar>
        <ImageGallery>
          {photos.length > 0 ? (
            photos.map(el => (
              <ImageGalleryItem
                openModal={this.openModal}
                key={el.id}
                webformatURL={el.webformatURL}
                largeImageURL={el.largeImageURL}
              />
            ))
          ) : (
            <p>Not found</p>
          )}
        </ImageGallery>
        <Button getPage={this.getPage}></Button>
      </div>
    );
  }
}
