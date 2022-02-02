import React, {useState} from 'react';

import MobileLinks from '../MobileLinks/MobileLinks';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

const NavMobile = () => {

  const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);

  const toggleMobileLinks = () => setIsMobileLinksVisible(!isMobileLinksVisible)  

  return ( 
    <>
      <BurgerBtn toggleMobileLinks={toggleMobileLinks} />
      <MobileLinks isVisible={isMobileLinksVisible} toggleMobileLinks={toggleMobileLinks}/>
    </>
   );
}
 
export default NavMobile;