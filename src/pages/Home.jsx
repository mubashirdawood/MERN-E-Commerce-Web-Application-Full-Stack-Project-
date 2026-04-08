import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      
    </div>
  )
}

export default Home
