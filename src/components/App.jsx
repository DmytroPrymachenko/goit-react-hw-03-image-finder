import { getAllPhoto } from 'API/Users';
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    photos: [],
    modal: false,
    search: '',
    page: 1,
    url: '',
    loading: false,
  };

  // componentDidMount() {
  //   this.fetchPhotos();
  // }

  fetchPhotos = async (q = '', page = 1) => {
    try {
      this.setState({ loading: true });
      const { hits } = await getAllPhoto(q, page);
      if (page === 1) {
        this.setState({ photos: hits });
      } else {
        this.setState(prev => ({
          photos: [...prev.photos, ...hits],
        }));
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  getSearch = value => {
    this.setState({ page: 1, search: value });
  };

  getPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  // Новва частина

  componentDidUpdate(_, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchPhotos(this.state.search);
    }
    if (prevState.page !== this.state.page) {
      this.fetchPhotos(this.state.search, this.state.page);
    }
  }
  openModal = url => {
    this.setState({ url, modal: true });
    window.addEventListener('keydown', this.onWindowCloseModal);
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
    const { photos, modal, loading } = this.state;
    return (
      <div>
        {modal && (
          <Modal closeModal={this.closeModal} urlModal={this.state.url} />
        )}

        <Searchbar getSearch={this.getSearch}></Searchbar>
        {loading && <Loader />}
        <ImageGallery>
          {photos.length > 0 &&
            photos.map(el => (
              <ImageGalleryItem
                openModal={this.openModal}
                key={el.id}
                webformatURL={el.webformatURL}
                largeImageURL={el.largeImageURL}
              />
            ))}
        </ImageGallery>
        {photos.length >= 12 && <Button getPage={this.getPage}></Button>}
      </div>
    );
  }
}
