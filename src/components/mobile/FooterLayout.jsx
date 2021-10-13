import React, { useState } from 'react';
import useWindowSize from '../useWindowsSize';

const FooterLayout = (props) => {

    const WindowSize = useWindowSize();
    const display = (WindowSize.width<=375) ? "mobile" : "other";

    const [show, setShow] = useState("show");

    const buttonsHover = (e) => {
        e.target.style.fill = 'black';
    }

    const noHover = (e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.fill = 'gray';
    }

    window.onscroll = () => {      
          // Movil
          if (window.pageYOffset >= 100) { //PageYOffset: distancia desde el punto inicial al desplazamiento 
            setShow("hide");
          } else {
            setShow("show");
            
          }
    
    }

    return (
        <div style={{ ..._stylesFooter.footer, ..._stylesFooter[show], ..._stylesFooter.display[display] }} >
            <button style={{ ..._stylesFooter.button }}>
                <svg onMouseEnter={buttonsHover} onMouseLeave={noHover} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 496 512" style={{ ..._stylesFooter.svg }}>
                    <path fill='gray' onMouseEnter={buttonsHover} onMouseLeave={noHover}
                        d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
                    />
                </svg>
            </button>
            <button style={{ ..._stylesFooter.button }}>
                <svg onMouseEnter={buttonsHover} onMouseLeave={noHover} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 496 512" style={{ ..._stylesFooter.svg }}>
                    <path fill='gray' onMouseEnter={buttonsHover} onMouseLeave={noHover}
                        d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                    />
                </svg>
            </button>
            <button style={{ ..._stylesFooter.button }}>
                <svg onMouseEnter={buttonsHover} onMouseLeave={noHover} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 496 512" style={{ ..._stylesFooter.svg }}>
                    <path fill='gray' onMouseEnter={buttonsHover} onMouseLeave={noHover}
                        d='M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'
                    />
                </svg>
            </button>
            <button style={{ ..._stylesFooter.button }}>
                <svg onMouseEnter={buttonsHover} onMouseLeave={noHover} xmlns='http://www.w3.org/2000/svg' viewBox="0 0 496 512" style={{ ..._stylesFooter.svg }}>
                    <path fill='gray' onMouseEnter={buttonsHover} onMouseLeave={noHover}
                        d='M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z'
                    />
                </svg>
            </button>
        </div>
    );
};

const _stylesFooter = {
    footer: {
        height: '40px',
        width: '50%',
        left: "50%",
        transform: "translateX(-50%)",
        position: 'fixed',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '20',
        borderRadius: '30px',
        backgroundColor: 'white',
        transition: "all 0.5s ease"
    },
    display: {
        mobile: {
            display: "flex"
        },
        other: {
            display: "none"
        }
    },

    show: {
        bottom: "20px"
    },
    hide: {
        bottom: "-80px"
    },
    button: {
        cursor: 'pointer',
        display: 'flex',
        backgroundColor: 'transparent',
        borderStyle: 'none',
        justifyContent: 'center',
        color: "#767676"
    },

    svg: {
        position: 'relative',
        width: '20px',
        height: '20px',
        padding: '8px',
        cursor: 'pointer',
        borderRadius:'50%'
    },
};

export default FooterLayout;