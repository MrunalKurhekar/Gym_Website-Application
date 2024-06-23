import React from 'react';
import aboutimage from '../assets/about.png';

const About = () => {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt=''/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, minus corporis sit quasi autem qui assumenda possimus saepe sint quas eveniet non rem eaque error! Commodi exercitationem fugiat reiciendis tempora.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
