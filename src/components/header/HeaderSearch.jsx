import {React, useState} from 'react';
import { FaSearch } from 'react-icons/fa'

const HeaderSearch = () => {
    
    const placeholder = `Buscar..`
    const [hover, setHover] = useState("leave");

    const OnHover = () => {
        setHover("hover")
    }

    const OnLeave = () => {
        setHover("leave")
    }
    
    return (
        <div style={{..._stylesSearch.container, ..._stylesSearch[hover] }}
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => OnLeave()}>
         <p style={{..._stylesSearch.search}}><FaSearch/></p>
         <input
            type ="text"
            style={{..._stylesSearch.textBox, ..._stylesSearch[hover]}}
            placeholder ={placeholder} />
        </div>
    );
};

const _stylesSearch = {
    
    container: {
        height: "45px",
        flex: 1,
        border: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-star",
        borderRadius: "30px"
    },
    textBox: {
        height: "40px",
        flex: "1",
        border: "0px",
        display: "flex",
        margin: "10px 0px",
        borderRadius: "30px",
        fontSize: "15px",
        color: "#404040"
    },
    search: {
        margin: "15px",
        color: "#909090"
    },
    hover: {
        backgroundColor: "#e1e1e1"
    },
    leave: {
        backgroundColor: "#efefef"
    }
}

export default HeaderSearch;