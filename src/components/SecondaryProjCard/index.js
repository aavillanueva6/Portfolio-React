import React from 'react';
import LinkButton from '../LinkButton';
import TechStackSubCard from '../TechStackSubCard';

const SecondaryProjCard = ({ project, projID }) => {
  console.log(project, projID);
  return (
    <>
      <div className="row">
        <div className="card my-2 pb-2 bg-dark text-center text-light">
          <div className="card-header fs-1">{project.name}</div>
          <div className="row g-0">
            <div className="col-md-6">
              <img
                loading="lazy"
                src={project.image.url}
                className="img-fluid rounded-start projCardImg"
                alt={project.image.alt}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{project.shortDescription}</h5>
                <p className="card-text fst-italic fs-6">
                  {project.disclaimer}
                </p>
                {project.projectLinks.map((linkData, i) => {
                  return (
                    <LinkButton
                      key={`proj-${projID}-link-${i}`}
                      linkData={linkData}
                    />
                  );
                })}

                <div className="card-footer text-light">
                  <h5 className="card-title text-center">Tech Stack</h5>
                  <div className="row">
                    {project.techStack.map((techStackData, i) => {
                      return techStackData.icons[0] ? (
                        <TechStackSubCard
                          key={`proj-${projID}-TS-${i}`}
                          techStackData={techStackData}
                        />
                      ) : (
                        <></>
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
