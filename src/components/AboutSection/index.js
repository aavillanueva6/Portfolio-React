import React from 'react';

const AboutSection = () => {
  return (
    <>
      <div>ABOUT SECTION START</div>
      <div id="AboutMe" className="container">
        <div className="row">
          <h1 className="display-5 fw-bold fontScript-3 text-primary">
            About Me:
          </h1>
          <p>
            I'm a Full-Stack Developer with a background in Chemical
            Engineering. I have always been interested in technology, and
            decided to leverage my engineering background in a new way to
            complete a Full-Stack Web Development Boot Camp through the
            University of Washington.
          </p>
          <p>
            When I am not working, you can catch me camping, hiking, or cycling.
          </p>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-3 text-center">
            <a
              href="https://github.com/aavillanueva6/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Github <i className="devicon-github-original codeIcon"></i>
            </a>
          </div>
          <div className="col-3 text-center">
            <a
              href="https://www.linkedin.com/in/alejandro-a-villanueva/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              linkedIn <i className="devicon-linkedin-plain codeIcon"></i>
            </a>
          </div>
          <div className="col-3 text-center">
            <a
              href="./assets/files/VillanuevaAlejandroResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Resume <i className="fa-regular fa-file codeIcon"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid">
            <h5 className="card-title text-center">Tech Stack</h5>
            <div className="row text-light justify-content-evenly">
              <div className="col-md-3 col-12">
                <div className="row justify-content-evenly h-100">
                  <div className="card bg-dark mb-3">
                    <div className="card-header text-center">Front End</div>
                    <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                      <i className="devicon-javascript-plain codeIcon mx-1 my-1"></i>
                      <i className="devicon-css3-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-html5-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-react-original-wordmark codeIcon"></i>
                      <i className="devicon-bootstrap-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-bulma-plain codeIcon mx-1 my-1"></i>
                      <i className="devicon-handlebars-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-sass-original codeIcon mx-1 my-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="row justify-content-evenly h-100">
                  <div className="card bg-dark mb-3">
                    <div className="card-header text-center">Back End</div>
                    <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                      <i className="devicon-express-original-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-nodejs-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-mysql-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-sequelize-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-mongodb-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-amazonwebservices-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-socketio-original-wordmark codeIcon mx-1 my-1"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12">
                <div className="row justify-content-evenly h-100">
                  <div className="card bg-dark mb-3">
                    <div className="card-header text-center">Tools</div>
                    <div className="card-body d-flex flex-wrap justify-content-center align-items-center">
                      <i className="devicon-bash-plain codeIcon mx-1 my-1"></i>
                      <i className="devicon-git-plain-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-heroku-original-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-jest-plain codeIcon mx-1 my-1"></i>
                      <i className="devicon-npm-original-wordmark codeIcon mx-1 my-1"></i>
                      <i className="devicon-vscode-plain-wordmark codeIcon mx-1 my-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>ABOUT SECTION END</div>
    </>
  );
};

export default AboutSection;
