import React from 'react';
import BurgerBtn from './components/BurgerBtn/BurgerBtn';
import NavMobile from './components/NavMobile/NavMobile';
import NavLarge from './components/NavLarge/NavLarge';

import './App.scss';

const App = () => {
  return ( 
    <>
      <NavMobile />
      <NavLarge />
    </>
   );
}
 
export default App;