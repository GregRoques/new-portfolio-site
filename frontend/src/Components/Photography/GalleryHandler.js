import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import cssPhotoGallery from './photography.module.css'

var myInterval

class PhotoGallery extends Component{
    state = {
        currentImage: 0,
        redirect: ""
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
    const { currentImage, redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/photography/${redirect}`}/>
    }

    return(
      <div className= { cssPhotoGallery.centerText }>
        <div className= { cssPhotoGallery.box } onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
          <img 
            src = { `/images/photography/${album}/${images[currentImage]}`}
            alt = { this.props.album }
            onMouseEnter = {()=> this.maskOn(images)}
            onMouseLeave ={()=> this.maskOff()}
            onClick ={()=> this.selectAlbumHandler(album)}
          />
        </div>
        { album }
      </div>
    )
    }
  }

  export default PhotoGallery;

  