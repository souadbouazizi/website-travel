

import React from "react";
import './Holidays.css';
import HolidaysHeroSection from "../../Components/HolidaysHeroSection/HolidaysHeroSection";
import EvryOneHolidays from "../../Components/EvryOneHolidays/EvryOneHolidays";
import NeedInspirationSection from '../../Components/NeedInsirationSection/NeedInsirationSection'
import NextHoliday from "../../Components/NextHoliday/NextHoliday";
import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';

function Holidays(){
    return(

        <div className="holiday-page">
             <HolidaysHeroSection HolidaysHeroTitle='Your perfect holiday' />
            <EvryOneHolidays />
            <NeedInspirationSection />
            <NextHoliday />
            <HolidayPlanSection itemHolidayPlanTitle='Plan your winter and new year holidays' />

            <div className="mt-4 mt-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div>

        </div>
    )
}
export default Holidays;
