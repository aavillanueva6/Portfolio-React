import React from 'react';

const LinkButton = ({ linkData }) => {
  return (
    <>
      <div>LINK BUTTON START</div>
      <a
        href={linkData.linkURL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        {linkData.linkText}
      </a>
      <div>LINK BUTTON END</div>
    </>
  );
};

export default LinkButton;
