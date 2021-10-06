import React from "react";

const PinUser = () => {
    
    return (
        <div style={{..._stylesPinUser.items}}>
            <img src="https://icon-library.com/images/generic-user-icon/generic-user-icon-11.jpg" alt="" style={{..._stylesPinUser.icon}}></img>
             Lorem Ipsum
        </div>
    )
}

const _stylesPinUser = {
    items: {
        height: '25px',
        width: '100%',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'flex-start',
        margin: '15px 0px'
    },
    icon: {
        height: '25px',
        width: '25px',
        borderRadius: '30px',
        margin: '15px'
    }
}

export default PinUser;