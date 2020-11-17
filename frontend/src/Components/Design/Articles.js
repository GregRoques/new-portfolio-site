import React, { Component } from 'react'
import { articleList } from "./ArticleList"
import './Design.css'

const IssueList = ({art}) => {
    return(
        <div>
            <a rel="noopener noreferrer" target="_blank" href={articleList[art]['link']} >
                <div className="mags"> <img src={articleList[art]['image']} alt={articleList[art]['title']}/>
                    <div className="imgDescription">
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
                <div className="artDirection">Writing</div>
                <div className='magGrid'>
                    {
                        (Object.keys(articleList)).map((num, i) => {
                            if (Object.keys(articleList).length === (i+1)){isLoadedTwo()}
                            return(
                                <IssueList
                                key={i}
                                art={num}
                                />
                            )
                        })
                        
                    }

                </div>
                <div className='buttonAlign'>
                        <span><a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/document/d/1DC-jCkloiDcsfvOqXuUdJ-HMAchRf60jFP7xR_zLN98/edit'>
                            <button className="demoReadButtons">More Articles</button>
                        </a></span>
                    </div>
            </div>
        )
    }
}

export default Articles;