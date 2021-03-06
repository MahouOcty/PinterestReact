import {React, useState} from 'react';
import { BsPinterest } from 'react-icons/bs';

const HeaderLogo = () => {
    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }

    return (
        <div 
        style={{..._logoStyle.button, ..._logoStyle[hover]}} 
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
           <BsPinterest/>
        </div>
    );
};

const _logoStyle = {
    button: {
        height: "50px",
        width: "50px",
        borderRadius: "30px",
        color: "#e60023",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "25px",
        marginLeft: "15px"
    },
    hover: {
        backgroundColor: "#f0f0f0"
    },
    leave: {
        backgroundColor: "white"
    }
}

export default HeaderLogo;