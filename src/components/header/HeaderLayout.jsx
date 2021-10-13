import React from 'react';
import HeaderButton from './HeaderButton';
import {BsFillBellFill, BsFillChatDotsFill} from 'react-icons/bs';
import HeaderPFP from './HeaderPFP';
import HeaderOptions from './HeaderOptions';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from './HeaderLogo';
import HeaderSelect from './HeaderSelect';
import useWindowSize from '../useWindowsSize';


const HeaderLayout = () => {
  
  const WindowsSize = useWindowSize();

  const iPhoneX = (WindowsSize.width>375) ? "show" : "hide";

  return <div 
  style={{ ..._headerStyle[iPhoneX], ..._headerStyle.header,}}>
    <HeaderLogo/>
    <HeaderSelect
    content="Inicio"/>
    <HeaderSelect
    content="Hoy"/>
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
    position: "fixed",
    zIndex:1,
    alignItems: "center"
  },
  show: {
    display: "flex",
    justifyContent: "stretch"
  },
  hide: {
    display: "none"
  }
}

export default HeaderLayout;
