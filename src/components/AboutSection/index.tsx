import React from 'react';

interface ButtonType {
  text: string;
  logo: string;
  link: string;
}

interface TechStackType {
  text: string;
  icons: string[];
}

interface AboutDataType {
  text: string[];
  buttons: ButtonType[];
  techStack: TechStackType[];
}

const aboutData: AboutDataType = require('../../utils/aboutData.json');

const AboutSection: React.FC = () => {
  return (
    <>
      <div id='AboutMe' className='container'>
        <div className='row'>
          <h1 className='display-5 fw-bold fontSC text-primary'>About Me:</h1>
          {aboutData.text.map((paragraph, i) => {
            return <p key={`about-paragraph-${i}`}>{paragraph}</p>;
          })}
        </div>
        <div className='row justify-content-evenly'>
          {aboutData.buttons.map((button, i) => {
            return (
              <div key={`about-button-${i}`} className='col-3 text-center'>
                <a
                  href={button.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-dark'
                >
                  {button.text} <i className={button.logo}></i>
                </a>
              </div>
            );
          })}
        </div>
        <div className='row'>
          <div className='container-fluid'>
            <h5 className='card-title text-center'>Tech Stack</h5>
            <div className='row  justify-content-evenly'>
              {aboutData.techStack.map((stackItem, i) => {
                return (
                  <div
                    key={`techStack-bucket-${i}`}
                    className='col-md-3 col-12'
                  >
                    <div className='row justify-content-evenly h-100'>
                      <div className='card bg-dark mb-3 text-light'>
                        <div className='card-header text-center'>
                          {stackItem.text}
                        </div>
                        <div className='card-body d-flex flex-wrap justify-content-center align-items-center'>
                          {stackItem.icons.map((icon, i) => {
                            return (
                              <i
                                key={`${stackItem.text}-icon-${i}`}
                                className={icon}
                              ></i>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
