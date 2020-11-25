import React, { Component } from 'react';
import cssPhotography from './Photography.module.css'
import PhotoGallery from './GalleryHandler';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import InstaGallery from './InstaGallery/instaGallery'


class Photography extends Component {
    state = {
      albums: [],
      albumLength: 0,
      loaded: false,
      error: false,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getPhotos(0);
    }

    getPhotos = (start) => {
      axios.post(`${api}/photography`, {
          lengthStart: start,
          album: "ALL"
      })
      .then(res => {
          this.setState(prevState => ({
              albums: [...prevState.albums, ...res.data.albums],
              albumLength: prevState.albumLength === 0 ? res.data.albumLength : prevState.albumLength,
              loaded: true
          }))
      })        
      .catch(err => {
          this.setState({
              error: true
          })
      })

  }

    selectAlbum = extension => {
      return <Redirect push to={`/photography/${extension}`}/>
      }
    
      render(){
        const {images, albumLength, loaded, error } = this.state;
          return error === false ? (
            <div className={cssPhotography.fadeIn}>
            <div className={cssPhotography.imageGalleryContainer}>
                <InfiniteScroll
                    dataLength={images.length}
                    next={() => this.getPhotos(images.length)}
                    hasMore={images.length !== albumLength}
                    loader={
                      <img
                      className={cssPhotography.loader}
                      src="/images/hearts-placeholder.gif"
                      alt="loading"
                      />
                    }
                >
                <div className={cssPhotography.imageGrid} style={{ marginTop: "30px" }}>
                    {loaded
                    ? albums.map((album, i) => {
                            return(
                              <PhotoGallery
                                key= { i }
                                album= { album.title }
                                reference = { album.reference }
                                images= { album.images }
                                selectAlbumHandler = {this.selectAlbum}
                              />
                            )
                        }) : ""}
                        </div>
                    </InfiniteScroll>
                </div>
                <InstaGallery/>
              </div>
          ) : (
            <div>
                <h2>I am error</h2>
            </div>
        )
        
      }
    }

export default Photography;