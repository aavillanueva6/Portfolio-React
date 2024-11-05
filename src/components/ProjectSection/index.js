import React from 'react';

const projectData = require('../../utils/projectData.json');

console.log(projectData);
const leadProj = projectData[0];
console.log(leadProj);
const SecondaryProjectsData = projectData.slice(1);
console.log(leadProj);
console.log(projectData);
console.log(SecondaryProjectsData);

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
        <div className="row">
          <div className="card my-2 bg-dark text-center text-light">
            <div className="card-header fs-1">WETF Radio</div>
            <div className="card-body">
              <h5 className="card-title fs-5">Non-profit Jazz Radio Station</h5>

              <img
                loading="lazy"
                src="https://aav-react-radio.s3.us-west-2.amazonaws.com/WETFBannerLightsCity.png"
                className="card-img-bottom projCardImg"
                alt="..."
              />
              <p className="card-text fst-italic fs-6">
                Note: This app is hosted on a free onrender.com tier. Please
                allow a few moments to spin up.
              </p>
              <a
                href="https://react-radio.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Deployed App
              </a>
              <a
                href="https://github.com/aavillanueva6/ReactRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Github Repo
              </a>
            </div>
            <div className="card-footer text-light">
              <h5 className="card-title text-center">Tech Stack</h5>
              <div className="row">
                <div className="col-6">
                  <div className="h-100 row justify-content-evenly">
                    <div
                      className="card bg-transparent border-light mb-3"
                      style={{ maxWidth: '18rem' }}
                    >
                      <div className="card-header">Front End</div>
                      <div className="card-body">
                        <i className="devicon-react-original codeIcon"></i>
                        <i className="devicon-javascript-plain codeIcon"></i>
                        <i className="devicon-bootstrap-plain codeIcon"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="h-100 row justify-content-evenly">
                    <div
                      className="card bg-transparent border-light mb-3"
                      style={{ maxWidth: '18rem' }}
                    >
                      <div className="card-header">Back End</div>
                      <div className="card-body">
                        <i className="devicon-mongodb-plain codeIcon"></i>
                        <i className="devicon-graphql-plain codeIcon"></i>
                        <i className="devicon-nodejs-plain codeIcon"></i>
                        <i className="devicon-express-original codeIcon"></i>
                        <i className="devicon-amazonwebservices-original codeIcon"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">myrecipes</div>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src="./assets/images/projects/myrecipes.png"
                  className="img-fluid rounded-start projCardImg"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Social Media for Foodies</h5>
                  <p className="card-text fst-italic fs-6">
                    Note: This app is hosted on a free onrender.com tier. Please
                    allow a few moments to spin up.
                  </p>
                  <a
                    href="https://aav-myrecipes.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/myrecipes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row">
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Front End</div>
                            <div className="card-body d-flex flex-wrap h-100 justify-content-center align-items-center">
                              <i className="devicon-react-original codeIcon"></i>
                              <i className="devicon-javascript-plain codeIcon"></i>
                              <i className="devicon-css3-plain codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Back End</div>
                            <div className="card-body d-flex flex-wrap h-100 justify-content-center align-content-around align-items-center gap-0">
                              <i className="devicon-mongodb-plain codeIcon"></i>
                              <i className="devicon-graphql-plain codeIcon"></i>
                              <i className="devicon-nodejs-plain codeIcon"></i>
                              <i className="devicon-express-original codeIcon"></i>
                              <i className="devicon-amazonwebservices-original codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">move</div>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">Outdoor activity forum</h5>
                  <p className="card-text fst-italic fs-6">
                    Note: This app is hosted on a free Heroku tier. Please allow
                    a few moments to spin up.
                  </p>
                  <a
                    href="https://uwb-move.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/Move"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row justify-content-evenly">
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Front End</div>
                            <div className="card-body">
                              <i className="devicon-bootstrap-plain codeIcon"></i>
                              <i className="devicon-javascript-plain codeIcon"></i>
                              <i className="devicon-handlebars-plain codeIcon"></i>
                              <i className="devicon-css3-plain codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Back End</div>
                            <div className="card-body">
                              <i className="devicon-mysql-plain codeIcon"></i>
                              <i className="devicon-sequelize-plain codeIcon"></i>

                              <i className="devicon-nodejs-plain codeIcon"></i>
                              <i className="devicon-express-original codeIcon"></i>
                              <i className="devicon-socketio-original codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src="./assets/images/projects/move_cropped.png"
                  className="card-img-bottom projCardImg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">Technology Blog</div>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src="./assets/images/projects/techBlog.png"
                  className="img-fluid rounded-start projCardImg"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    A blog for users to discuss the latest in the tech world
                  </h5>
                  <p className="card-text fst-italic fs-6">
                    Note: This app is hosted on a free Heroku tier. Please allow
                    a few moments to spin up.
                  </p>
                  <a
                    href="https://aav-tech-blog.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/TechBlog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row">
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Front End</div>
                            <div className="card-body d-flex flex-wrap h-100 justify-content-center align-items-center">
                              <i className="devicon-bulma-plain codeIcon"></i>
                              <i className="devicon-javascript-plain codeIcon"></i>
                              <i className="devicon-handlebars-plain codeIcon"></i>
                              <i className="devicon-css3-plain codeIcon"></i>
                              <i className="devicon-sass-original codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Back End</div>
                            <div className="card-body d-flex flex-wrap h-100 justify-content-center align-content-around align-items-center gap-0">
                              <i className="devicon-mysql-plain codeIcon"></i>
                              <i className="devicon-sequelize-plain codeIcon"></i>
                              <i className="devicon-nodejs-plain codeIcon"></i>
                              <i className="devicon-express-original codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">e-Commerce Back End</div>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    Application demonstrates an e-commerce back end with a
                    user's ability to manipulate data on a mySQL server
                  </h5>
                  {/*<!-- <p className="card-text fst-italic fs-6">
                  Note: App is deployed on a free version of Heroku. Please
                  allow a few moments for page to load.
                </p> -->*/}
                  <a
                    href="https://www.youtube.com/watch?v=NtHvQKAxLkw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Video Demo
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/ECommerceBackEnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row justify-content-evenly">
                      {/*<!-- <div className="col-6">
                      <div className="h-100 row justify-content-evenly">
                        <div
                          className="card bg-transparent border-light mb-3"
                          style={{maxWidth: '18rem'}}
                        >
                          <div className="card-header">Front End</div>
                          <div className="card-body">
                            <i className="devicon-bootstrap-plain codeIcon"></i>
                            <i className="devicon-javascript-plain codeIcon"></i>
                            <i className="devicon-handlebars-plain codeIcon"></i>
                            <i className="devicon-css3-plain codeIcon"></i>
                          </div>
                        </div>
                      </div>
                    </div> -->*/}
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Back End</div>
                            <div className="card-body">
                              <i className="devicon-mysql-plain codeIcon"></i>
                              <i className="devicon-sequelize-plain codeIcon"></i>
                              <i className="devicon-nodejs-plain codeIcon"></i>
                              <i className="devicon-express-original codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <iframe
                  loading="lazy"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NtHvQKAxLkw"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">
              National Park Service Hike Search
            </div>
            <div className="row g-0">
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src="./assets/images/projects/NPSHikeSearchTool.png"
                  className="img-fluid rounded-start projCardImg"
                  alt="..."
                />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    Tool to search the NPS for hiking activities at your
                    favorite park
                  </h5>
                  <p className="card-text fst-italic fs-6"></p>
                  <a
                    href="https://aavillanueva6.github.io/NPSHikeSearchTool/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/NPSHikeSearchTool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row justify-content-center">
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Front End</div>
                            <div className="card-body">
                              <i className="devicon-javascript-plain codeIcon"></i>
                              <i className="devicon-html5-plain codeIcon"></i>
                              <i className="devicon-css3-plain codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*<!-- <div className="col-6">
                      <div className="h-100 row justify-content-evenly">
                        <div
                          className="card bg-transparent border-light mb-3"
                          style={{maxWidth: '18rem'}}
                        >
                          <div className="card-header">Back End</div>
                          <div className="card-body">
                            <i className="devicon-mysql-plain codeIcon"></i>
                          </div>
                        </div>
                      </div>
                    </div> -->*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card my-2 pb-2 bg-dark text-center text-light">
            <div className="card-header fs-1">Weather Dashboard</div>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    Find the five day forecast for your favorite city
                  </h5>
                  {/* <!-- <p className="card-text fst-italic fs-6">
                  Note: This app is hosted on a free Heroku tier. Please allow a
                  few moments to spin up.
                </p> -->*/}
                  <a
                    href="https://aavillanueva6.github.io/WeatherDashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Deployed App
                  </a>
                  <a
                    href="https://github.com/aavillanueva6/WeatherDashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Github Repo
                  </a>
                  <div className="card-footer text-light">
                    <h5 className="card-title text-center">Tech Stack</h5>
                    <div className="row justify-content-evenly">
                      <div className="col-6">
                        <div className="h-100 row justify-content-evenly">
                          <div
                            className="card bg-transparent border-light mb-3"
                            style={{ maxWidth: '18rem' }}
                          >
                            <div className="card-header">Front End</div>
                            <div className="card-body">
                              <i className="devicon-bootstrap-plain codeIcon"></i>
                              <i className="devicon-javascript-plain codeIcon"></i>
                              <i className="devicon-html5-plain codeIcon"></i>
                              <i className="devicon-css3-plain codeIcon"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*  <!-- <div className="col-6">
                      <div className="h-100 row justify-content-evenly">
                        <div
                          className="card bg-transparent border-light mb-3"
                          style={{maxWidth: '18rem'}}
                        >
                          <div className="card-header">Back End</div>
                          <div className="card-body">
                            <i className="devicon-mysql-plain codeIcon"></i>
                            <i className="devicon-sequelize-plain codeIcon"></i>

                            <i className="devicon-nodejs-plain codeIcon"></i>
                            <i className="devicon-express-original codeIcon"></i>
                            <i className="devicon-socketio-original codeIcon"></i>
                          </div>
                        </div>
                      </div>
                    </div> -->*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  loading="lazy"
                  src="./assets/images/projects/weatherDashboard.png"
                  className="img-fluid rounded-start projCardImg"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>PROJECT SECTION END</div>
    </>
  );
};

export default ProjectSection;
