import React from 'react';

interface LinkDataType {
  linkText: string;
  linkURL: string;
}

interface LinkButtonProps {
  linkData: LinkDataType;
}

const LinkButton: React.FC<LinkButtonProps> = ({ linkData }) => {
  return (
    <>
      <a
        href={linkData.linkURL}
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-primary'
      >
        {linkData.linkText}
      </a>
    </>
  );
};

export default LinkButton;
