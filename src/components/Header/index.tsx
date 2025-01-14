import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <header className='sticky-top bg-dark'>
        <nav className='navbar navbar-light navbar-expand-lg bg-success invisible customFadeIn'>
          <div className='container-fluid justify-content-between'>
            <a className='navbar-brand' href='#'>
              <img
                loading='eager'
                src='https://aav-myawsbucket.s3.us-west-2.amazonaws.com/portfolio/images/AV_Logo.svg'
                alt='AV logo'
                width='40'
                height='40'
                className='d-inline-block align-text-top'
                id='AVLogo'
              />
              <span className='fontSC fontPrimary px-1rem' id='headerName'>
                Alejandro Villanueva
              </span>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarNav'
            >
              <div className='navbar-nav'>
                <a className='nav-link fontSC' href='#Projects'>
                  Projects
                </a>
                <a className='nav-link fontSC' href='#AboutMe'>
                  About Me
                </a>
                <a className='nav-link fontSC' href='#ContactMe'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
