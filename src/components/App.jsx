import { getAllPhoto } from 'API/Users';
import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';

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
    this.setState({ search: value });
  };

  getPage = prev => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    console.log(this.state);
    const { photos } = this.state;
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar getSearch={this.getSearch}></Searchbar>
        <ImageGallery>
          {photos.length > 0 ? (
            photos.map(el => (
              <ImageGalleryItem
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
