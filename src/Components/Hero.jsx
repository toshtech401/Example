import React from 'react'
import Explore from './Explore/Explore'
import Footer from './Footer'
import Goods from './Goods/Goods'
import Header from './Header/Header'
import Top from './Top/Top'
import Features from './Features/Features'

const Hero = () => {
  return (
    <div>
        <Header />
        <Goods />
        <Top />
        <Features />
        <Explore />
        <Footer />
    </div>
  )
}

export default Hero