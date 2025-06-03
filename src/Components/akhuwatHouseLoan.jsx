
import React from 'react';
import CountUp from 'react-countup';
import FirstOne from '../Images/House Loan.jpg';
import SecOne from '../Images/For house loan.jpg';


const AkhuwatHouseLoan = () => {
  return (
    <div className="container-fluid px-4 py-4" style={{ maxWidth: "1000px", margin: "0 auto", fontSize:'22px' }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3">You can make your dream home come true with an Akhuwat</h1>
        <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
        A lot of people want to own their dream home, but the high cost of standard mortgages makes it seem impossible for many. The Akhuwat Housing Loan is a simple, interest-free option made just for people who need it the most.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Thanks to Akhuwat's low-cost, interest-free home loans,</h2>
          <p>
          Many people in Pakistan who thought they could never own their own home can now. Akhuwat can help you make your dream home come true, whether you want to buy a new one or fix up the one you already have.
          </p>
          <ul>
            <li>No Need for Security: Traditional home loans usually need collateral like land or other assets. Akhuwat Foundation's home loan doesn't need any security. This means that a lot more people can use it, especially those who don't own property or other important things.</li>
            <li>Plans for affordable repayment: Akhuwat gives you a variety of payment choices based on your income and ability to pay back the loan. This personalised method makes sure that paying back the loan stays doable and doesn't become too expensive.</li>
            <li>Getting more people to use money: Akhuwat helps people get access to money by offering interest-free home loans, especially to low-income families who can't normally get loans from banks. This gives people the power to buy their own homes and become financially stable.</li>
            <li>Making living conditions better:The main goal of Akhuwat's housing loan is to make families' lives better by giving them safe, secure, and nice places to live.</li>
          </ul>
        </div>
        <div className="col-lg-5 col-md-6 text-center">
          <img
            src={FirstOne}
            alt="Money Received"
            className="img-fluid wm-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">SUPPORTING FAMILIES</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" /></h2>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-7 col-md-6">
          <h2 className="fw-bold mb-3">Who Can Hurry Up?</h2>
          <p className=''>
            Open to all Pakistanis who really need a place to live.
          </p>
          <ul>
            <li>Perfect for people and families with low incomes who want to build, buy, or fix up a house.</li>
            <li>Applicants must show basic papers like a driver's license and proof that they live in the country.</li>
            <li>Getting involved in the community and getting recommendations can help your application.</li>
          </ul>
        </div>

        <div className="col-lg-5 col-md-6 text-center p-3">
          <img
            src={SecOne}
            alt="Housing Help"
            className="img-fluid wm-100 h-80"
            style={{ objectFit: "cover" }}
          />
          <div className="start-0 bg-success text-white p-0" style={{ maxWidth: "100%" }}>
            <p className="mb-0 text-center">HOMES BUILT</p>
            <h2 className="display-4 text-center fw-bold"><CountUp end={8000} duration={3} suffix="+" /></h2>
          </div>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-12">
          <h2 className="fw-bold mb-3 text-center">What You Need to Do to Get an Akhuwat Home Loan</h2>
          <ul>
            <li><strong>Make sure you are eligible:</strong> You must be a Pakistani citizen who really needs help with living.</li>
            <li><strong>Get the documents you need:</strong> Get your ID, proof of income, and a short account of your home project ready, whether you are building, buying, or remodelling.</li>
            <li><strong>Send in your application:</strong> You can fill out and turn in your application at the Akhuwat office that is closest to you.</li>
            <li><strong>Review of Applications:</strong> The Akhuwat team will carefully look over your application. If your loan is accepted, you will be told right away.</li>
            <li><strong>Get your money.:</strong> Once approved, the funds will be sent to you according to the terms that were agreed upon. This will let you begin working on your home project.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AkhuwatHouseLoan;

