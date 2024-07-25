import React from "react";
import { CoachingCategoryWrap } from "../CoachingCategory/category.styles";
import { UpcomingSessionWrap } from "./UpcmingSession.styles";
import { IoIosArrowForward } from "react-icons/io";
import { UpcomingSessionData } from "../../Constant/Data";
const UpcomingSession = () => {
  return (
    <CoachingCategoryWrap>
      <UpcomingSessionWrap>
        <div className="headingWrapper">
          <h5>Group Sessions</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="cardHodler">
          {UpcomingSessionData.map((value, index) => (
            <div className="card" key={index}>
              <img src={value.img} alt="session" />
              <h5>{value.title}</h5>
            </div>
          ))}
        </div>
      </UpcomingSessionWrap>
    </CoachingCategoryWrap>
  );
};

export default UpcomingSession;
