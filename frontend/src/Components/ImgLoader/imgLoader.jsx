import React, { Component } from 'react';
import cssImgLoader from './ImgLoader.module.css'

class ImageLoader extends Component {

    state={
        imageLoaded: false
    }

    preventImageTheft = (e) => {
        e.preventDefault();
    }

    setImageLoaded = () => {
        this.setState({
            imageLoaded: true
        })
    }

    render(){
        const {src, alt, onClick=""} = this.props;
        const {imageLoaded} = this.state;
        return(
            <img 
                src={src}
                alt={alt}
                onClick={onClick}
                className={`${cssImgLoader.imgLoaderTransition} ${imageLoaded ? cssImgLoader.imgLoaderVisible :  cssImgLoader.imgLoaderHidden } }`}
                onDragStart={e=> this.preventImageTheft(e)} 
                onContextMenu={e=> this.preventImageTheft(e)}
                onLoad={()=> this.setImageLoaded()}
            />
        )
    }
}

export default ImageLoader;