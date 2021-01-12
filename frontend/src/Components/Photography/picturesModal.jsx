import React from 'react';
import cssPicModal from './photography.module.css'
import ImageLoader from '../ImgLoader/imgLoader'

const PicModal = ({state, clickL, clickR, pictureDisplayToggle, preventDragHandler}) =>{
    const {modalShow, modalPhoto, images, albumTitle} = state;
    return modalShow? (
        <div className= { cssPicModal.photoModal } >
                <div className={ cssPicModal.closePhotoModal } onClick={()=> pictureDisplayToggle()}>x</div>
                <div className ={ cssPicModal.photoContent}>
                    <div className={ modalPhoto > 0 ? cssPicModal.imageGalleryButtons : cssPicModal.imageGalleryButtonsHidden } onClick={()=>clickL()}>{`<`}</div>
                    <div className={ cssPicModal.sliderContainer } onContextMenu={preventDragHandler} onDragStart={preventDragHandler}>
                        <ImageLoader
                        alt={ albumTitle + modalPhoto } 
                        src={`/images/photography/${albumTitle}/${images[modalPhoto]}`}/>
                    </div>
                    <div className={ modalPhoto < images.length -1  ? cssPicModal.imageGalleryButtons: cssPicModal.imageGalleryButtonsHidden  } onClick={()=>clickR()}>{`>`}</div>
                </div>
            </div>
    ): null;
}
export default PicModal;