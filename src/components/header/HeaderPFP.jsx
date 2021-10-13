import React, { useState } from 'react';

const HeaderPFP = () => {

    const [hover, setHover]  = useState("leave");

    const OnHover = () => {
        setHover("hover");
    }

    const OnLeave = () => {
        setHover("leave");
    }

    return (
        <div
        style={{..._pfpStyle.button, ..._pfpStyle[hover]}}
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
            <img
            src="https://icon-library.com/images/generic-user-icon/generic-user-icon-11.jpg"
            alt=""
            style={{..._pfpStyle.image}}/>
        </div>
    );
};

const _pfpStyle = {
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
    },
    image: {
        height: "50%",
        width: "50%",
        borderRadius: "15px"
    }
}

export default HeaderPFP;