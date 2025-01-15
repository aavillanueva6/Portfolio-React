import React from 'react';
import TechIcon from '../TechIcon';

interface TechStackDataType {
  text: string;
  icons: string[];
}

const TechStackSubCard: React.FC = ({
  techStackData,
}: {
  techStackData: TechStackDataType;
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
                    //@ts-ignore
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
