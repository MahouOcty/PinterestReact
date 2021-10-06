import React, { useState } from 'react';

const SavePin = (props) => {

    const [hover, setHover] = useState("leave");
    const visible = props.visible ? "vsSave" : "hdSave";

    const onHover = () => {
        setHover("hover");
    }
    const onLeave = () => {
        setHover("leave");
    }
    
    return (
        <div style={{..._saveStyle[visible], ..._saveStyle[hover]}}
        onMouseEnter = {() => onHover()}
        onMouseLeave = {() => onLeave()}>
            Guardar
        </div>
    );
};

const _saveStyle = {
    vsSave: {
        height: "45px",
        width: "100px",
        position: "absolute",
        top: "12px",
        right: "12px",
        opacity: 1,
        display: 'flex',
        borderRadius: "30px",
        color: "white",
        justifyContent: "center",
        alignContent: "center",
        verticalAlign: "middle",
        lineHeight: "45px",
        cursor:"pointer",
        fontWeight: "bold"
    },
    hdSave: {
        display: "none"
    },
    leave: {
        backgroundColor: "#E60023"
    },
    hover: {
        backgroundColor: "#ad081b"
    }
}

export default SavePin;