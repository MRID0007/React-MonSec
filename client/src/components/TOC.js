import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TOC = ({ items }) => {
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
            {items.map((item, index) => (
              <li key={index} className="mb-2 pl-2 relative">
                <a href={item.href} className="hover:text-purple-500">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

TOC.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TOC;
