import React, { useState } from 'react'

import './ImageLoader.css'

const ImageLoader = (props) => {
    const [src, setSrc] = useState(props.small);
    const [blur, setBlur] = useState(true);

    const img = new Image()

    img.src = props.large;

    img.onload = () => {
        setBlur(false)
        setSrc(props.large)
    };

    return (
        <img className='imageloader'
            src={src}
            style={{
                filter: blur ? "blur(50px)" : "none",
                transition: blur ? "none" : "filter 0.5s ease-out"
            }}
            alt={props.alt}
        />
    )
}

export default ImageLoader


