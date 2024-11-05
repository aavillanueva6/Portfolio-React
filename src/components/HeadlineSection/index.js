import React from 'react';

const HeadlineSection = () => {
  return (
    <>
      <div>HEADLINE SECTION START</div>
      <div className="container-fluid vh-100 py-5 bg-dark align-content-center">
        <div className="row align-content-center h-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <div className="row align-items-end">
                  <h1 className="display-5 fw-bold fontSC text-light">
                    Alejandro
                  </h1>
                </div>
                <div className="row align-items-end">
                  <h1 className="display-5 fw-bold fontSC text-light mt-n4">
                    Villanueva
                  </h1>
                </div>
                <p className="col-md-8 fs-4 text-secondary">
                  I'm a Full-Stack Web Developer. <br />I am excited to use my
                  engineering background to find creative solutions to
                  development problems.
                </p>
              </div>
              <div className="col-4">
                <img
                  loading="eager"
                  src="./assets/images/logo/AV_Logo_Light.svg"
                  alt="AV logo"
                  width="140"
                  height="140"
                  className="d-block customFadeOut"
                  id="AVLogo"
                />
              </div>
            </div>

            <div className="container-fluid">
              <div
                className="row justify-content-evenly customFadeOut"
                role="group"
                aria-label="Basic outlined example"
              >
                <a
                  href="#Projects"
                  role="button"
                  className="btn btn-outline-light col-auto"
                >
                  Projects
                </a>

                <a
                  href="#AboutMe"
                  role="button"
                  className="btn btn-outline-light col-auto"
                >
                  About
                </a>
                <a
                  href="#ContactMe"
                  role="button"
                  className="btn btn-outline-light col-auto"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>HEADLINE SECTION END</div>
    </>
  );
};

export default HeadlineSection;
