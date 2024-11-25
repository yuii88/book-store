import React, { Component } from 'react';
import './App.css';
import data from './data/sample.json';
import v1Image from './static/images/v1.jpg';

const ImageComponent = ({ imageName }) => {
  try {
      const image = require(`./static/images/${imageName}`);
      return <img src={image} alt={imageName} />;
  } catch (error) {
      console.error("Image not found:", imageName);
      return <p>Image not found</p>;
  }
};



function App() {
  return (
       
    <img src={v1Image} alt="v1" />
  
  );


}

// export default App;
export default App;
