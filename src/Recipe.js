import React from 'react';

const Recipe = ({ title, type, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{type}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
