import React from 'react';

import colouringCardHomepage from '../../img/colouring-card-homepage.jpg'

import './AboutUsCard.module.scss';

const AboutUsCard = ({number, title, text, photo}) => {

  const classe = `aboutus__card card-${number}`;

  console.log(photo);

  return ( 
    <div className={classe} style={{backgroundImage: `url(${photo})`}}>          
      <div className="aboutus__card-shadow">
          <h3 className="aboutus__card-title">{title}</h3>
          <p className="aboutus__card-text">{text}</p>
      </div>             
    </div>
   );
}
 
export default AboutUsCard;
