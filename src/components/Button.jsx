import React from 'react';

const Button = ({ name, isBeam = false, containerClass, href }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className='relative flex h-3 w-3'>
          <span className='btn-ping' />
          <span className='btn-ping_dot' />
        </span>
      )}
      <a href={href} className="inline-block w-full h-full">
        {name}
      </a>
    </button>
  );
};

export default Button;