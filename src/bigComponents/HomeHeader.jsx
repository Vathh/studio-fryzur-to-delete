import React from 'react';

import fryzlogo from '../img/fryzlogo.jpg'

import '../styles/HomeHeader.module.scss';

const HomeHeader = () => {
  return ( 
    <header id="home" className="header">
      <div className="wrapper">
          <div className="header__box1">
              <a href="index.html"><img src={fryzlogo} alt="Logo firmy - Studio fryzur. Urszula Kotowska." className="header__box1-logo"/></a>
          </div>        
          <div className="header__box2">
              <div className="header__box2-city">
                  <h2>Suwałki</h2>
                  <p>ul. Muzyczna 10</p>
                  <p><i className="fas fa-phone-alt"></i> 123 345 121</p>
              </div>
              <div className="header__box2-city">
                  <h2>Augustów</h2>
                  <p>ul. Żabia 5/3</p>
                  <p><i className="fas fa-phone-alt"></i> 123 345 121</p>
              </div>
          </div>
      </div>    
  </header> 
   );
}
 
export default HomeHeader;