
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Contact Us – Akhuwat Loans</h1>

              <p className="mb-4">
              We at Akhuwat Loan are dedicated to giving you great customer service and making it easy to meet your financial goals. Whether you're applying for a loan, finding out more about our services, or wanting help with an existing application, our experienced team is here to help you every step of the way. We want your experience to be easy and stress-free, so we'll keep you up to date at all times.
              </p>

              <p className="mb-4">
              Please feel free to get in touch with us in any of these ways. We put your concerns first and try to react quickly so that you don't have to deal with any problems.
              </p>

             

              <h2 className="fw-bold mt-5 mb-4">Get in Touch With Us</h2>

              <div className="contact-methods">
                <div className="contact-method mb-4">
                  <h3 className="fw-bold">1. Send us an email</h3>
                  <p>
                  If you need help, our customer service team can be reached by email. Whether you need help with your application or just have a general question, we'll get back to you within 24 hours to help you quickly and correctly.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">2. Call us</h3>
                  <p>
                  Would you rather talk to someone directly? You can talk to a helpful member of our team by calling our customer service line. From 9 a.m. to 6 p.m., Monday through Friday (Pakistan Standard Time), we're here to answer your questions about loan choices, eligibility, and the application process.
                  </p>
                </div>

                <div className="contact-method mb-4">
                  <h3 className="fw-bold">3. Come to our office</h3>
                  <p>
                  You are welcome to come to our office if you are in or near Islamabad. Meeting with one of our loan specialists in person gives you more personalized help and a better idea of how the loan process works. When you're making financial choices, we're here to help you.
                  </p>
                </div>
              </div>

              <div className="office-address mb-4">
                <h2 className="fw-bold">Office Address: Dasti Loan</h2>
                <p>F-6, Islamabad, Islamabad Capital Territory, Pakistan.</p>
              </div>

              <div className="map-container mb-4 text-center p-5">
                <img 
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/10/map-1536x860.png" 
                  alt="Office Location Map" 
                  className="img-fluid rounded  p-5" 
                />
              </div>

              <div className="quote-section mb-4">
                <h3 className="fw-bold">Get a Free Loan Quote Right Now</h3>
                <p>
                Get in touch with us to talk about a personalized loan, whether you're ready to apply or just looking around. Our skilled staff will walk you through the application process, answer all of your questions, and help you get the best terms possible. At Dasti Loan, our goal is to help you reach your financial goals by giving you custom loan options.
                </p>
              </div>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3">
            <div
              className="sticky-top pr-3"
              style={{ top: "0", paddingRight: "22px" }}
            >
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;

