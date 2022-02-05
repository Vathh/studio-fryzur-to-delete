import React from 'react';

import Welcome from '../bigComponents/Welcome';
import AboutUs from '../bigComponents/AboutUs';
import Contact from '../bigComponents/Contact';

const HomePage = () => {
  return ( 
    <>              
      <Welcome />
      <AboutUs id="aboutus"/>
      <Contact />        
    </>
   );
}
 
export default HomePage;
