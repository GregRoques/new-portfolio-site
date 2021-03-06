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
        const {src, alt, title="", id="", className="", onClick="" } = this.props;
        const {imageLoaded} = this.state;
        return(
            <img 
                src={src}
                alt={alt}
                title={title}
                id={id}
                onClick={onClick ? onClick : () => void 0}
                className={`${cssImgLoader.imgLoaderTransition} ${className} ${imageLoaded ? cssImgLoader.imgLoaderVisible :  cssImgLoader.imgLoaderHidden } }`}
                onDragStart={e=> this.preventImageTheft(e)} 
                onContextMenu={e=> this.preventImageTheft(e)}
                onLoad={()=> this.setImageLoaded()}
            />
        )
    }
}

export default ImageLoader;