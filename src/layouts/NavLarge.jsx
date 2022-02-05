import React from 'react';

import NavLink from '../components/NavLink';
import fryzlogo from '../img/fryzlogo.jpg'

import '../styles/NavLarge.module.scss';

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
      <NavLink title={link.title} key={link.title}/>
    )
  })

  return ( 
    <nav className="nav__large">
      <div className="nav__box1">
        {navLinksToDisplay}
      </div>
    </nav>
   );
}
 
export default NavLarge;