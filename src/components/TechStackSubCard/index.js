import React from 'react';
import TechIcon from '../TechIcon';

const TechStackSubCard = ({ techStackData }) => {
  return (
    <>
      <div>TECH STACK SUB CARD START</div>
      <div className="col-6">
        <div className="h-100 row justify-content-evenly">
          <div
            className="card bg-transparent border-light mb-3"
            style={{ maxWidth: '18rem' }}
          >
            <div className="card-header">{techStackData.text}</div>
            <div className="card-body">
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
      <div>TECH STACK SUB CARD END</div>
    </>
  );
};

export default TechStackSubCard;
