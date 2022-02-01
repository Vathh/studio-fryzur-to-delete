import React from 'react';

import './BurgerBtn.module.scss';

const BurgerBtn = () => {
  return (
    <button class="burger-btn">
        <div class="burger-btn__box">
            <div class="burger-btn__bars"></div>
        </div>
    </button>
  );
}
 
export default BurgerBtn;