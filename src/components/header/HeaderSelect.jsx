import React, { useState } from 'react';

const HeaderSelect = (props) => {
    const Content = props.content
    const selected = props.selected;

    const [hover, setHover] = useState(selected ? "selected" : "leave");

    

    const OnHover = () => {
        if(!selected){
            setHover("hover")
        }
        else {
            setHover("selected")
        }
    }

    const OnLeave = () => {
        if (!selected) {
            setHover("leave")
        }
        else {
            setHover("selected")
        }
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
    },
    selected: {
        backgroundColor: "black",
        color: "white"
    }
}

export default HeaderSelect;