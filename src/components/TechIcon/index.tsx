import React from 'react';

interface TechIconProps {
  iconData: string;
}

const TechIcon: React.FC<TechIconProps> = ({
  iconData,
}: {
  iconData: string;
}) => {
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
