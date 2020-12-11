import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import {grAPI} from '../../Dependencies/BackendAPI'
import cssPictures from './photography.module.css'

class Pictures extends Component{

    state = {
        modalShow: false,
        modalPhoto: null,
        images: [],
        albumLength: 0,
        albumTitle: "",
        loaded: false,
        
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        const currentPathname =((window.location.pathname).split('/photography/').pop()).replace(/["_"]/g, " ");
        this.getPhotos(0, currentPathname);
    }

    getPhotos = (start, album) => {
        axios.post(`${grAPI}/photography`, {
            lengthStart: start,
            album: album
        })
        .then(res => {
            //console.log(res.data)
            const {albumLength, title, images} = res.data;
            this.setState(prevState => ({
                images: [...prevState.albums, ...images],
                albumTitle: !prevState.albumTitle ? title : prevState.albumTitle,
                albumLength: prevState.albumLength === 0 ? albumLength : prevState.albumLength,
                loaded: true
            }))
        })        
        .catch(() => {
            return <Redirect push to={`/photography`}/>
        })
  
    }

    pictureDisplayOn = (currentPhoto) =>{
        this.setState(prevState =>({
            modalShow: !prevState.modalShow,
            modalPhoto: currentPhoto
        }))

    }

    pictureDisplayOff = () =>{
        this.setState(prevState=>({
            modalShow: !prevState.modalShow,
            modalPhoto: null
        }))
    }

    clickL = () =>{
        let index = this.state.modalPhoto;
        let currLength = this.state.images.length -1
        index--
        if(index<0){
            index = currLength
        }

        this.setState({
            modalPhoto: index
        })
    }

    clickR = () =>{
        let index = this.state.modalPhoto;
        let currLength = this.state.images.length -1
        index++
        if(index> currLength){
            index = 0
        }

        this.setState({
            modalPhoto: index
        })
    }

    preventDragHandler = (e) => {
        e.preventDefault();
      }

        modalPhotoGallery= () =>{
            const {modalPhoto, modalShow, images, albumTitle} = this.state;
            return modalShow ? (
            <div className= { cssPictures.photoModal } >
                <div className={ cssPictures.closePhotoModal } onClick={()=> this.pictureDisplayOff()}>x</div>
                <div className ={ cssPictures.photoContent}>
                    { modalPhoto < images.length -1 ?
                        <div className={ cssPictures.imageGalleryButtons } onClick={()=>this.clickL()}>{`<`}</div>    
                        : ""
                    }
                    
                    <div className={ cssPictures.sliderContainer } onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
                        <img alt={ albumTitle + modalPhoto } src={`/images/photography/${albumTitle}/${images[modalPhoto]}` }/>
                    </div>
                    { modalPhoto > 0 ?
                        <div className={ cssPictures.imageGalleryButtons } onClick={()=>this.clickR()}>{`>`}</div>
                        : ""
                    }
                </div>
            </div>
        ) : null;
    }

    render(){

        const {modalPhoto, modalShow, images, albumLength, albumTitle, loaded} = this.state;

        return(
            <div className = { cssPictures.fadeIn }>
                { this.modalPhotoGallery }
                <h1 className = {cssPictures.albumTitleText}>{albumTitle}</h1>
                <div className = { cssPictures.photoGalleryContainer }>
                    <div className = { cssPictures.photoGrid }>
                        { images.map((image, i) => {
                            return(
                                <div key={ i } className={cssPictures.photoBox} onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
                                    <img onClick={() => this.pictureDisplayOn(i) } alt={ albumTitle + i } src={`/images/photography/${albumTitle}/${image}`}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Pictures;