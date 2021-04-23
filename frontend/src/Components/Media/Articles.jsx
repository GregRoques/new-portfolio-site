import React from 'react'
import { articleList } from "../../Dependencies/Design_ArticleList";
import cssDesign from './media.module.css';
import ImageLoader from '../ImgLoader/imgLoader';

const IssueList = ({art}) => {
    return(
        <div>
            <a rel="noopener noreferrer" target="_blank" href={articleList[art]['link']} >
                <div className={cssDesign.mags}> 
                    <ImageLoader src={articleList[art]['image']} alt={articleList[art]['title']}/>
                    <div className={cssDesign.imgDescription}>
                        – {articleList[art]['category']} –
                        <br/>
                        <i>{articleList[art]['title']}</i>
                    </div>
                </div>
            </a>
        </div>
    )
}

const Articles = ({isLoadedTwo}) => {
        return (
            <div>
                <div className={cssDesign.artDirection}>Writing</div>
                <div className={cssDesign.magGrid}>
                    {
                        (Object.keys(articleList)).map((num, i) => {
                            return(
                                <IssueList
                                key={i}
                                art={num}
                                />
                            )
                        })
                        
                    }

                </div>
                <div className={cssDesign.buttonAlign}>
                        <span><a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1DC-jCkloiDcsfvOqXuUdJ-HMAchRf60jFP7xR_zLN98/edit'>
                            <button className={cssDesign.demoReadButtons}>More Articles</button>
                        </a></span>
                    </div>
            </div>
        )
    }


export default Articles;