import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const TermsAndConditions = () => {
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
              <h1 className="fw-bold mb-4">Terms and Conditions – Akhuwat Loan</h1>

              <p className="mb-4">
              Hi, and welcome to Akhuwat Loan! Our website and services can only be used by people who agree to these Terms and Conditions. It means you agree to follow these rules when you use our site and services. We ask that you do not use our website or services if you do not agree with any of these rules.
              </p>

              <p className="mb-4">
              Akhuwat Loan can update or change these Terms and Conditions at any time without telling you first. It is your duty to check these terms often to see if they have changed.
              </p>

              <h2 className="fw-bold mt-5 mb-4">1. What They Mean</h2>
              <p>“Akhuwat Loan” refers to the website and services that are part of the Akhuwat loan plan.</p>
              <p>Akhuwat Loan is the service provider, which is why “We,” “Us” and “Our” are used.</p>
              <p>The words “You,” “Your” refer to any person who visits our website or uses our services.</p>

              <h2 className="fw-bold mt-5 mb-4">2. How to Use Our Site</h2>
              <p>You agree that you are at least 18 years old and legally able to make deals when you use our website. You agree to only use the site for legal reasons and not do anything that could damage or disrupt it, like putting malware on it, getting in without permission, or using automatic bots.              </p>

              <h2 className="fw-bold mt-5 mb-4">3. Help with loans</h2>
              <p>Akhuwat Loan helps people in Pakistan who are qualified get loans. When you apply for a loan, you agree that you will only be approved if you meet the requirements and give accurate information. We hold the right to choose not to accept or reject applications for any reason. The loan terms, such as interest rates and when the payments are due, will be made clear before the deal is finalised. You need to follow the rules of the loan agreement and pay it back.</p>

              <h2 className="fw-bold mt-5 mb-4">4. Eligibility for a loan</h2>
              <p>To get in, you need to:</p>
              <p>Be a Pakistani native or live in Pakistan</p>
              <p>Age 18 or older</p>
              <p>Have a valid CNIC</p>
              <p>Have a source of income or work that can be verified.</p>
              <p>Give correct financial information so that it can be checked.
              If you don't meet these requirements, you might be turned down.</p>

              <h2 className="fw-bold mt-5 mb-4">5. Paying back a loan</h2>
              <p>Once the loan is approved and sent to you, you agree to pay it back on time, usually in monthly payments. There may be fees and changes to your credit report if you pay late. You can return early without being charged extra, and the interest may even go down.</p>

              <h2 className="fw-bold mt-5 mb-4">6. Fees and interest rates</h2>
              <p>The interest rates on our loans are reasonable and depend on the type of loan, the amount, and the length of time it is taken out. It will also be easy to see any service fees, like those for application, handling, or late payments.</p>

              <h2 className="fw-bold mt-5 mb-4">7.Freedom of Information and Privacy</h2>
              <p>We keep your personal information safe and only use it to process loans, make sure you're eligible, and talk to you. We don't sell or give your information to other companies unless the law says we have to or it's needed to process your loan.</p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to other sites</h2>
              <p>There may be links on our site to other sites so you can easily visit them. We don't support or care about those sites, and we're not responsible for any problems that come up because you use them.</p>

              <h2 className="fw-bold mt-5 mb-4">9. Ownership of ideas</h2>
              <p>The text, pictures, and logos on this website are all owned by Akhuwat Loan and are protected by intellectual property rules. Without our permission, you can't use our information for business.</p>

              <h2 className="fw-bold mt-5 mb-4">10. Activities Not Allowed</h2>
              <p>You promise not to:</p>
              <p>Give fake information</p>
              <p>Help people do illegal things like theft or money laundering</p>
              <p>Hack or use software to mess up the website.</p>
              <p>Get other people's personal information without their permission</p>
              <p>Use our services to get what you want.
              If you break the rules, you could lose your service and face legal action.</p>

              <h2 className="fw-bold mt-5 mb-4">11. Limitation of Loss</h2>
              <p>We try to make our services effective, but we can't promise that they will work perfectly or that you will never have to wait. We're not responsible for any harm, data loss, or money problems that happen because you use our services.</p>

              <h2 className="fw-bold mt-5 mb-4">12. The end of service</h2>
              <p>We can stop or terminate your access at any time if you break the rules, we think you are committing fraud, or you don't pay back a loan. You are still responsible for paying back all of your loans.</p>

              <h2 className="fw-bold mt-5 mb-4">13. Laws that apply</h2>
              <p>Laws in Pakistan apply to these terms, and any disagreements will be settled in courts in Pakistan.</p>

              <h2 className="fw-bold mt-5 mb-4">14. Changes to the general rules</h2>
              <p>At any time, we will make changes to these rules and post them on this page. You are responsible for going over them often. If you keep using our services, it means you agree to the new rules.</p>

              <h2 className="fw-bold mt-5 mb-4">15. Contact Us</h2>
              <p>Make sure you get in touch with us if you have any questions, concerns, or wishes about these Terms and Conditions:</p>
              <p>Email: <a href="mailto:support@akhuwatloanschemepk.com">support@akhuwatloanschemepk.com</a></p>
              <p>Phone: +92 340 1003463</p>
              <p>Office Address: F-6, Islamabad, Islamabad Capital Territory, Pakistan</p>

              <p className="mt-4 text-muted">Last Updated: October 2024</p>
              <p className="mt-4 ">We're glad you picked Akhuwat Loan. We are committed to providing you with clear and reliable banking services.</p>

            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
           <div className="col-lg-3 ">
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

export default TermsAndConditions;
