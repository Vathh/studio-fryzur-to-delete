import React from 'react';

import BurgerBtn from './components/BurgerBtn/BurgerBtn';
import NavMobile from './components/NavMobile/NavMobile';
import NavLarge from './components/NavLarge/NavLarge';
import HomeHeader from './components/HomeHeader/HomeHeader';

import './App.scss';

const App = () => {
  return ( 
    <>
      <NavMobile />
      <NavLarge />
      <HomeHeader />
    </>
   );
}
 
export default App;