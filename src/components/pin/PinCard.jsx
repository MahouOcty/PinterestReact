import React from 'react';
import PinImage from './PinImage';
import PinUser from './PinUser';


const PinCard = (props) => {
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
     <PinImage
     image={props.image}
     size={props.size}/>
     <PinUser/>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
  },
  small: {
    gridRowEnd: 'span 30',
  },
  medium: {
    gridRowEnd: 'span 42',
  },
  large: {
    gridRowEnd: 'span 57',
  }
};

export default PinCard;
