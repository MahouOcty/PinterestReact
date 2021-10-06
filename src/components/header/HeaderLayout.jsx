import React from 'react';
import HeaderButton from './HeaderButton';
import {BsFillBellFill, BsFillChatDotsFill} from 'react-icons/bs';
import HeaderPFP from './HeaderPFP';
import HeaderOptions from './HeaderOptions';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from './HeaderLogo';

const HeaderLayout = () => {
  return <div 
  style={{..._headerStyle.header}}>
    <HeaderLogo/>
    <HeaderSearch/>
    <HeaderButton
    content={BsFillBellFill}/>
    <HeaderButton
    content={BsFillChatDotsFill}/>
    <HeaderPFP/>
    <HeaderOptions/>
  </div>;
};

const _headerStyle = {
  header: {
    top: "0px",
    height: "65px",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    position: "fixed",
    zIndex:1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
}

export default HeaderLayout;
