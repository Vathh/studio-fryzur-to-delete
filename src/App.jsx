import React from 'react';

import BurgerBtn from './components/BurgerBtn/BurgerBtn';
import NavMobile from './components/NavMobile/NavMobile';
import NavLarge from './components/NavLarge/NavLarge';
import HomeHeader from './components/HomeHeader/HomeHeader';
import Welcome from './components/Welcome/Welcome';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

import './App.scss';

const App = () => {
  return ( 
    <>
      <NavMobile />
      <NavLarge />
      <HomeHeader />
      <main>
        <Welcome />
        <AboutUs />
        <Contact />
      </main>
    </>
   );
}
 
export default App;