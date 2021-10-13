import React from 'react';
import PinImage from './PinImage';


const PinCard = (props) => {
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
     <PinImage
     image={props.image}
     size={props.size}/>
     <div style={{..._stylesPinCard.pin_text}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus malesuada lectus.
     </div>
     <div style={{..._stylesPinCard.pin_user}}>
        <img src="https://icon-library.com/images/generic-user-icon/generic-user-icon-11.jpg" alt="" style={{..._stylesPinCard.icon}}></img>
          Lorem Ipsum
    </div>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    
  },
  pin_text: {
    textOverflow: "ellipsis",
    fontWeight: "bold",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    margin: "7px 0px"
  },
  pin_user: {
    height: '25px',
    width: '100%',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'flex-start',
    margin: '5px 0px'
  },
  icon: {
    height: '25px',
    width: '25px',
    borderRadius: '30px',
    marginRight: '15px'
  },
  small: {
    gridRowEnd: 'span 32',
  },
  medium: {
    gridRowEnd: 'span 42',
  },
  large: {
    gridRowEnd: 'span 57',
  }
};

export default PinCard;
