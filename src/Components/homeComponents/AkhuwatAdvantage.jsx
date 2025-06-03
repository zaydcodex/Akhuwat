import React from 'react';

const AkhuwatAdvantage = () => {
  return (
    <div className="container-fluid py-5" style={{ maxWidth: '100%' }}>
      <h1 className="text-center mb-5 display-4 fw-light">The Good Things About Akhuwat</h1>
      
      <div className="d-flex justify-content-center">
        <div className="row mx-auto" style={{ width: '85%', maxWidth: '1200px' }}>
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">A History of Trust</h2>
                <p className="card-text">
                The Akhuwat Foundation has created a safe and easy-to-use loan program that needs very little paperwork. With loan limits that are meant to be within reach for most people, the initiative has earned a lot of support and trust across Pakistan, adding to Akhuwat's reputation for dependability.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">Proof of<br /> Trustworthiness</h2>
                <p className="card-text">
                The Akhuwat Foundation has created a lending program that is reliable, easy to use, and requires very little paperwork. With loan amounts that are meant to be affordable for most people, the initiative has earned a lot of support and trust across Pakistan, adding to Akhuwat's reputation for dependability.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 px-3 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body text-center p-4">
                <h2 className="card-title mb-3 fw-bold">Putting the customer first</h2>
                <p className="card-text">
                Your satisfaction is our top priority. Our experienced team is committed to providing personalized support, clear communication, and exceptional service every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatAdvantage;