import React from 'react';
import './ShortCityBreaks.css';
import CityBreaksHeroSection from '../../Components/CityBreaksHeroSection/CityBreaksHeroSection'
import CityBreakSection from '../../Components/CityBreakSection/CityBreakSection';
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection'
import DjerbaCityBreaksection from '../../Components/DjerbaCityBreaksection/DjerbaCityBreaksection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
import TabarkaCityBreaksection from '../../Components/TabarkaCityBreaksection/TabarkaCityBreaksection';
import NeedInspirationSection from '../../Components/NeedInsirationSection/NeedInsirationSection';


function ShortCityBreaks() {
  return (
    
       <div className='short-city-break-page'>
       
       <CityBreaksHeroSection CityBreaksHeroTitle='perfect Short City Breaks for you' />
       <CityBreakSection />
       <HolidayPlanSection itemHolidayPlanTitle='Find your perfect winter Holidays'/>
       <DjerbaCityBreaksection />
       <div className='my-4 my-sm-5'>
          <RecommendedSection itemRecommendedTitle='your dream holiday' />
       </div>
      <TabarkaCityBreaksection />
      <NeedInspirationSection />

        
    </div>
  
  )
}

export default ShortCityBreaks;