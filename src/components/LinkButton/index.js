import React from 'react';

const LinkButton = ({ linkData }) => {
  return (
    <>
      <a
        href={linkData.linkURL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        {linkData.linkText}
      </a>
    </>
  );
};

export default LinkButton;
