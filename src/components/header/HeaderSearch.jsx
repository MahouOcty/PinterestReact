import {React, useState} from 'react';

const HeaderSearch = () => {
    
    const placeholder = `🔎︎ Buscar...`
    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }
    
    return (
        <>
            <input
            type ="text"
            style={{..._stylesSearch.textBox, ..._stylesSearch[hover]}}
            onMouseEnter={() => OnHover()}
            onMouseLeave={() => OnLeave()}
            placeholder ={placeholder} />
        </>
    );
};

const _stylesSearch = {
    textBox: {
        height: "50px",
        width: "66%",
        border: "0px",
        borderRadius: "30px",
        margin: "5px",
        display: "flex"
    },
    hover: {
        backgroundColor: "#e1e1e1"
    },
    leave: {
        backgroundColor: "#efefef"
    }
}

export default HeaderSearch;