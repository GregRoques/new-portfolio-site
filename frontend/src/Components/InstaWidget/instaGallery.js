import React, { Component } from 'react';
import axios from "axios";
import cssInstagram from './instaGallery.module.css';
import {grAPI} from '../../Dependencies/BackendAPI';

class instaGallery extends Component {
    state={
        user: {},
        image: [],
        instaDisplay: false,
        picIndex: 0,
        selectedPic: 0,
        selectedPicIndex: 0,
        display: false
    }

    componentDidMount = () =>{
        this.getInstaGallery()
    }

    getInstaGallery = () =>{
        axios.get(`${grAPI}/instagramImages`)
          .then(res => {
              //console.log(res.data)
              const { userName, image } = res.data; //profilePic
              this.setState({
                  user: {
                      userName: userName
                  },
                  image: image,
                  instaDisplay: image.length >= 5 ? true : false
              })
          })
          .catch( err => {
            console.log(err);
          });
    }

    instaPopUp = () =>{
        const { image, selectedPic, selectedPicIndex } = this.state;
        const { userName } = this.state.user;
        return  this.state.display === true ? (
            <div className={cssInstagram.centerAndBackground} onClick={(e) => this.isPopUpOpen(e, "")}>
                <div onClick={(e) => this.isPopUpOpen(e, "")} className={cssInstagram.closeButton}>X</div>
                <div className={cssInstagram.selectedContainer}>
                    <div className={cssInstagram.selectedHeader}>
                        <img alt="profile pic" className={cssInstagram.selectedHeaderImage} src='/images/headShots/instaPic.jpg'/>
        <a className={cssInstagram.selectedHyperlink} href={`${image[selectedPic].url}`} target="_blank" rel="noopener noreferrer nofollow">{userName}</a> 
                    </div>
                    { image[selectedPic].children !== null ?
                        <div className={cssInstagram.selectedImageContainer}>
                            <div className={ cssInstagram.buttonRight }>
                                <div className={ cssInstagram.imageGalleryButtons } onClick={()=>this.clickR()}>{'>'}</div>
                            </div>
                            <div className={ cssInstagram.buttonLeft }>
                                <div className={ cssInstagram.imageGalleryButtons } onClick={()=>this.clickL()}>{'<'}</div>
                            </div>
                            <img class={cssInstagram.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].children[selectedPicIndex].media_url }/>
                        </div>
                            : <div className={cssInstagram.selectedImageContainer}>
                                <img class={cssInstagram.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic }/>
                            </div>
                        }
                    <div className={cssInstagram.selectedCaption}>
                    <b>{image[selectedPic].date}</b><br/>
                    { image[selectedPic].children !== null ? <b>{ selectedPicIndex +1 }/{ image[selectedPic].children.length }: </b> : null }{ image[selectedPic].caption }
                    </div>
                </div>
            </div>
        ) : null
    }

    clickL = () =>{
        const { image, selectedPic, selectedPicIndex } = this.state;
        let i = selectedPicIndex - 1;
        if(i<0){
            i = image[selectedPic].children.length - 1
        }

        this.setState({
            selectedPicIndex: i
        })
    }

    clickR = () =>{
        const { image, selectedPic, selectedPicIndex } = this.state;
        let i = selectedPicIndex + 1;
        if(i> image[selectedPic].children.length - 1){
            i = 0
        }

        this.setState({
            selectedPicIndex: i
        })
    }

    isPopUpOpen = (e, num) =>{
        const { display } = this.state;
        if(e.target !== e.currentTarget && display){
            return
        }
        this.setState({
            display: !display,
            selectedPic: num,
            selectedPicIndex: 0
        })
    }

    togglePics = () =>{
        const { picIndex } = this.state;
        const total = this.state.image.length;

        const newIndex = (picIndex + 10) <= total
            ? picIndex + 5 
            : total - picIndex <= 5
                ? 0 
                : picIndex + (total - picIndex - 5)

        console.log(newIndex)
        this.setState({
            picIndex: newIndex
        })
    }

    // ========================================================= RENDER
    // ================================================================ 

    render(){
        const { image, picIndex, instaDisplay } = this.state;
        console.log(picIndex)
        return instaDisplay === true ? (
            <div>
                <this.instaPopUp/> 
                <div className={cssInstagram.instagramParentHeader}>Instagram</div>
                <div className={cssInstagram.instaModuleSpacing}>
        <div className={cssInstagram.container}>
        <div className={cssInstagram.header}>
            <a href={`https://www.instagram.com/${this.state.user.userName}`} target="_blank" rel="noopener noreferrer nofollow">
                @{this.state.user.userName}
            </a> 
        </div>
        <div className={cssInstagram.postCount}>
            { image.length > 5 ? <span title="Click to Toggle Instagram Images" className={cssInstagram.boldHover} onClick={()=> this.togglePics()}>More Pics</span> : "" }
        </div>
        <div className={cssInstagram.flexFiveCenter}>
        <div className={cssInstagram.hitemwiththatflexRow}>
            <div className={cssInstagram.hitemwiththatflexColumn1}>
                <div className={cssInstagram.instaImage1} onClick={(e)=> this.isPopUpOpen(e, 0 + picIndex)} >
                    <img className={cssInstagram.bigPicture} alt={ "insta1" } src={ image[0 + picIndex].pic }/>
                    <div className ={cssInstagram.onHover}>
                        <div className={cssInstagram.onHoverDate}>{image[0 + picIndex].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={cssInstagram.hitemwiththatflexColumn2}>
                <div className={cssInstagram.instaImage2} onClick={(e)=> this.isPopUpOpen(e, 1 + picIndex)} >
                    <img className={cssInstagram.smallPicture} alt={ "insta2" } src={ image[1 + picIndex].pic }/>
                    <div className ={cssInstagram.onHover}>
                        <div className={cssInstagram.onHoverDate}>{image[1 + picIndex].date}</div>
                    </div>
                </div>
                <div className={cssInstagram.instaImage3} onClick={(e)=> this.isPopUpOpen(e, 2 + picIndex)} >
                    <img className={cssInstagram.smallPicture} alt={ "insta3"  } src={ image[2 + picIndex].pic }/>
                    <div className ={cssInstagram.onHover}>
                        <div className={cssInstagram.onHoverDate}>{image[2 + picIndex].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={cssInstagram.hitemwiththatflexColumn3}>
                <div className={cssInstagram.instaImage4} onClick={(e)=> this.isPopUpOpen(e, 3 + picIndex)} >
                    <img className={cssInstagram.smallPicture} alt={ "insta4" } src={ image[3 + picIndex].pic }/>
                    <div className ={cssInstagram.onHover}>
                        <div className={cssInstagram.onHoverDate}>{image[3 + picIndex].date}</div>
                    </div>
                </div>
                <div className={cssInstagram.instaImage5} onClick={(e)=> this.isPopUpOpen(e, 4 + picIndex)} >
                    <img className={cssInstagram.smallPicture} alt={ "insta5" } src={ image[4 + picIndex].pic }/>
                    <div className ={cssInstagram.onHover}>
                        <div className={cssInstagram.onHoverDate}>{image[4 + picIndex].date}</div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
                
            </div>

        ): <div className={cssInstagram.instaNotVisibleCenter}>
            <a href="https://www.instagram.com/qtrmileatatime/" target="_blank"><img src="/images/instagramNotVisible.jpg"/></a>
        </div>;
    };
}

export default instaGallery;