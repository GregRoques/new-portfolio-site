import React, { Component } from 'react';
import cssPhotography from './photography.module.css'
import PhotoGallery from './GalleryHandler';
import axios from 'axios';
import {grAPI} from '../../Dependencies/BackendAPI'
import InfiniteScroll from 'react-infinite-scroll-component';
import InstaGallery from '../InstaWidget/instaGallery.js'


class Photography extends Component {
    state = {
      albums: [],
      albumLength: 0,
      loaded: false,
      isNoError: true,
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getPhotos(0);
    }

    getPhotos = (start) => {
      axios.post(`${grAPI}/photography`, {
          lengthStart: start,
          album: "ALL"
      })
      .then(res => {
          //console.log(res.data)
          this.setState(prevState => ({
              albums: [...prevState.albums, ...res.data.albums],
              albumLength: prevState.albumLength === 0 ? res.data.albumLength : prevState.albumLength,
              loaded: true
          }))
      })        
      .catch(() => {
          this.setState({
            isNoError: false
          })
      })

  }      
      render(){
        const {albumLength, loaded, isNoError, albums } = this.state;
          return isNoError ? (
            <div className={cssPhotography.fadeIn}>
              <div className={cssPhotography.photoHeader}>Photography</div>
            <div className={cssPhotography.galleryContainer}>
                <InfiniteScroll
                    dataLength={albums.length}
                    next={() => this.getPhotos(albums.length)}
                    hasMore={albums.length !== albumLength}
                    loader={
                      <img
                      className={cssPhotography.loader}
                      src="/images/loadingImage.gif"
                      alt="loading"
                      />
                    }
                >
                <div className={cssPhotography.gridContainer} style={{ marginTop: "30px" }}>
                    {loaded
                    ? albums.map((album, i) => {
                        const { title, images } = album;
                            return(
                              <PhotoGallery
                                key= { i }
                                album= { title }
                                images= { images }
                              />
                            )
                        }) : ""}
                        </div>
                    </InfiniteScroll>
                </div>
                <InstaGallery/>
              </div>
        ) : 
        <div className={`${cssPhotography.fadeIn}`}>
          <div className={cssPhotography.photoHeader}>Error</div>
          <div className={cssPhotography.errorText}>
              Sorry, we cannot load this content right now. Please try again later.
          </div>
          <InstaGallery/>
        </div>
        
      }
    }

export default Photography;