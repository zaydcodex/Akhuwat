import React from 'react';
import CountUp from 'react-countup';
import myImg from '../Images/Loan Scheme.jpg'

const AkhuwatBusinessLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1100px", margin: "0 auto", fontSize: '22px' }}>
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">Akhuwat Business Loan: Giving Pakistani entrepreneurs the tools they need to succeed</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        Pakistani business owners can get the money they need to start or grow their companies through the Akhuwat Business Loan. It can be hard to start or grow a business, especially if you don't have enough money. People who can't get loans from traditional banks can use Akhuwat's interest-free loans as a great option. The Foundation's job is to give Pakistani business owners the money they need to grow their companies, become financially independent, and make the country's economy stronger.
        </p>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
          
Akhuwat's loan program can help you make your business dreams come true, whether you want to open a store, start a service-based business, or put money into small-scale manufacturing.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">What's Good About an Akhuwat Business Loan</h2>
          <p>Interest-free financing: Don't have to worry about the heavy load of high interest rates that often slow down business growth.</p>
          <ul>
            <li><strong>No Collateral Needed:</strong> You can easily get money without putting your own things at risk.</li>
            <li><strong>Flexible Repayment Options:</strong> Repayment plans that are made to fit the cash flow of your business, which makes it easier to keep track of payments.</li>
            <li><strong>Flexible Repayment Terms:</strong> Loan repayments are customized to suit your business’s cash flow, making it easier to stay on track.</li>
            <li><strong>Helping Small Businesses:</strong> by giving creators the tools they need to make jobs, grow local economies, and improve the well-being of their communities.</li>
            <li><strong>Promoting Financial Inclusion: </strong>  Giving underserved groups access to financial resources, which leads to a more fair and inclusive economy.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh8ZVpgulBzdmhEa3jmI39-P5_YD2ZT4M1Ng&s"
            alt="Business Loan Support"
            className="img-fluid wm-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "75%" }}>
            <p className="mb-0 text-center">SUPPORTING ENTREPRENEURS</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={14} duration={3} suffix="K+" />
</h2>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Easy Steps to Follow to Get an Akhuwat Business Loan</h2>
          <p>
          Make sure you are eligible.
          </p>
          <ul>
            <li><strong>Get your papers ready.:</strong> Get important papers together, like your Computerised National Identity Card (CNIC), proof that you live where you say you do, and information about your business.</li>
            <li><strong>Send in your application:</strong> The main Akhuwat website makes it easy to apply online. Our team is ready to help you with any paperwork and walk you through the whole application process.</li>
            <li><strong>Authorisation and Payment:</strong> The loan amount will be sent to you right away after your application is reviewed and accepted.</li>
            <li><strong>Paying back:</strong> Pay back your loan in manageable payments as agreed upon in the payback plan.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6  p-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Zn3S1v3vDK7fL8KlEpX2Zk3D_SmTuOAh8Q&s"
            alt="Entrepreneur Support"
            className="img-fluid wm-100 h-80"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "84%" }}>
            <p className="mb-0 text-center">BUSINESSES SUPPORTED</p>
            <h2 className="display-4 text-center fw-bold">
  <CountUp end={8000} duration={3} suffix="+" />
</h2>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Why Should You Get an Akhuwat Business Loan?</h2>
          <p>
            Akhuwat Business Loans are designed to help business owners at all stages, from making a dream a reality to growing a business that is already up and running. Akhuwat removes financial barriers by providing interest-free loans with no security needed. This gives people the power to become truly financially independent.
          </p>
          <p>
            Akhuwat's support for small businesses helps communities grow by making work available, boosting local economies, and making it easier for families across Pakistan to make a living.
          </p>
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Sign up for the Akhuwat Movement Right Now!</h2>
          <p>
            Are you ready to build your business even more? Akhuwat Business Loans can help you make your dreams come true. You can start the process of becoming a great business owner right now by going to the Akhuwat branch closest to you or applying online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatBusinessLoan;
