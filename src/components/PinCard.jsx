import React from 'react';

const PinCard = (props) => {
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    ></div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'red',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

export default PinCard;
