import React from 'react';

function About({ text, image }) {
  const defaultImage = "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{text}</p>
    </aside>
  );
}

export default About;
