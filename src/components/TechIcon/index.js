import React from 'react';

const TechIcon = ({ iconData }) => {
  return (
    <>
      <i
        className={`${iconData} text-light`}
        style={{ fontSize: '2.5rem' }}
      ></i>
    </>
  );
};

export default TechIcon;
