import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" text-white" style={{backgroundColor:'#4e4e4f'}}>
      <div className="container py-5">
        <div className="row">
          {/* Akhuwat Foundation Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Akhuwat Foundation</u>
            </h3>
            <p>
              The Akhuwat Foundation, established in 2001 
              by Dr. Amjad Saqib, is the world's largest 
              interest-free microfinance institution, 
              dedicated to alleviating poverty and 
              empowering communities in Pakistan. Our 
              journey began with a modest loan of Rs. 
              10,000 to a widow, and since then, we have 
              transformed the lives of millions through our 
              commitment to providing interest-free loans 
              and comprehensive support services.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="mb-4 text-white fw-bold">
              <u>Quick Links</u>
            </h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Contact Us – Swift Loans</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Success Story: Empowering Lives through Akhuwat Loan</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">Welcome to Akhuwat Loan – Pakistan's Leading Loan Provider</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-md-4 ">
            <h3 className="mb-4 text-white fw-bold">
              <u>Newsletter</u>
            </h3>
            <p>
              Join us this month as we explore the latest 
              trends in health, technology, and lifestyle. 
              Discover valuable tips to enhance your well-
              being and make informed choices for a 
              smarter, more fulfilling life!
            </p>
            <div className="input-group mt-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                aria-label="Email"
              />
              <button 
                className="btn btn-success" 
                type="button"
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-dark py-3 text-white">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="small">
      © Copyright Swift Loan Pakistan. All rights reserved. (APM Id : Webs_Info_875)
    </div>
    <div>
      <Link to="/disclaimer" className="me-3 small text-white text-decoration-none">Disclaimer</Link>
      <Link to="/privacy-policy" className="me-3 small text-white text-decoration-none">Privacy Policy</Link>
      <Link to="/terms-and-conditions" className="small text-white text-decoration-none">Terms and Conditions</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;