import React from 'react';

import './BurgerBtn.module.scss';

const BurgerBtn = ({onClick}) => {
  return (
    <button className="burger-btn" onClick={onClick}>
        <div className="burger-btn__box">
            <div className="burger-btn__bars"></div>
        </div>
    </button>
  );
}
 
export default BurgerBtn;