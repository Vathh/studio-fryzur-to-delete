import React from 'react';

import ContactCity from './ContactCity';

import contactBackground from '../../img/contact-background.jpg'

import './Contact.module.scss';

const Contact = () => {

  const citiesData = [
    {
      name: 'Augustów',
      street: 'ul. Żabia 5/3',
      postCode: '16-300 Augustów',
      phone: '+48 512 123 123'
    },
    {
      name: 'Suwałki',
      street: 'ul. Muzyczna 10',
      postCode: '16-400 Suwałki',
      phone: '+48 512 123 123'
    }
  ]

  const citiesToShow = citiesData.map(city => {
    return <ContactCity name={city.name} street={city.street} postCode={city.postCode} phone={city.phone}/>
  })

  return ( 
    <section id="contact" className="section contact" style={{backgroundImage: `url(${contactBackground})`}}>
        <div className="contact__shadow"></div>
        <div className="wrapper">
            <h2 className="section__header">Kontakt</h2>

            <div className="contact__city">
                <h3 className="contact__city-name">Augustów</h3>
            </div>
            <div className="contact__box">
                <div className="contact__box-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3 className="contact__box-item-title">Adres</h3>
                    <p className="contact__box-item-text">ul. Żabia 5/3 <br/> 16-300 Augustów</p>
                </div>
                <div className="contact__box-item">
                    <i className="fas fa-phone-square"></i>
                    <h3 className="contact__box-item-title">Rezerwacje</h3>
                    <a className="contact__box-item-phone" href="tel:+48512123123">TEL : <br/> +48 512 123 123</a>
                </div>
                <div className="contact__box-item wide">
                    <h3 className="contact__box-item-title">Godziny otwarcia</h3>
                    <p className="contact__box-item-text">Poniedziałek - Piątek <br/> 10:00 - 18:00</p>
                    <p className="contact__box-item-text">Sobota<br/> 10:00 - 14:00</p>                        
                </div>
            </div>

            <div className="contact__city">
                <h3 className="contact__city-name">Suwałki</h3>
            </div>
            <div className="contact__box">
                <div className="contact__box-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3 className="contact__box-item-title">Adres</h3>
                    <p className="contact__box-item-text">ul. Muzyczna 10 <br/> 16-400 Suwałki</p>
                </div>
                <div className="contact__box-item">
                    <i className="fas fa-phone-square"></i>
                    <h3 className="contact__box-item-title">Rezerwacje</h3>
                    <a className="contact__box-item-phone" href="tel:+48512123123">TEL : <br/> +48 512 123 123</a>
                </div>
                <div className="contact__box-item wide">
                    <h3 className="contact__box-item-title">Godziny otwarcia</h3>
                    <p className="contact__box-item-text">Poniedziałek - Piątek <br/> 10:00 - 18:00</p>
                    <p className="contact__box-item-text">Sobota<br/> 10:00 - 14:00</p>                        
                </div>
            </div>
        </div>
    </section>
   );
}
 
export default Contact;