import React from 'react';
import TechIcon from '../TechIcon';

interface TechStackDataType {
  text: string;
  icons: string[];
}

interface TechStackSubCardProps {
  techStackData: TechStackDataType;
}

const TechStackSubCard: React.FC<TechStackSubCardProps> = ({
  techStackData,
}) => {
  return (
    <>
      <div className='col-6'>
        <div className='h-100 row justify-content-evenly'>
          <div
            className='card bg-transparent border-light mb-3'
            style={{ maxWidth: '18rem' }}
          >
            <div className='card-header text-light'>{techStackData.text}</div>
            <div className='card-body'>
              {techStackData.icons.map((iconData, i) => {
                return (
                  <TechIcon
                    key={`${techStackData.text}-icon-${i}`}
                    iconData={iconData}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStackSubCard;
