import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

        <div class='footer-link-items'>
            <h2>About this site</h2>
            <Link to='#'>I built this website with ReactJS.
            </Link>
            <Link to='#'>
              (The site is still under completion.)
            </Link>
          </div>


          <div class='footer-link-items'>
            <h2>Brief Me</h2>
            <Link to='#'>Study at Aalto University since 2019 with "Digital System and Design" as
              my bachelor degree. I focus my study largely on Machine learning.
            </Link>
            <Link to='#'>
            </Link>
          </div>

          <div class='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Emails: </Link>
            <ul>
              <li color="#fff" className="list">tungnguyen21012000@gmail.com</li>
              <li>tung.t.nguyen@aalto.fi</li>
            </ul>
            <Link to='/'> </Link>
            
            {/* <Link to='/'>Phone Numbers: </Link>
            <ul>
              <li>090164219 (Vietnamese number)</li>
              <li>Currently not available (Finnish number)</li>
            </ul> */}

            <Link to='/'> </Link>
            <Link to='/'>More of my accounts below.</Link>
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TUNG NGUYEN
            </Link>
          </div>
          <div class='social-icons'>
            <a
              class='social-icon-link youtube'
              to='https://github.com/SoffWolf?tab=repositories'
              href='https://github.com/SoffWolf?tab=repositories'
              target='https://github.com/SoffWolf?tab=repositories'
              aria-label='Youtube'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/tung-nguyen-736154174/'
              to='https://www.linkedin.com/in/tung-nguyen-736154174/'
              target='https://www.linkedin.com/in/tung-nguyen-736154174/'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link facebook'
              to='https://www.facebook.com/tung.nguyenle.54'
              href='https://www.facebook.com/tung.nguyenle.54'
              target='https://www.facebook.com/tung.nguyenle.54'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>  
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
