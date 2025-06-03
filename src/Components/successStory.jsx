
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Infograph from '../Images/Infograph.png'
import IslamicInfo from '../Images/Interest-Free Micro Loans.png'
import getLoan from '../Images/Add a subheading.png'

const SuccessStory = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container-fluid p-0 bg-light"style={{fontSize:'22px'}}>
      <div className="row g-0">
        {/* Main Content - Left Side */}
        <div className={`${isMobile ? 'col-12' : 'col-lg-9'}`}>
          <main className="py-4 px-md-4 px-2 bg-light">
            <article className="bg-white shadow-sm rounded p-4 p-md-5">
              <h1 className="fw-bold mb-4">Succes Story:How Akhuwat Loans Helped Someone Make Their Future Better</h1>
              
              <p className="mb-4">
              In today's fast-paced world, being financially stable is important for reaching your goals and dreams. There is more to Akhuwat's mission than just giving people money. We want to give people the tools they need to achieve.

              </p>
              
              <p className="mb-4">
              This success story shows how Akhuwat Loans have changed the lives of many people, such as business owners, students, and people who are having trouble with money. Akhuwat has helped make goals come true one loan at a time by making loans easy to get, affordable, and clear.

              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={getLoan}
                  alt="Akhuwat Loan Logo" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">1. Setting the stage for financial empowerment</h2>
              
              <p className="mb-4">
              Akhuwat Loan was created in 2024 to help regular Pakistanis who were having trouble with money. Founder Dr. Amjad Shah saw holes in the current lending system and set out to make a way for people who were having trouble getting cheap credit to get it. A lot of people couldn't get loans from conventional banks because they had strict licensing requirements, high interest rates, and hard to understand application processes.
              </p>
              
              <p className="mb-4">
              That's what Akhuwat Loan was made to do. The goal of the project was to give people from all walks of life more power by making low-interest loans easy to get. From the start, Akhuwat worked to make it easier to borrow money, lower interest rates, and speed up the approval process. People all over Pakistan quickly trusted these efforts, which helped thousands become financially stable and take charge of their futures.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">2:  A Student's Story: Making Dreams Come True</h2>
              
              <p className="mb-4">
              Haseeb Ahmed is a smart student from Lahore who wants to become an engineer. His story is one of many inspiring success stories in Akhuwat. Hassan did very well in school, but his family didn't have the money to pay for his college, which put his career at risk.
              </p>
              
              <p className="mb-4">
              Hassan found Akhuwat Loan's student-friendly loan program while looking for ways to get money. The foundation offered a low-cost loan plan with open terms for paying back the loan and little paperwork needed. It was easy for Hassan to apply online, and within 24 hours, his loan was accepted, giving him the money he needed to keep going to school.
              </p>
              
              <p className="mb-4">
              Hassan then graduated from one of the best engineering schools in Pakistan and is now doing very well as a building engineer. His story shows how Akhuwat Loans can turn bad luck with money into chances to make dreams come true for people who are brave enough to go after them.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={Infograph}
                  alt="Akhuwat Core Values" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">3:  Giving small businesses the tools they need—Sarah's Path to Growth</h2>
              
              <p className="mb-4">
               Giving small businesses the tools they need—Sarah's Path to Growth
              </p>
              
              <p className="mb-4">
              That changed when another shop owner put her in touch with Akhuwat Loan. Sarah applied at a nearby Akhuwat Loan Centre because it had easy requirements and a lot of business loan choices. Her application was quickly accepted because she didn't have to fill out a lot of paperwork or go through a lot of security.
              </p>
              
              <p className="mb-4">
              With the loan, she was able to restock her shop and fix it up. Within a year, she made twice as much money, and her shop became a popular spot in her neighbourhood. Sarah says that Akhuwat's quick and helpful process helped her turn a business that was having trouble into a success story in the neighbourhood.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">4: Help with money when it's needed most—emergency support</h2>
              
              <p className="mb-4">
              Unexpected things can happen in life, and money problems can happen when you least expect them. Many people in Pakistan depend on Akhuwat Loan to get through tough times.


              </p>
              
              <p className="mb-4">
              Unexpected things can happen in life, and money problems can happen when you least expect them. Many people in Pakistan depend on Akhuwat Loan to get through tough times.


              </p>
              
              <p className="mb-4">
              Let's look at Ali's story. Because he had no savings and had to pay for medical bills right away, he went to Akhuwat for an emergency loan. His application was accepted almost right away, and the money was sent to him right away.
              </p>
              
              <p className="mb-4">
              Ali was able to handle his money better without going deeper into debt thanks to the flexible payment choices. He's back on his feet now, healthy and steady. What happened to him shows how Akhuwat helps people when they need it most, when life is hardest.
              </p>
    
              <h2 className="fw-bold mt-5 mb-4">5: Making it possible for Farhan to own a home—his dream comes true</h2>
              
              <p className="mb-4">
              Many Pakistanis want to own their own home, but the rising cost of homes makes that goal hard to reach. Akhuwat Loan's easy-to-repay home loans have helped a huge number of families become homeowners.
              </p>
              
              <p className="mb-4">
              One of them was Farhan Sheikh, a worker from Rawalpindi who came from a middle-class family. He saved for years but still couldn't get the money he needed to buy a house. He then looked at Akhuwat.
              </p>
              
              <p className="mb-4">
              Farhan was able to get a loan for a house that helped him pay for the down payment. The application process was easy and quick. Farhan and his family now have a home they are happy to call their own, thanks to Akhuwat's help. This was a long-held dream come true.
              </p>
    
              <div className="my-5 text-center">
                <img 
                  src={IslamicInfo}
                  alt="Akhuwat Loan Values Diagram" 
                  className="img-fluid rounded shadow-sm" 
                />
              </div>
    
              <h2 className="fw-bold mt-5 mb-4">6: As Ghulam changed, he strengthened the foundations of agriculture.</h2>
              
              <p className="mb-4">
              Akhuwat Loan isn't just for people who work in cities; its farm loan program also helps people in rural areas. Many farmers in Pakistan's farmland have trouble paying for things they need, like good seeds, fertiliser, or new tools that could help them make more money and increase their crops.

              </p>
              
              <p className="mb-4">
              This is the problem that Ghulam Abbas, a skilled farmer from Multan, had to deal with. Even though he worked hard for years, his wages were low because he used old farming methods. He knew that getting more up-to-date tools would help his crops grow better and give his family more money. But regular banks didn't want to lend him money because they thought farming was too risky.
              </p>
              
              <p className="mb-4">
              That's when Ghulam went to Akhuwat Loan. His loan was accepted in less than a week after he applied. He set up an irrigation system, bought high-quality seeds, and bought a new plough with the money. It worked so well that his food yield tripled and his income went through the roof.

              </p>
    
              <h2 className="fw-bold mt-5 mb-4">Putting it all together - how Akhuwat Loan has helped</h2>
              
              <p className="mb-4">
              A Look at the Bigger Picture: How Akhuwat Loan is Changes Lives
Akhuwat Loan has changed the lives of many people in Pakistan, from students and store owners to farms and families. Many people, like Hassan, Sarah, Ali, Farhan, and Ghulam, have found hope and success through our loan programs.
              </p>
              
              <p className="mb-4">
              We are proud at Akhuwat Loan Scheme 2025 to offer fair, clear, and low-cost financial solutions that break down boundaries and unleash potential. Our goal is easy: to give every Pakistani the tools they need to make their future better and safer.


              </p>
            </article>
          </main>
        </div>

        {/* Sidebar - Right Side */}
        {!isMobile && (
          <div className="col-lg-3 ">
            <div className="sticky-top pr-3" style={{ top: '0', paddingRight:'22px' }}>
              <Sidebar />
            </div>
          </div>
        )}
        
        
      </div>
    </div>
  );
};

export default SuccessStory;

