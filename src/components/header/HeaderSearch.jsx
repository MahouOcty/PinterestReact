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
        height: "45px",
        flex: "1",
        border: "0px",
        borderRadius: "30px",
        display: "flex",
        margin: "10px"
    },
    hover: {
        backgroundColor: "#e1e1e1"
    },
    leave: {
        backgroundColor: "#efefef"
    }
}

export default HeaderSearch;