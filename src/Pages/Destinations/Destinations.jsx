import React from "react";
import './Destinations.css';

import CityBreaksHeroSection from "../../Components/CityBreaksHeroSection/CityBreaksHeroSection";
import DestinationSection from "../../Components/DestinationSection/DestinationSection";
import HolidayPlanSection from "../../Components/HolidayPlanSection/HolidayPlanSection";
import NeedInspirationSection from '../../Components/NeedInsirationSection/NeedInsirationSection'
import SaharaDestination from "../../Components/SaharaDestination/SaharaDestination";

function Destinations(){
    return(
        <div className="destination-page">
            <CityBreaksHeroSection CityBreaksHeroTitle='Beautiful Destination' />
            <DestinationSection />
            <HolidayPlanSection itemHolidayPlanTitle='Find your perfect winter' />
            
            <SaharaDestination SaharaDestinationTitle='Live adventures in the desert' />
            <NeedInspirationSection />
        </div>
    )
}
export default Destinations;