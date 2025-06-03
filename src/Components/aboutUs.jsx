
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Infographic from '../Images/Infograph.png'
import aboutUsImg from '../Images/Akhuwat loan service.jpg'
import SecAboutus from '../Images/For house loan.jpg'

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{fontSize:'21px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? "col-12" : "col-lg-9"}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">About Us</h1>

              <p className="mb-4">
              Welcome to Akhuwat Loan, the reliable place to get loans in Pakistan. Akhuwat Loan was started in 2023 by Dr. Amjad Saqib with a clear goal: to give people all over the country access to low-interest loans. No matter how much money you have, we want to help you reach your personal and business goals. We are committed to giving our valued clients clear, reliable, and quick financial solutions that are made just for them.
              </p>
              <div className="my-5 text-center p-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhY4gb1FqhjL_n2xno3miBhBFisWDqFooHgA&s"
                  alt="Akhuwat Loan Logo" 
                  className="img-fluid rounded shadow-sm mw-100 h-100" 
                />
              </div>

              <h2 className="fw-bold mt-5 mb-4">What We Do</h2>

              <p className="mb-4">
              The only thing we do at Akhuwat Loan is help people who need money the most. We are sure that everyone, no matter how much money they make, should be able to get a reasonable loan. Through low-interest loans and customisable payment plans, we want to give our clients the money management skills they need to make their lives better and their quality of life better.

              </p>

              <p className="mb-4">
                We know how hard it can be to get a loan and how hard it is for many people in Pakistan to deal with money problems. Because of this, we promise that our services will be easy to use, quick, and clear. We work hard to get rid of obstacles by giving each customer easy-to-use, custom solutions that meet their specific needs.
              </p>

              <h2 className="fw-bold mt-5 mb-4">Why Akhuwat Loan is the Best Option?</h2>

              <ol className="fw-light mx-5">
                <li>Low rates of interest</li>
                <p>Our interest rates are some of the lowest in Pakistan, which makes it easier for you to get money without having to worry too much about your finances.</p>
                <li>Quick Process for Approving</li>
                <p>Quick Process for Approving
We get the sense of urgency. Our simplified application process makes sure you get accepted quickly, without all the usual problems that come with traditional banking</p>
                <li>A lot of loan choices</li>
                <p>We have a variety of loan products that are meant to meet your needs, whether you need a personal loan, business financing, help with school, or emergency funds.       </p>
                <li>Fully open and honest</li>
                <p>Because we're honest, there are no hidden fees or hard-to-understand terms. You'll know everything before you agree.</p>
                <li>Customised Service</li>
                <p>We take the time to learn about your finances so that we can give you the best loan amounts and payback pla</p>
              </ol>

              <h2 className="fw-bold mt-5 mb-4">Dr. Amjad Saqib is our head founder</h2>

              <p className="mb-4">
              Akhuwat Loan was started by Dr. Amjad Saqib, a creative leader and generous donor. Because he is so dedicated to financial inclusion, Dr. Saqib has been a tireless supporter of social welfare and economic empowerment, especially in areas that don't get enough help. Akhuwat Loan has become an important organisation thanks to his guidance, giving hope and money to thousands of people across Pakistan.

              </p>
              <div className="my-5 text-center">
                <img 
                  src={Infographic}
                  alt="Akhuwat Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <p className="mb-4">
              Dr. Amjad Saqib, who started Akhuwat Loan, had a lot of wisdom and always cared about people. This is what made the company so successful. Dr. Saqib has built Akhuwat Loan's mission around providing fair and easy access to financial services for everyone. He has a deep knowledge of Pakistan's financial landscape and has been dedicated to social justice his whole life. Every part of our business is still guided by his vision, and it shows in how we help communities across the country.
              </p>


              <h2 className="fw-bold mt-5 mb-4">Being honest is what we stand for.</h2>

              <ul className="fw-light mx-5">
                <li>Our work is based on being open and honest. Being honest and open with every client is important to us because we want to build strong, trust-based relationships with them.</li>
                <li>Focus on the customer: We base every service we offer on what you need. Our team is dedicated to giving each person personalized help and the best financial options for their needs.</li>
                <li>New ideas: Modern financial tools and technologies are always being added so that we can better meet the changing wants of our customers. </li>
                <li>Being Socially Responsible: We do more than just give loans; we also try to improve whole neighborhoods. We help the economy grow and make long-term growth by providing sustainable and open financin</li>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Services for Financing</h2>

              <p className="mb-4">
                We have a lot of different loan options to meet the wants of people from all walks of life:
              </p>

              <ul className="fw-light mx-5">
                <li>Loans for people</li>
                <p >You can use these flexible funds for things like schooling, health care, or sudden emergencies.</p>
                <li>Loans for businesses</li>
                <p>Help for entrepreneurs and small business people to start up, run, or grow their businesses.</p>
                <li>Loans for school</li>
                <p>Students can reach their academic goals without worrying about money if they can get affordable support.</p>
                <li>Instant Loans</li>
                <p>Help with money right away for emergencies, provided quickly and reliably.      </p>
                <li>Loans with no interest</li>
                <p>Shariah-compliant loans that are easy to pay back and have no interest are meant to give low-income people and families more power.</p>
              </ul>

              <h2 className="fw-bold mt-5 mb-4">Our Promise to Pakistan</h2>

              <p className="mb-4">
              Akhuwat Loan is proud to be a mission-driven group based in Pakistan that works to improve the economy of the whole country. Our goal is to open up new possibilities and make people's lives better by making financial services easy to get, honest, and cheap.
              </p>

              <p className="mb-4">
              We are here to help you whether you are starting a business, paying for school, or dealing with a cash emergency. One loan at a time, we're making Pakistan better and more open to everyone.
              </p>
              <div className="my-5 text-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kyobUAQdsFq2IgotLERSGa9GA4S63NQU5Q&s"
                  alt="Akhuwat Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
              <h2 className="fw-bold mt-5 mb-4">Join the family of Akhuwat Loans.</h2>

              <p className="mb-4">
              When you join Akhuwat Loan, you get more than just a loan. You also get a trusted partner who will help you with your money all the way through. We want to help you make smart decisions about your money and reach your goals without any stress or trouble.
              </p>

              <p className="mb-4">
              Get a loan today and see what makes Akhuwat Loan different. With our quick, safe, and reliable banking services, we can help you make your dreams come true.

              </p>
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

export default AboutUs;

