import React from 'react';

import MobileLink from './MobileLink';

import './MobileLinks.module.scss';

const MobileLinks = ({isVisible, toggleMobileLinks}) => {

  const navClassNames = isVisible ? 'nav nav--active' : 'nav'
  
  const mobileLinksData = [
    {
      title: 'Strona główna',
      ref: '',
      delayTime: '0s'
    }, 
    {
      title: 'O nas',
      ref: '',
      delayTime: '.1s'
    },
    {
      title: 'Usługi',
      ref: '',
      delayTime: '.2s'
    },
    {
      title: 'Cennik',
      ref: '',
      delayTime: '.3s'
    },
    {
      title: 'Kontakt',
      ref: '',
      delayTime: '.4s'
    },
  ]

  const mobileLinksToDisplay = mobileLinksData.map(link => {
    return <MobileLink key={link.title} onClick={toggleMobileLinks} title={link.title} delayTime={link.delayTime} isVisible={isVisible}/>
  })


  return ( 
    <nav className={navClassNames}>
        <div className="nav__items">
          {mobileLinksToDisplay}
        </div>
    </nav>
  );
}
 
export default MobileLinks;