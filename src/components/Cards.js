import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Click on the project to see it in more detail!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/racklet_white.png'
              text='Racklet: Build a real data center from Rasberry Pies.'
              label='Jan 2019 - Still ongoing'
              path='https://github.com/luxas/special-computing-machine'
            />
            
            <CardItem
              src='images/favourgiver.png'
              text='Favour Giver: A mobile app connecting disabled people with the people who want to help.'
              label='December 2020 - Jan 2021'
              path='https://github.com/SoffWolf/Favor-Giver'
            />
            <CardItem
                src='images/Screenshot from 2021-01-10 20-56-32.png'
                text='Rhymez Da Lyricz: Turn a normal passage into rap lyrics full of rhymes with React.js, REST API, and online dictionary.'
                label='Suns Out Hacks Out 2020'
                path='https://github.com/SoffWolf/Rhymez-Da-Lyricz'
              />
          </ul>
            
            <ul className='cards__items'>
            
            <CardItem
              src='images/trafficSimulator.jpg'
              text='Traffic simulator: Build a traffic simulator with C++.'
              label='July 2020 - September 2020'
              path='https://github.com/SoffWolf/Traffic-Simulator'
            />
            <CardItem
                src='images/Untitled-2-01.jpg'
                text='Founder at VSA - Vietnamese Students at Aalto: a page and a group on Facebook that connects Vietnamese community at Aalto.'
                label='June 2020 - Present'
                path='https://www.facebook.com/vietnamesestudentsatAalto'
              />
            <CardItem
              src='images/fabric.jpg'
              text='Low-resolution gesture-recognition touchpad on fabric with capacitive sensing and rule-based method.'
              label='Nov 2019 - March 2020'
              // path='#'
            />
            
            
            
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='images/parking-dial.jpg'
              text='Auto parking dial with Arduino.'
              label='October 2019 - December 2019'
              // path='#'
            />
            <CardItem
              src='images/classicpainting.jpeg'
              text='Atelay: A marketplace website for artists.'
              label='Under construction.'
              // path='#'
            />
            <CardItem
              src='images/IMG_2843.JPG'
              text='Robodnic Central-Vietnam 2018: 3rd place'
              label='July 2018'
              // path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
