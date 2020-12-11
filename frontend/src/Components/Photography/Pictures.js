import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import {grAPI} from '../../Dependencies/BackendAPI'
import InfiniteScroll from 'react-infinite-scroll-component';
import cssPictures from './photography.module.css'
import PicModal from './picturesModal';

class Pictures extends Component{

    state = {
        modalShow: false,
        modalPhoto: null,
        images: [],
        albumLength: 0,
        albumTitle: "",
        loaded: false,
        redirect: false
        
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
            console.log(res.data)
            if(res.data === true){
                return this.isRedirected()
            } else {
            const {albumLength, title, images} = res.data;
            this.setState(prevState => ({
                images: [...prevState.images, ...images],
                albumTitle: !prevState.albumTitle ? title : prevState.albumTitle,
                albumLength: prevState.albumLength === 0 ? albumLength : prevState.albumLength,
                loaded: true
            }))
        }
        })        
        .catch(() => {
            //this.isRedirected()
        })
  
    }

    isRedirected = () =>{
        this.setState({
            redirect: true
        })
    }

    pictureDisplayToggle = (currentPhoto = null) =>{
        this.setState(prevState =>({
            modalShow: !prevState.modalShow,
            modalPhoto: currentPhoto
        }))

    }

    clickL = () =>{
        let index = this.state.modalPhoto;
        if(index !== 0){
            index--
            this.setState({
                modalPhoto: index
            })
        }
    }

    clickR = () =>{
        let index = this.state.modalPhoto;
        const currLength = this.state.images.length -1
        if (index !== currLength){
            index++
            this.setState({
                modalPhoto: index
            })
        }
    }

    preventDragHandler = (e) => {
        e.preventDefault();
      }


    render(){
        const {modalShow, modalPhoto, images, albumLength, albumTitle, loaded, redirect} = this.state;
        console.log(`Images Length: ${images.length} === Album Length ${albumLength}`)
        if(redirect){
            return <Redirect push to={`/photography`}/>
        }

        return albumTitle ? (
            <div className = { cssPictures.fadeIn }>
                <PicModal
                    state={{modalPhoto, modalShow, images, albumTitle}}
                    clickL = {this.clickL}
                    clickR = {this.clickR}
                    pictureDisplayToggle = {this.pictureDisplayToggle}
                    preventDragHandler = {this.preventDragHandler}
                />
                <h1 className = {cssPictures.photoHeader2}>{albumTitle}</h1>
                <div className = { cssPictures.photoGalleryContainer }>
                    <InfiniteScroll
                        dataLength={images.length}
                        next={() => this.getPhotos(images.length, albumTitle.toLowerCase())}
                        hasMore={images.length !== albumLength}
                        loader={
                            <img
                            className={cssPictures.loader}
                            src="/images/loadingImage.gif"
                            alt="loading"
                        />
                        }
                    >
                        <div className = { cssPictures.photoGrid }>
                            { loaded ? images.map((image, i) => {
                                return(
                                    <div key={ i } className={cssPictures.photoBox} onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
                                        <img onClick={() => this.pictureDisplayToggle(i) } alt={ albumTitle + i } src={`/images/photography/${albumTitle}/${image}`}/>
                                    </div>
                                )
                            }) : ""}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        ) : null
        
    }
}

export default Pictures;