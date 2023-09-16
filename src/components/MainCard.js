import React from 'react';
import { HiTrendingUp } from 'react-icons/hi';
import NewsSection from './NewsSection';

function MainCard() {
  return (
    <div className='main-card-outer'>
    <div className='main-card-inner'>

    <div className="heading">
      <span className='icon'><HiTrendingUp /></span>
      <p className='heading-text'>Trending searches</p>
    </div>

    <NewsSection />
      
    </div>
    </div>
  )
}

export default MainCard;
