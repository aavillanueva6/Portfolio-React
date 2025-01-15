import React from 'react';
import { Fragment } from 'react';
import LinkButton from '../LinkButton';
import TechStackSubCard from '../TechStackSubCard';

interface LinkDataType {
  linkText: string;
  linkURL: string;
}

interface ProjectType {
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

const SecondaryProjCard: React.FC = ({
  project,
  projID,
}: {
  project: ProjectType;
  projID: number;
}) => {
  return (
    <>
      <div className='row'>
        <div className='card my-2 pb-2 bg-dark text-center text-light'>
          <div className='card-header fs-1'>{project.name}</div>
          <div className='row g-0'>
            <div className='col-md-6'>
              <img
                loading='lazy'
                src={project.image.src}
                className='img-fluid rounded-start projCardImg'
                alt={project.image.alt}
              />
            </div>
            <div className='col-md-6'>
              <div className='card-body'>
                <h5 className='card-title'>{project.shortDescription}</h5>
                <p className='card-text fst-italic fs-6'>
                  {project.disclaimer}
                </p>
                {project.projectLinks.map((linkData, i) => {
                  return (
                    <LinkButton
                      key={`proj-${projID}-link-${i}`}
                      //@ts-ignore
                      linkData={linkData}
                    />
                  );
                })}

                <div className='card-footer text-light'>
                  <h5 className='card-title text-center'>Tech Stack</h5>
                  <div className='row justify-content-evenly'>
                    {project.techStack.map((techStackData, i) => {
                      return techStackData.icons[0] ? (
                        <TechStackSubCard
                          key={`proj-${projID}-TS-${i}`}
                          //@ts-ignore
                          techStackData={techStackData}
                        />
                      ) : (
                        <Fragment key={`null-proj-${projID}-TS-${i}`}>
                          {/*this ternary allows me to leave the template in the project data json and still not render anything*/}
                        </Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryProjCard;
