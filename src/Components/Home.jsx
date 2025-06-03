import React from 'react'
import Crousal from './homeComponents/Crousal'
import Cards from './homeComponents/Cards'
import AkhuwatLoanBanner from './homeComponents/AkhuwatLoanBanner'
import ApplyLoanDes from './homeComponents/ApplyLoanDes'
import AkhuwatLoanStatus from './homeComponents/AkhuwatLoanStatus'
import WhyChooseAkhuwat from './homeComponents/WhyChooseAkhuwat'
import AkhuwatLoanInstruction from './homeComponents/AkhuwatLoanInstruction'
import AkhuwatLoanScheme from './homeComponents/AkhuwatLoanScheme'
import AkhuwatAdvantage from './homeComponents/AkhuwatAdvantage'
import AkhuwatImages from './homeComponents/AkhuwatImages'
import StatsCards from './homeComponents/StatsCard'

const Home = () => {
  return (
    <div>
      <Crousal />
      <StatsCards />
      <Cards />
   <WhyChooseAkhuwat />
   <AkhuwatLoanStatus/>
      <AkhuwatLoanInstruction />
      <AkhuwatLoanScheme />
      <AkhuwatAdvantage />
      <AkhuwatImages />
    </div>
  )
}

export default Home
