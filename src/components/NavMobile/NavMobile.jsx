import React, {useState} from 'react';

import MobileLinks from '../MobileLinks/MobileLinks';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

const NavMobile = () => {

  const [isMobileLinksVisible, setIsMobileLinksVisible] = useState(false);

  const handleBurgerBtnClick = () => setIsMobileLinksVisible(!isMobileLinksVisible)

  console.log(isMobileLinksVisible);
  

  return ( 
    <>
      <BurgerBtn onClick={handleBurgerBtnClick}/>
      <MobileLinks isVisible={isMobileLinksVisible}/>
    </>
   );
}
 
export default NavMobile;