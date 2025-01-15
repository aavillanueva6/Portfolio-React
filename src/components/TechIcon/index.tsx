import React from 'react';

const TechIcon: React.FC = ({ iconData }: { iconData: string }) => {
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
