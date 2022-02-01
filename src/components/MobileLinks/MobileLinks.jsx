import React from 'react';

import './MobileLinks.module.scss';

const MobileLinks = ({isVisible}) => {

  const navClassNames = isVisible ? 'nav nav--active' : 'nav'
  console.log(isVisible);

  return ( 
    <nav className={navClassNames}>
        <div className="nav__items">
            <a href="index.html#home" className="nav__item">Strona główna</a>
            <a href="index.html#aboutus" className="nav__item">O nas</a>
            <a href="services.html" className="nav__item">Usługi</a>
            <a href="pricelist.html" className="nav__item">Cennik</a>
            <a href="index.html#contact" className="nav__item">Kontakt</a>
        </div>
    </nav>
  );
}
 
export default MobileLinks;