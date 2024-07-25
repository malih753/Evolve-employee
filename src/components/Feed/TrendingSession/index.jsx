import React from 'react'
import { CoachingCategoryWrap } from '../CoachingCategory/category.styles'
import { UpcomingSessionWrap } from '../UpcomingSession/UpcmingSession.styles'
import { IoIosArrowForward } from "react-icons/io";
import {TrendingSessionData} from "../../Constant/Data"
const TrendingSession = () => {
  return (
    <CoachingCategoryWrap>
      <UpcomingSessionWrap>
        <div className="headingWrapper">
          <h5>Trending Sessions</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="cardHodler">
          {TrendingSessionData.map((value, index) => (
            <div className="card" key={index}>
              <img src={value.img} alt="session" />
              <h5>{value.title}</h5>
            </div>
          ))}
        </div>
      </UpcomingSessionWrap>
    </CoachingCategoryWrap>
  )
}

export default TrendingSession