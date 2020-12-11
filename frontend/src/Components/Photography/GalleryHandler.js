import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import cssPhotoGallery from './photography.module.css'

var myInterval

class PhotoGallery extends Component{
    state = {
        currentImage: 0,
      }
    
    maskOn = gallery => {
    myInterval =  setInterval(() => {
            if (this.state.currentImage < gallery.length - 1){
                this.setState({
                currentImage: this.state.currentImage +1
                })
            }else{
                this.setState({
                currentImage: 0
                })
            }
        }, 800);
    }

    preventDragHandler = (e) => {
      e.preventDefault();
    }
    
    maskOff = () => {
        clearInterval(myInterval)
      this.setState({
        currentImage: 0
      })
    }

    selectAlbumHandler = folder => {
      const extension = folder.toLowerCase().replaceAll(" ", "_")
      this.setState({
        redirect: extension
      })
    }

  render(){
    const { album, images } = this.props;
    const { currentImage } = this.state;
    const extension = album.toLowerCase().replaceAll(" ", "_")

    return(
      <div className= { cssPhotoGallery.centerText }>
          <div className= { cssPhotoGallery.box } onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
            <Link to={`/photography/${extension}`}>
              <img 
                src = { `/images/photography/${album}/${images[currentImage]}`}
                alt = { this.props.album }
                onMouseEnter = {()=> this.maskOn(images)}
                onMouseLeave ={()=> this.maskOff()}
              />
            </Link>
          </div>
          { album }
      </div>
    )
    }
  }

  export default PhotoGallery;

  