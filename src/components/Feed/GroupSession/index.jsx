import React from 'react'
import { CoachingCategoryWrap } from '../CoachingCategory/category.styles'
import { GroupSessionWrap } from './GroupSession.styles'
import { IoIosArrowForward } from "react-icons/io";
import {GroupSessionData} from "../../Constant/Data";
import clock from "../../../assets/home/session/watch.png";
import calendar from "../../../assets/home/session/calendar.png";
const GroupSession = () => {
  return (
    <CoachingCategoryWrap>
        <GroupSessionWrap>
        <div className="headingWrapper">
          <h5>Group Sessions</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
          </div>
          {GroupSessionData.map((value,index)=>(
            <div className="groupHolder" key={index}>
            <h5>{value.title} <span>{value.name}</span></h5>
            <div className="timeWrap">
                <div className="time">
                    <img src={clock} alt="time" />
                    <span>9:00 am</span>
                </div>
                <div className="date">
                    <img src={calendar} alt="calendar" />
                    <span>17 June 2024</span>
                </div>
            </div>
          </div>
          ))}
          
        </GroupSessionWrap>
    </CoachingCategoryWrap>
  )
}

export default GroupSession