import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      <PinCard size='small' image='https://picsum.photos//250/260'/>
      <PinCard size='medium' image='https://picsum.photos//250/330'/>
      <PinCard size='large' image='https://picsum.photos//250/440'/>
      
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
    zIndex: 0,
    top: "55px"
  },
};

export default PinterestLayout;
