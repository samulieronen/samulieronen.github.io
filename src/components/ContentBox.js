import React from 'react'
import Hashtag from './Hashtag'

const ContentBox = (props) => {
    return (
        <div className="content-box">
            <div className="project-textbox">
                <div className="project-header">
                    <a href={props.content.link} target="_blank" rel="noreferrer"><h3>{props.content.name}</h3></a><div className="gitlink"></div>
                </div>
                <p>{props.content.desc}</p>
                <Hashtag hashes={props.content.hash}/>
            </div>
        </div>
    );
}

export default ContentBox