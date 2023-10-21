import React from 'react'
import HomeBanner from '../component/HomeContainer/HomeBanner'
import WhyChooseus from '../component/HomeContainer/WhyChooseus'
import SmallBlog from '../component/HomeContainer/SmallBlog'

const Home = () => {


  return (
    <section>
      <HomeBanner />
      <WhyChooseus />
      <SmallBlog />
    </section>
  )
}

export default Home