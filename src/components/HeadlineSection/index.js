import React from 'react';

const headlineData = require('../../utils/headlineData.json');

const HeadlineSection = () => {
  return (
    <>
      <div className="container-fluid vh-100 py-5 bg-dark align-content-center">
        <div className="row align-content-center h-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="row align-items-end">
                  <h1 className="display-5 fw-bold fontSC text-light">
                    {headlineData.firstName}
                  </h1>
                </div>
                <div className="row align-items-end">
                  <h1 className="display-5 fw-bold fontSC text-light mt-n4">
                    {headlineData.lastName}
                  </h1>
                </div>
                <p className="col-md-8 fs-4 text-secondary">
                  {headlineData.headlineText[0]}
                  <br />
                  {headlineData.headlineText[1]}
                </p>
              </div>
              <div className="col-4">
                <img
                  loading="eager"
                  src="https://aav-myawsbucket.s3.us-west-2.amazonaws.com/portfolioImages/AV_Logo_Light.svg"
                  alt="AV logo"
                  width="140"
                  height="140"
                  className="d-block customFadeOut fadeInEffect"
                  id="AVLogo"
                />
              </div>
            </div>

            <div className="container-fluid">
              <div
                className="row justify-content-evenly customFadeOut fadeInEffect"
                role="group"
                aria-label="Basic outlined example"
              >
                {headlineData.buttons.map((button, i) => {
                  return (
                    <a
                      key={`headline-section-button-${i}`}
                      href={button.link}
                      role="button"
                      className="btn btn-outline-light col-auto"
                    >
                      {button.text}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadlineSection;
