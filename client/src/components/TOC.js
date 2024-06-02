import React, { useState } from 'react';

const TOC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleTOC = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="toc-container mb-8 relative">
      <div className="relative flex items-center">
        <h2 className="toc-header bg-neutral-800 text-white p-4 rounded-tr-lg mb-0 font-bold flex-grow cursor-pointer" onClick={toggleTOC}>
          Table of Contents
        </h2>
        <button
          onClick={toggleTOC}
          className="text-white bg-neutral-800 p-2 rounded-br-lg rounded-tr-lg focus:outline-none"
        >
          {isOpen ? '−' : '+'}
        </button>
        {isOpen && <div className="absolute top-0 left-0 w-0.5 bg-neutral-800 h-full transform translate-y-full"></div>}
      </div>
      {isOpen && (
        <div className="relative">
          <div className="absolute top-0 left-0 w-0.5 bg-neutral-800 h-full translate-y-0.5"></div>
          <ul className="toc text-neutral-300 mt-4">
            <li className="mb-2 pl-2 relative"><a href="#introduction" className="hover:underline text-white">Introduction</a></li>
            <li className="mb-2 pl-2 relative"><a href="#weekly-workshop" className="hover:underline text-white">Weekly Workshop</a></li>
            <li className="mb-2 pl-2 relative"><a href="#competitions" className="hover:underline text-white">Competitions</a></li>
            <li className="mb-2 pl-2 relative"><a href="#other" className="hover:underline text-white">Other</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TOC;
