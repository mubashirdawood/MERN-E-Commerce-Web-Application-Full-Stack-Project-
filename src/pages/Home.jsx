import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import SearchBar from '../components/SeachBar'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsLetterBox></NewsLetterBox>
      
    </div>
  )
}

export default Home
