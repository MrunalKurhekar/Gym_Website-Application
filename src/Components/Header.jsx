import React from 'react';
import banner from '../assets/banner.png';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div id='main' style={headerStyle}>
      <div className='header-heading'>
        <h2>STEP UP YOUR</h2>
        <h1><span>FITNESS</span> WITH US</h1>
        <p className='details'>Build Your Body & Fitness With Professional Touch</p>
        <div className='header-btns'>
          <a href='#' className='header-btn'>JOIN US</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
