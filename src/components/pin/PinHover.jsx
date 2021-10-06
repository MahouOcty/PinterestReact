import React, { useState } from 'react';
import HoverButtons from './HoverButtons';
import SavePin from './SavePin';
import {BsThreeDots} from 'react-icons/bs';
import {FiShare} from 'react-icons/fi';


const PinHover = () => {
    const [visible, setVisibility] = useState(false);

    const onHover = () => {
        setVisibility(true);
    }
    
    const onLeave = () => {
        setVisibility(false);
    }
    
    const opacity = visible ? 'hover' : 'leave';

    return (
        <div 
        style={{..._hoverStyle.hover_container, ..._hoverStyle[opacity]}}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onLeave()}>
            <SavePin 
            visible = {visible}/>
            <HoverButtons
            visible={visible}
            content={FiShare}
            type="share"/>
            <HoverButtons
            visible={visible}
            content={BsThreeDots}
            type="info"/>
        </div>
    );
};

const _hoverStyle =  {
    hover_container: {
        height: "100%",
        width: "100%",
        borderRadius: "15px",
        zIndex: "2",
        display: "flex",
        cursor: "zoom-in",
        position: "absolute",
        top: "0px",
        justifyContent: "flex-end"
    },
    hover: {
        backgroundColor: "rgba(0, 0, 0, 0.25)"
    },
    leave: {
        backgroundColor: "rgba(0, 0, 0, 0)"
    }

}





export default PinHover;