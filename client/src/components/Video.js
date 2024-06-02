import React from 'react';

const Video = () => (
  <div className="flex justify-center my-8">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/BnJ31tEuZtM"
      title="Monash Cybersecurity Club (MonSec) - Information Technology | Clubs and Societies"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

export default Video;
