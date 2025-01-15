import React from 'react';
import { Fragment } from 'react';

interface ContactDataType {
  contactMethods: Array<{
    text: string;
    link: string;
    description: string;
  }>;
}

const contactData: ContactDataType = require('../../utils/contactData.json');

const ContactSection: React.FC = () => {
  return (
    <>
      <div id='ContactMe' className='container text-primary'>
        <div className='row'>
          <h1 className='display-5 fw-bold fontSC text-primary'>Contact Me:</h1>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 col-12 col-lg-3'>
              {contactData.contactMethods.map((method, i) => {
                return (
                  <Fragment key={`contact-method-${i}`}>
                    <h5>{method.description}</h5>
                    <a href={method.link}>{method.text}</a>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
