import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const PrivacyPolicy = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ fontSize: "22px" }}>
      <div className="row g-0">
        {/* Main Content */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Privacy Policy</h1>

              <p className="mb-4">
              We really value the trust you put in Akhuwat Loan by giving us your personal information. Our top goal is to keep your privacy safe, and we are committed to upholding the highest standards of security and privacy. When you use our services or visit our website, this Privacy Policy tells you how we gather, use, and keep your personal information safe.
              </p>
              <p className="mb-4">
                You agree to the terms and conditions in this Privacy Policy when you use Akhuwat Loan's services or visit its website.
              </p>
              <div className="my-5 text-center">
                <img
                  src="https://akhuwatloanschemepk.com/wp-content/uploads/2024/03/soft-loan-pakistan.jpg"
                  alt="Soft Loan Pakistan"
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">1. The data we collect</h2>

              <p className="mb-4">
                <strong>Information About You:</strong>
              </p>
              <ul className="fw-light mx-5">
                <li>
                 Name, address, phone number, email address, CNIC, information about your income, and bank account information are needed to apply for a loan.
                </li>
                <li>
                Contact Us: Your name, phone number, email address, and any other information you give us over the phone, in person, or through email.
                </li>
                <li>
                Contact Us: Your name, phone number, email address, and any other information you give us over the phone, in person, or through email.
                </li>
              </ul>

              <p className="mb-4">
                <strong>Non-Personal Data:</strong>
              </p>
              <ul className="fw-light mx-5">
                <li>
                  IP address, browser type, device type, referring URL, and
                  website usage patterns collected via cookies and tracking
                  technologies.
                </li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
                2. What We Do With Your Facts
              </h2>

              <ul className="fw-light mx-5">
                <li>Handle loans and decide who is eligible.</li>
                <li>Tell people about changes, answer their questions, and help them.</li>
                <li>Send advertising and marketing materials (you can stop receiving them at any time).</li>
                <li>Follow the rules and laws that apply to you.</li>
                <li>Study how people use websites to make them better.</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">
              3. Giving other people your information
              </h2>

              <ul className="fw-light mx-5">
                <li>
                Having trusted service providers help with loan handling or support.
                </li>
                <li>
                When the law says so or to protect people's rights and safety.
                </li>
                <li>During business moves like buying or merging with another company.</li>
                <li>We don't rent or sell your information to other companies for business purposes.</li>
              </ul>

              <p className="mb-4">
                We do not sell or rent your personal information to third
                parties for marketing purposes.
              </p>

              <h2 className="fw-bold mt-5 mb-4">4. Safety of Data</h2>

              <p className="mb-4">
              Encrypting private info while it's being sent and stored.
              </p>
              <p className="mb-4">
              Access is limited to only authorized people.
              </p>
              <p className="mb-4">
              Checking for security holes on a regular basis.
              </p>
              <p className="mb-4">
              We work hard to keep your information safe, but no online communication is 100% safe. When you share personal information online, please be careful.
              </p>

              <h2 className="fw-bold mt-5 mb-4">
                5. Cookies and other technologies that track you
              </h2>

              <p className="mb-4">
              Learn how people use your website.
              </p>
              <p className="mb-4">
              Make your experience unique.
              </p>
              <p className="mb-4">
              Give people relevant ads and information.
              </p>
              <p className="mb-4">
              Give people relevant ads and information.
              </p>

              <h2 className="fw-bold mt-5 mb-4">6. Your Rights</h2>

              <ul className="fw-light mx-5">
                <li>
                Get to the information about you.
                </li>
                <li>
                 Ask for changes to be made to wrong info.

                </li>
                <li>
                  Ask for changes to be made to wrong info.
                </li>
                <li>
                Get in touch with us below to use these rights.
                </li>
              </ul>

              <p className="mb-4">
                To exercise these rights, contact us via the details provided
                below.
              </p>

              <h2 className="fw-bold mt-5 mb-4">7. How Long to Keep Information</h2>

              <p className="mb-4">
              We only keep your personal information for as long as it takes to provide the service, follow the law, and keep records.
              </p>

              <h2 className="fw-bold mt-5 mb-4">8. Links to other sites</h2>

              <p className="mb-4">
              Our website may have links to outside sites that Akhuwat Loan does not control. We're not in charge of their material or how they handle your privacy.
              </p>

              <h2 className="fw-bold mt-5 mb-4">
                9. How this privacy policy has been changed
              </h2>

              <p className="mb-4">
              If we need to, we may change this procedure. This page will be updated, and big changes will be announced by email or on the website.
              </p>

              <h2 className="fw-bold mt-5 mb-4">10. Get in Touch</h2>

              <p className="mb-4">
              To ask questions or make requests about this Privacy Policy, please email us at
              </p>

              <ul className="fw-light mx-5">
                <li>
                  Send an email to support@akhuwatloanschemepk.com.
                </li>
                <li>
                Call +92 0346 0760718
                </li>
                <li>
                Its address is F-6, Islamabad, Islamabad Capital Territory, Pakistan.

                </li>
              </ul>

              <p className="text-muted mt-4">Last Updated: October 2024.</p>
            </article>
          </main>
        </div>

        {/* Sidebar */}
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

export default PrivacyPolicy;
