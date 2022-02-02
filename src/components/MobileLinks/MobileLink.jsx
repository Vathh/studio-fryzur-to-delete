import React from 'react';

import './MobileLinks.module.scss'

const MobileLink = ({onClick, title, delayTime, isVisible}) => {

  return (  
    <a className='nav__item' style={isVisible ? {animation: `navItemsAnimation 1s ${delayTime} both`} : {animation: 'none'}} onClick={onClick}>{title}</a>
  );
}
 
export default MobileLink;