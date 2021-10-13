import React, { useState } from 'react';
import useWindowSize from '../useWindowsSize';

const MobileHeader = () => {
    const WindowsSize = useWindowSize();
    const display = (WindowsSize.width <= 375) ? "mobile" : "other";

    const [yaxis, setYaxis] = useState(window.scrollY);
    const [show, setShow] = useState("show");

    window.onscroll = () => {
        if(window.scrollY < yaxis || window.scrollY < 100){
            console.log(window.scrollY);
            setShow("show");
            setYaxis(window.scrollY);
        }
        else {
            setShow("hide");
            setYaxis(window.scrollY);
        }
    }

    return (


        <div style={{..._headerStyle.header, ..._headerStyle[show], ..._headerStyle.display[display]}}>
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
        overflow: "hidden",
        whiteSpace: "nowrap",
        transition: "all 0.5s ease"
    },
    show: {
        top: "0"
    },
    hide: {
        top: "-65px"
    },
    display: {
        mobile: {
            display: "flex"
        },
        other: {
            display: "none"
        }
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