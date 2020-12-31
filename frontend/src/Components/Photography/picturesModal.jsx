import React from 'react';
import cssPicModal from './photography.module.css'

const PicModal = ({state, clickL, clickR, pictureDisplayToggle, preventDragHandler}) =>{
    const {modalShow, modalPhoto, images, albumTitle} = state;
    return modalShow? (
        <div className= { cssPicModal.photoModal } >
                <div className={ cssPicModal.closePhotoModal } onClick={()=> pictureDisplayToggle()}>x</div>
                <div className ={ cssPicModal.photoContent}>
                    { modalPhoto > 0 ?
                        <div className={ cssPicModal.imageGalleryButtons } onClick={()=>clickL()}>{`<`}</div>    
                        : <div className={cssPicModal.imageGalleryButtonsHidden }>{`<`}</div>
                    }
                    
                    <div className={ cssPicModal.sliderContainer } onContextMenu={preventDragHandler} onDragStart={preventDragHandler}>
                        <img alt={ albumTitle + modalPhoto } src={`/images/photography/${albumTitle}/${images[modalPhoto]}` }/>
                    </div>
                    { modalPhoto < images.length -1  ?
                        <div className={ cssPicModal.imageGalleryButtons } onClick={()=>clickR()}>{`>`}</div>
                        : <div className={cssPicModal.imageGalleryButtonsHidden }>{`>`}</div>
                    }
                </div>
            </div>
    ): null;
}
export default PicModal;