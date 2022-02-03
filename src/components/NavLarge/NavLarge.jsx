import React from 'react';

import NavLink from './NavLink';
import fryzlogo from '../../img/fryzlogo.jpg'

import './NavLarge.module.scss';

const NavLarge = () => {

  const navLinksData = [    
      {
        title: 'Strona główna',
        ref: '',
      }, 
      {
        title: 'O nas',
        ref: '',
      },
      {
        title: <img src={fryzlogo} alt="Logo firmy - Studio fryzur. Urszula Kotowska."/>,
        ref: '',
      },
      {
        title: 'Usługi',
        ref: '',
      },
      {
        title: 'Cennik',
        ref: '',
      },
      {
        title: 'Kontakt',
        ref: '',
      },    
  ]

  const navLinksToDisplay = navLinksData.map(link => {
    return (
      <NavLink title={link.title}/>
    )
  })

  return ( 
    <nav class="nav__large">
      <div class="nav__box1">
        {navLinksToDisplay}
      </div>
    </nav>
   );
}
 
export default NavLarge;