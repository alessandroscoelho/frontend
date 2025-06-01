import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolice from '../components/OurPolice'
import NewslatterBox from '../components/NewslatterBox'

const home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
        <BestSeller />
        <OurPolice />
        <NewslatterBox />
    </div>
  )
}

export default home
