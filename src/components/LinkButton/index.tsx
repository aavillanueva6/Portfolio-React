import React from 'react';

interface LinkDataType {
  linkText: string;
  linkURL: string;
}

const LinkButton: React.FC = ({ linkData }: { linkData: LinkDataType }) => {
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
