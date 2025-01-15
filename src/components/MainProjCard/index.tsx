import React from 'react';
import LinkButton from '../LinkButton';
import TechStackSubCard from '../TechStackSubCard';

interface LinkDataType {
  linkText: string;
  linkURL: string;
}

interface ProjectDataType {
  image: {
    alt: string;
    src: string;
  };
  name: string;
  shortDescription: string;
  projectLinks: Array<LinkDataType>;
  techStack: Array<{
    text: string;
    icons: string[];
  }>;
  disclaimer?: string;
}

const MainProjCard: React.FC = ({ project }: { project: ProjectDataType }) => {
  return (
    <>
      <div className='row'>
        <div className='card my-2 bg-dark text-center text-light'>
          <div className='card-header fs-1'>{project.name}</div>
          <div className='card-body'>
            <h5 className='card-title fs-5'>{project.shortDescription}</h5>

            <img
              loading='lazy'
              src={project.image.src}
              className='card-img-bottom projCardImg'
              alt={project.image.alt}
            />
            <p className='card-text fst-italic fs-6'>{project.disclaimer}</p>
            {project.projectLinks.map((linkData: LinkDataType, i) => {
              return (
                // @ts-ignore
                <LinkButton key={`mainProjLink-${i}`} linkData={linkData} />
              );
            })}
          </div>
          <div className='card-footer text-light'>
            <h5 className='card-title text-center'>Tech Stack</h5>
            <div className='row'>
              {project.techStack.map((techStackData, i) => {
                return (
                  <TechStackSubCard
                    key={`mainProjTS-${i}`}
                    //@ts-ignore
                    techStackData={techStackData}
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

export default MainProjCard;
