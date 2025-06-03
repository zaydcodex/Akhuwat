import React from 'react';
import lonSchemeImg from '../../Images/akhuwatimgone.jpeg'

const AkhuwatLoanScheme = ()=>{
  return (
    <section className="container-fluid py-5">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-lg-5 " >
            <h1 className="fw-bold mb-4">Credit Scheme for the Akhuwat Foundation</h1>
            
            <p className="mb-4 fw-bold mt-1">
            People from all walks of life can use the Akhuwat Foundation's easy-to-use payment system. The application process is easy and quick, and you only need to fill out a small amount of papers. The plan offers loans at low rates, which makes it a popular choice all over Pakistan.
            </p>
            
            <div className="border-start border-primary border-4 ps-3 mb-4 mt-1">
              <p className="mb-0">
              If you need help or find the process confusing, just call the Akhuwat head office. They have helpful support staff ready to help you right away.
              </p>
            </div>
          </div>
          
          <div className="col-lg-7 mt-5">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3z3CFhlmBzS0E_pqBcazpNPh_0SgE_B_QA&s" 
              alt="Akhuwat Loan Scheme Details in Urdu" 
              className="card-img-top "
              // style={{height:"500px"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


export default AkhuwatLoanScheme;