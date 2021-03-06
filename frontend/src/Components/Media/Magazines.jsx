import React from 'react'
import cssDesign from './media.module.css'
import { magList } from '../../Dependencies/Design_Magazine';
import ImageLoader from '../ImgLoader/imgLoader';

const IssueList = ({mag}) => {
    return(
        <div>
            <a rel="noopener noreferrer" target="_blank" href={magList[mag]['link']} >
                <div className={cssDesign.mags}> 
                <ImageLoader src={magList[mag]['image']} alt={magList[mag]['issue']}/>
                    <div className={cssDesign.imgDescription}><i>{magList[mag]['issue']}</i></div>
                </div>
            </a>
        </div>
    )
}

const Magazines = () =>{
    return (
        <div>
            <div className={cssDesign.artDirection}>Design</div>
            <div className={cssDesign.magGrid}>
                {(Object.keys(magList)).map((num,i) => {
                    return(
                        <IssueList
                        key={i}
                        mag={num}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Magazines;