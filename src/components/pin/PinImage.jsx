import React from 'react';
import PinHover from './PinHover';

const PinImage = (props) => {
    return (
        <div  style={{..._stylesImage.container,..._stylesImage[props.size]}}>
            <img src={props.image} alt='' style={{..._stylesImage.image}}/>
            <PinHover/>
        </div>
    );
}

const _stylesImage = {
    container: {
        display: "flex",
        position: "relative"
    },
    small: {
        height: '85%',
        width: '100%',
        borderRadius: "15px"
    },
    medium: {
        height: '87%',
        width: '100%',
        borderRadius: "15px"
    },
    large: {
        height: '90%',
        width: '100%',
        borderRadius: "15px"
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: '15px',
        position: "relative",
        zIndex: "1",
        top: "0px"
    }
}

export default PinImage;
