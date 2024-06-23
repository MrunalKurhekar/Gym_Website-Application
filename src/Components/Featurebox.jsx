import React from 'react';

const Featurebox = (props) => {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt=''/>
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum architecto est minus hic perspiciatis repellendus sit voluptatum minima et, iure corporis. Quis ducimus commodi aspernatur! Consequatur eligendi alias harum?
        </p>
      </div>
    </div> 
  );
}

export default Featurebox;
