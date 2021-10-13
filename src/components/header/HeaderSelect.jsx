import React, { useState } from 'react';

const HeaderSelect = (props) => {
    const Content = props.content

    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }

    return (
        <div 
        style={{..._SelectStyles.select, ..._SelectStyles[hover]}}
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
            {Content}
        </div>
    );
};

const _SelectStyles = {
    select: {
        height: "50px",
        padding: "0 20px",
        color: "#000000",
        borderRadius: "30px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    hover: {
        backgroundColor: "#f0f0f0"
    },
    leave: {
        backgroundColor: "white"
    }
}

export default HeaderSelect;