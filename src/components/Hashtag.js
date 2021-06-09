import React from 'react'

const Hashtag = (props) => {
    return (
        <div className="hashtag-wrapper">
            {props.hashes.map(hash => <p className="hash">{hash}</p>)}
        </div>
    );
}

export default Hashtag