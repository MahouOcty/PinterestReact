import React from 'react';

const MobileHeader = () => {
    return (
        <div style={{..._headerStyle.header}}>
            <div style={{..._headerStyle.content}}>
                Para ti
            </div>
            <div style={{..._headerStyle.content}}>
                Hoy
            </div>
            <div style={{..._headerStyle.content}}>
                Illustration
            </div>
            <div style={{..._headerStyle.content}}>
                Bird Watching
            </div>
        </div>
    );
};

const _headerStyle = {
    header: {
        width: "100%",
        height: "65px",
        backgroundColor: "white",
        position: "fixed",
        zIndex: 20,
        alignItems: "center",
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap"
    },
    content: {
        display: "flex",
        fontWeight: "bold",
        position: "relative",
        margin: "10px",
        fontSize: "20px"
    }
}

export default MobileHeader;