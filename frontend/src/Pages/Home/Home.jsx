import React from 'react'
import MainBanner from '../../Components/HomeComponents/MainBanner/MainBanner'
import WelcomeNote from '../../Components/HomeComponents/WelcomeNote/WelcomeNote'
import OurValues from '../../Components/HomeComponents/OurValues/OurValues'
import BestSelling from '../../Components/HomeComponents/BestSelling/BestSelling'
import OurCollection from '../../Components/HomeComponents/OurCollection/OurCollection.jsx'

const Home = () => {
  return (
    <div>
        <MainBanner/>
      <WelcomeNote/>
      <OurValues/>
      <BestSelling/>
      <OurCollection/>

      
    </div>
  )
}

export default Home
