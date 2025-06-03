import React from "react";
import CountUp from 'react-countup';

const WhyChooseAkhuwat = () => {
  return (
    <section
      className="container-fluid p-0"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <p className="text-uppercase fw-bold">SERVICES</p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="fw-bold mb-4 display-5">
            Why Pick Akhuwat Loans?
            </h2>
            <p>
            In Pakistan, Akhuwat Foundation stands out because it helps people in need by giving them loans with no interest (Qarz-e-Hasna). Akhuwat is not like other banks in that it puts helping people over making money. It does this by giving money for things like business, education, and healthcare, and there are no hidden fees or handling charges. Their community-based method makes sure that everyone can apply, whether they do it online or at a branch near them. Akhuwat's goal is to fight poverty by giving people easy, clear, and caring financial help that helps them make their lives better.

            </p>
          </div>

          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7r8S5p9QLPJSaoMzA1XCstcNDTEAB4AHWw&s"
                    alt="Money Received"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-success text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">HELP PEOPLE GET HOME</p>
                    <h2 className="display-4 text-center fw-bold"><CountUp end={14} duration={3} suffix="K+" />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div
                  className="position-relative h-100"
                  style={{ minHeight: "350px" }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QEtJMdmHbnoT2MV8qCgfg4d1btmbrGtXvg&s"
                    alt="Founder"
                    className="img-fluid rounded w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 bg-dark text-white p-4 rounded-bottom"
                    style={{ width: "100%" }}
                  >
                    <p className="mb-0 text-center">ESTABLISHED SINCE</p>
                    <h2 className="display-4 text-center fw-bold">2003</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAkhuwat;
