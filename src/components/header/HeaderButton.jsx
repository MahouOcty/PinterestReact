import React, { useState } from 'react';

const HeaderButton = (props) => {

    const Content = props.content;
    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }

    return (
        <div 
        style={{..._buttonStyle.button, ..._buttonStyle[hover]}} 
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
            <Content/>
        </div>
    );
};

const _buttonStyle = {
    button: {
        height: "50px",
        width: "50px",
        borderRadius: "30px",
        color: "#767676",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "25px"
    },
    hover: {
        backgroundColor: "#f0f0f0"
    },
    leave: {
        backgroundColor: "white"
    }
}

export default HeaderButton;