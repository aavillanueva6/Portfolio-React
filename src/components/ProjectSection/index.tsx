import React from 'react';
import { Fragment } from 'react';
import MainProjCard from '../MainProjCard';
import SecondaryProjCard from '../SecondaryProjCard';

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

const projectData: ProjectDataType[] = require('../../utils/projectData.json');

const leadProj = projectData[0];
const secondaryProjectsData = projectData.slice(1);

const ProjectSection: React.FC = () => {
  return (
    <>
      <div id='Projects' className='container'>
        <div className='row'>
          <h1 className='display-5 fw-bold fontSC text-primary'>Projects:</h1>
        </div>
        {/*@ts-ignore*/}
        <MainProjCard project={leadProj} />
        {secondaryProjectsData.map((project, i) => {
          return project.name ? (
            <SecondaryProjCard
              key={`project-card-${i + 1}`}
              //@ts-ignore
              project={project}
              projID={i + 1}
            />
          ) : (
            <Fragment key={`null-Secondary-project-${i + 1}`}>
              {/*this ternary allows me to leave the template in the project data json and still not render anything*/}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ProjectSection;
