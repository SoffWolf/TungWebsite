import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/y2mate.com - Typing Code Background video_480p.mp4' autoPlay loop muted />
      <h1>Hi!</h1>
      <p>I am Tung,</p>
      <p>and this is my portfolio.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          url='/sign-up'
        >
          About me  
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          url='https://drive.google.com/file/d/14zuGOkrWXqYQzay4bl9iTKRQpQ29pENb/view?usp=sharing'
          target='https://drive.google.com/file/d/14zuGOkrWXqYQzay4bl9iTKRQpQ29pENb/view?usp=sharing'
        >
          My CV <i className='fas fa-file-download' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
