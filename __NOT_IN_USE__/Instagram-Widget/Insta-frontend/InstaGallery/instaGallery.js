import React, { Component } from 'react';
import axios from "axios";
import instaCss from './instaGallery.module.css';
import { instaBackend } from "../../AxiosOrders";

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
        axios.get(instaBackend)
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
            <div className={instaCss.centerAndBackground} onClick={(e) => this.isPopUpOpen(e, "")}>
                <div onClick={(e) => this.isPopUpOpen(e, "")} className={instaCss.closeButton}>X</div>
                <div className={instaCss.selectedContainer}>
                    <div className={instaCss.selectedHeader}>
                        <img alt="profile pic" className={instaCss.selectedHeaderImage} src='/images/homepage/instaPic.jpg'/>
        <a className={instaCss.selectedHyperlink} href={`${image[selectedPic].url}`} target="_blank" rel="noopener noreferrer nofollow">{userName}</a> 
                    </div>
                    { image[selectedPic].children !== null ?
                        <div className={instaCss.selectedImageContainer}>
                            <div className={ instaCss.buttonRight }>
                                <div className={ instaCss.imageGalleryButtons } onClick={()=>this.clickR()}>{'>'}</div>
                            </div>
                            <div className={ instaCss.buttonLeft }>
                                <div className={ instaCss.imageGalleryButtons } onClick={()=>this.clickL()}>{'<'}</div>
                            </div>
                            <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].children[selectedPicIndex].media_url }/>
                        </div>
                            : <div className={instaCss.selectedImageContainer}>
                                <img class={instaCss.chosenImage} alt={ `insta${selectedPic}`} src={ image[selectedPic].pic }/>
                            </div>
                        }
                    <div className={instaCss.selectedCaption}>
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
            <div className={instaCss.instaModuleSpacing}>
                <this.instaPopUp/> 
                 <div className={instaCss.container}>
        <div className={instaCss.header}>
            <a href={`https://www.instagram.com/${this.state.user.userName}`} target="_blank" rel="noopener noreferrer nofollow">
                @{this.state.user.userName}
            </a> 
        </div>
        <div className={instaCss.postCount}>
            { image.length > 5 ? <span title="Click to Toggle Instagram Images" className={instaCss.boldHover} onClick={()=> this.togglePics()}>More Pics</span> : "" }
        </div>
        <div className={instaCss.hitemwiththatflexRow}>
            <div className={instaCss.hitemwiththatflexColumn1}>
                <div className={instaCss.instaImage1} onClick={(e)=> this.isPopUpOpen(e, 0 + picIndex)} >
                    <img className={instaCss.bigPicture} alt={ "insta1" } src={ image[0 + picIndex].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverDate}>{image[0 + picIndex].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn2}>
                <div className={instaCss.instaImage2} onClick={(e)=> this.isPopUpOpen(e, 1 + picIndex)} >
                    <img className={instaCss.smallPicture} alt={ "insta2" } src={ image[1 + picIndex].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverDate}>{image[1 + picIndex].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage3} onClick={(e)=> this.isPopUpOpen(e, 2 + picIndex)} >
                    <img className={instaCss.smallPicture} alt={ "insta3"  } src={ image[2 + picIndex].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverDate}>{image[2 + picIndex].date}</div>
                    </div>
                </div>
            </div>
            
            <div className={instaCss.hitemwiththatflexColumn3}>
                <div className={instaCss.instaImage4} onClick={(e)=> this.isPopUpOpen(e, 3 + picIndex)} >
                    <img className={instaCss.smallPicture} alt={ "insta4" } src={ image[3 + picIndex].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverDate}>{image[3 + picIndex].date}</div>
                    </div>
                </div>
                <div className={instaCss.instaImage5} onClick={(e)=> this.isPopUpOpen(e, 4 + picIndex)} >
                    <img className={instaCss.smallPicture} alt={ "insta5" } src={ image[4 + picIndex].pic }/>
                    <div className ={instaCss.onHover}>
                        <div className={instaCss.onHoverDate}>{image[4 + picIndex].date}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
            </div>

        ): <div></div>;
    };
}

export default instaGallery;