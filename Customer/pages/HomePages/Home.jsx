import React from 'react'
import HomeBanner from '../../Components/HomeCarousal/HomeBanner'
import CardCarousal from '../../Components/CardCarousal/CardCarousal'
import { women_kurtis } from '../../../Data/Women\'/Kurti long/kurti'






const Home = () => {
  return (
    <>
<div> <HomeBanner/>
    <div className='space-y-10 py-20'>
        <CardCarousal data={women_kurtis} sectionName={"Women Kurtis"}/>
        <CardCarousal data={women_kurtis} sectionName={"Best Sellers"}/>
    </div>
    {/* <div>
        <StackedCarousal slides={slides}/>
    </div> */}
    </div>
    </>
  )
}

export default Home