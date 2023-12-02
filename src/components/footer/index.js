import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className='Leftfooter'>
        <h2>Accueil</h2>
        <h2>Nos restaurants</h2>
        <h2>Contact</h2>
      </div>
      <div className='contact'>
        <ul>
          {/* Utilisation d'une iframe pour intégrer la carte Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed/v1/view?center=40.7194023,-73.997963&zoom=15&key=AIzaSyAXHVDSDpg001dQZTJVF0_sKZWWmTl3Utg"
            allowFullScreen
          ></iframe>
        </ul>
      </div>
      <div className='icone'>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#fc4e4e" }} />
        </a>
        <a href='https://www.tiktok.com/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTiktok} size="xl" style={{ color: "#fc4e4e" }} />
        </a>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} size="xl" style={{ color: "#fc4e4e" }} />
        </a>
      </div>
    </footer>
  );
}
export default Footer