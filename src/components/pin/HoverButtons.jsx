import {React, useState }from 'react';

const HoverButtons = (props) => {
    const Content = props.content;

    const visible = props.visible ? "vsbutton" : "hdbutton";

    const [hover, setHover] = useState("leave");

    const onHover = () => {
        setHover("hover");
    }

    const onLeave = () => {
        setHover("leave");
    }
    
    return (
        <div style={{..._btnsStyle[visible], ..._btnsStyle[props.type], ..._btnsStyle[hover]}} onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()}>
            <Content/>
        </div>
    );
};

const _btnsStyle = {
    vsbutton: {
        height: "30px",
        width: "30px",
        position: "absolute",
        backgroundColor: "white",
        display: "flex",
        borderRadius: "20px",
        bottom: "0px",
        margin: "12px",
        cursor: "pointer",
        color: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    hdbutton: {
        display: "none"
    },
    info: {
        right: "0"
    },
    share: {
        right: "42px"
    },
    hover: {
        opacity: 1
    },
    leave: {
        opacity: 0.85
    }

}

export default HoverButtons;