import React from "react";


const HomePage = () => {
  return (
    <div style={{border:3}}>
    <iframe
      width="100%"
      height="480"
      src={`https://www.youtube.com/embed/O4lE4B6_4kc`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="video"
    />
  </div>
  );
};

export default HomePage;

