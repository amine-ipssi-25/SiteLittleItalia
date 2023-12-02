import React, { useState } from 'react';
import './index.css';
import entree1 from '../Menu/Asset/entrée1.jpg';
import entree2 from '../Menu/Asset/entrée2.jpg';
import tapas from './Asset/tapas.jpg';
import pizza from './Asset/pizza.jpg';
import pate1 from './Asset/tagliatelle.jpg';
import pate2 from './Asset/gruppomimo_maccheroni.jpg';
import gnocchi from './Asset/gnocchi.jpg'
import dessert1 from './Asset/tiramisu.jpeg'
import dessert2 from './Asset/panna-cota.jpg'
import dessert3 from './Asset/meringue.jpg'
import dessert4 from './Asset/dessert6.webp'

function Menu() {
  
    const [currentEntréeIndex, setCurrentEntréeIndex] = useState(0);
    const [currentPlatIndex, setCurrentPlatIndex] = useState(0);
    const [currentDessertIndex, setCurrentDessertIndex] = useState(0);

    const showEntréeSlide = (index) => {
    const slider = document.querySelector('.sliderentrée');
    const totalSlides = slider.children.length;

    if (index < 0) {
        setCurrentEntréeIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentEntréeIndex(0);
    } else {
      setCurrentEntréeIndex(index);
    }

    const translateValue = -currentEntréeIndex * 25 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
  };

  const showPlatSlide = (index) => {
    const slider = document.querySelector('.slidePlat');
    const totalSlides = slider.children.length;

    if (index < 0) {
      setCurrentPlatIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentPlatIndex(0);
    } else {
      setCurrentPlatIndex(index);
    }

    const translateValue = -currentPlatIndex * 25 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
  };

  const showDessertSlide = (index) => {
    const slider = document.querySelector('.slideDessert');
    const totalSlides = slider.children.length;

    if (index < 0) {
        setCurrentDessertIndex(totalSlides - 1);
    } else if (index >= totalSlides) {
      setCurrentDessertIndex(0);
    } else {
      setCurrentDessertIndex(index);
    }

    const translateValue = -currentDessertIndex * 25 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
  };


  const prevEntréeSlide = () => {
    showEntréeSlide(currentEntréeIndex - 1);
  };

  const nextEntréeSlide = () => {
    showEntréeSlide(currentEntréeIndex + 1);
  };

  const prevPlatSlide = () => {
    showPlatSlide(currentPlatIndex - 1);
  };

  const nextPlatSlide = () => {
    showPlatSlide(currentPlatIndex + 1);
  };

  const prevDessertSlide = () => {
    showDessertSlide(currentDessertIndex - 1);
  };

  const nextDessertSlide = () => {
    showDessertSlide(currentDessertIndex + 1);
  };

    return (
    <div id="titremenu">
        <div className="slider-container">
            <div className='Titre'>
                <h1>Menu</h1>
            </div>

            <div className='TexteEntrée'>
                <h1>Nos Entrées :</h1>
            </div>
                <div className="sliderentrée">
                 <img src={tapas} alt="Image 4" />                     
                 <img src={entree1} alt="Image 1" />
                 <img src={entree2} alt="Image 2" id='img3' />
                               
                </div>
                
                <button className="arrow prev" onClick={prevEntréeSlide}>❮</button>
                <button className="arrow next" onClick={nextEntréeSlide}>❯</button>
        </div>
        <div className="slider-container">

            <div className='TextePlat'>
                <h1>Nos Plats :</h1>
            </div>
                <div className="slidePlat">                
                 <img src={pizza} alt="Image 1" />
                 <img src={gnocchi} alt="Image 4"/> 
                 <img src={pate2} alt="Image 3" />       
                </div>
                
                <button className="arrow left" onClick={prevPlatSlide}>❮</button>
                <button className="arrow right" onClick={nextPlatSlide}>❯</button>
        </div>

        <div className="slider-container">

            <div className='TextePlat'>
                <h1>Nos Desserts :</h1>
            </div>
                <div className="slideDessert">                
                 <img src={dessert3} alt="Image 3" /> 
                 <img src={dessert2} alt="Image 2" /> 
                 <img src={dessert4} alt="Image 4"/>
                 <img src={dessert1} alt="Image 1" />     
                </div>
                
                <button className="arrow l" onClick={prevDessertSlide}>❮</button>
                <button className="arrow r" onClick={nextDessertSlide}>❯</button>
        </div>
    </div>

  );
}

export default Menu;
