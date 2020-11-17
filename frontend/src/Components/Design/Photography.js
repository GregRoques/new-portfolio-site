import React, {Component} from "react";
import "./Design.css";
import musicPhotos from '../../Dependencies/Design_MusicPhotos';

// ======================================== Slider Images, set "i" = 1, Slider Render

const musicPhotosLength= (Object.keys(musicPhotos)).length

// Slider Render
const Slider = ({ currentNum, clickL, clickR, preventDefaultHander }) =>{
    return(
        <div>
            <div className="artDirection">Photography</div>
            <div className='photoContent'>
                <div onClick={()=>clickL()} className="picButtons buttonLeft">{`<`}</div>
                <div className='sliderContainer' onContextMenu={ preventDefaultHander } onDragStart={ preventDefaultHander }>
                    <img src={musicPhotos[currentNum]['image']} alt={musicPhotos['band']}/>
                </div>
                <div onClick={()=>clickR()}  className="picButtons buttonRight">{`>`}</div>
            </div>
            <div className='picTextAlign'>
                <a rel="noopener noreferrer" target={musicPhotos[currentNum]['target']}  href={musicPhotos[currentNum]['website']} alt={musicPhotos[currentNum]['band']} >
                    {musicPhotos[currentNum]['band']}
                </a>
            </div>
        </div>
    )
}

// ================================================================================ Class Extends Component

class Photography extends Component{

    state ={
        imageNum: 1
    }

    leftClick = () =>{
        const i = this.state.imageNum;
        i--
        if(i<1){
            i = musicPhotosLength
        }
        this.setState({
            imageNum: i
        })
    }

    rightClick = () =>{
        const i = this.state.imageNum;
        i++
        if(i>musicPhotosLength){
            i = 1
        }
        this.setState({
            imageNum: i
        })
    }

    preventDragHandler = (e) => {
        e.preventDefault();
      }

// ============================================ Render

    render(){
        return(
            <div className="fadeIn">
                <Slider 
                currentNum = {this.state.imageNum}
                clickL = {this.leftClick}
                clickR = {this.rightClick}
                preventDefaultHander = { this.preventDragHandler }
                />
            </div>
        )
    }
}
export default Photography;