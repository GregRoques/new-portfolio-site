import React, { Component } from 'react';
import css from './Photography.module.css'

var myInterval

class PhotoGallery extends Component{
    state = {
        currentImage: 0
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

  render(){
    const { title, images, reference } = this.props;
    const { currentImage } = this.state;
    return(
      <div className= { css.centerText }>
        <div className= { css.box } onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
          <img 
            src = { `./images/photography/${reference[currentImage]}`}
            alt = { this.props.album }
            onMouseEnter = {()=> this.maskOn(images)}
            onMouseLeave ={()=> this.maskOff()}
            onClick ={()=> this.props.selectAlbumHandler(reference)}
          />
        </div>
        { title }
      </div>
    )
    }
  }

  export default PhotoGallery;

  