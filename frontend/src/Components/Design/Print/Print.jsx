import React from 'react'
import cssPrint from './print.module.css'
import { magList } from '../../../Dependencies/Design_Magazine';
import ImageLoader from '../../ImgLoader/imgLoader'

const IssueList = ({mag}) => {
    return(
        <div>
            <a rel="noopener noreferrer" target="_blank" href={magList[mag]['link']} >
                <div className={cssPrint.mags}> 
                <ImageLoader src={magList[mag]['image']} alt={magList[mag]['issue']}/>
                    <div className={cssPrint.imgDescription}><i>{magList[mag]['issue']}</i></div>
                </div>
            </a>
        </div>
    )
}

const Print = () =>{
    return (
        <div>
            <div className={cssPrint.artDirection}>Print</div>
            <div className={cssPrint.magGrid}>
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

export default Print;