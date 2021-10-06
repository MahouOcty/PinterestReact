import {React, useState} from 'react';
import {BiChevronDown} from 'react-icons/bi'

const HeaderOptions = () => {
    
    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }

    return (
        <div 
        style={{..._optionStyles.button, ..._optionStyles[hover]}}
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
            <BiChevronDown/>
        </div>
    );
};

const _optionStyles = {
    button: {
        height: "25px",
        width: "25px",
        borderRadius: "15px",
        color: "#767676",
        display: "flex",
        margin:"5px",
        right: "10px",
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


export default HeaderOptions;