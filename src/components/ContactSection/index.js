import React from 'react';

const ContactSection = () => {
  return (
    <>
      <div>CONTACT SECTION START</div>
      <div id="ContactMe" className="container text-primary">
        <div className="row">
          <h1 className="display-5 fw-bold fontScript-3">Contact Me:</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-12 col-lg-3">
              <h5>email</h5>
              <a href="mailto:aavillanueva6@gmail.com">
                aavillanueva6@gmail.com
              </a>
              <h5>phone</h5>
              <a href="tel:+15742107562">574.210.7562</a>
            </div>
            {/*<!-- contact form.  Currently not connected to anything.  Add back in once I have code to connect it -->*/}
            {/*<!-- <div className="col-md-8 col-12 col-lg-9">
            <div className="row">
              <div className="col-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Name"
                  />
                  <label for="floatingName">Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  id="contactFormTextArea"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-auto mt-2">
                <button
                  id="contFormSubmitBtn"
                  className="btn btn-primary"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </div> -->*/}
            {/*<!-- End of contact form -->*/}
          </div>
        </div>
      </div>
      <div>CONTACT SECTION END</div>
    </>
  );
};

export default ContactSection;
