import React from 'react';
import { Fragment } from 'react';
import MainProjCard from '../MainProjCard';
import SecondaryProjCard from '../SecondaryProjCard';
import '../../utils/script.js';

const projectData = require('../../utils/projectData.json');

const leadProj = projectData[0];
const secondaryProjectsData = projectData.slice(1);
// console.log(secondaryProjectsData);

const ProjectSection = () => {
  return (
    <>
      <div>PROJECT SECTION START</div>

      <div id="Projects" className="container">
        <div className="row">
          <h1 className="display-5 fw-bold fontScript-3 text-primary">
            Projects:
          </h1>
        </div>
        <MainProjCard project={leadProj} />
        {secondaryProjectsData.map((project, i) => {
          return project.name ? (
            <SecondaryProjCard
              key={`project-card-${i + 1}`}
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
      <div>PROJECT SECTION END</div>
    </>
  );
};

export default ProjectSection;
