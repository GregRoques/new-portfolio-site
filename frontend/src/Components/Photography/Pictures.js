import React, { Component } from 'react';
import css from './Photography.module.css'
import {connect} from "react-redux"
import SetHeader from '../../Actions/SetHeader'
import { SetPhotoArray } from '../../Actions/PhotoArray'

var photoArray = {}

class Pictures extends Component{

    state = {
        modalShow: false,
        modalPhoto: null
        
    }

    componentDidMount(){
        if(this.props.header !== "Photography"){
            this.props.Header("Photography");
        }
        window.scrollTo(0, 0);
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

    clickL = (i, album) =>{
        i--
        if(i<0){
            i = photoArray[album].length - 1
        }

        this.setState({
            modalPhoto: i
        })
    }

    clickR = (i, album) =>{
        i++
        if(i> photoArray[album].length - 1){
            i = 0
        }

        this.setState({
            modalPhoto: i
        })
    }

    preventDragHandler = (e) => {
        e.preventDefault();
      }

    render(){

        var currentPathname =((window.location.pathname).split('/photography/').pop()).replace(/["_"]/g, " ");
        let modalPhotoGallery = null
        if(this.props.reduxPhoto === null){
            const folderNames = require.context('../../../public/images/photography/').keys()
            folderNames.forEach(folder=>{
              let anImage = folder
              let anAlbum = (folder.replace('./','')).split('/')[0]
                
              if (!Object.keys(photoArray).includes(anAlbum)){
                photoArray[anAlbum] = [anImage]
              } else {
                photoArray[anAlbum].push(anImage)
              }
            })
            this.props.setArray(photoArray)
        } else {
          photoArray = this.props.reduxPhoto
        }

        if(this.state.modalShow){
            modalPhotoGallery=(
                <div className= { css.photoModal } >
                    <div className={ css.closePhotoModal } onClick={()=> this.pictureDisplayOff()}>x</div>
                    <div className ={ css.photoContent}>
                        <div className={ css.imageGalleryButtons } onClick={()=>this.clickL(this.state.modalPhoto, currentPathname)}>{`<`}</div>
                        <div className={ css.sliderContainer } onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
                            <img alt={ currentPathname + this.state.modalPhoto } src={'/images/photography/' + photoArray[currentPathname][this.state.modalPhoto] }/>
                        </div>
                        <div className={ css.imageGalleryButtons } onClick={()=>this.clickR(this.state.modalPhoto, currentPathname)}>{`>`}</div>
                    </div>
                </div>
            )
        }
        
        return(
            <div className = { css.fadeIn }>
                { modalPhotoGallery }
                <h1 className = {css.albumTitleText}>{currentPathname}</h1>
                <div className = { css.photoGalleryContainer }>
                    <div className = { css.photoGrid }>
                        { photoArray[currentPathname] ? photoArray[currentPathname].map((image, i) => {
                            return(
                                <div key={ i } className={css.photoBox} onContextMenu={this.preventDragHandler} onDragStart={this.preventDragHandler}>
                                    <img onClick={() => this.pictureDisplayOn(i) } alt={ currentPathname + i } src={'/images/photography/'+ image}/>
                                </div>
                            )
                        }): this.props.history.push(`/photography`) } 
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapDispatchToProps = dispatch =>{
    return{
         Header: (page) => dispatch(SetHeader(page))
    }
 }

export default connect(null, mapDispatchToProps)(Pictures);