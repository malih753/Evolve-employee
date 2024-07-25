import React, { useState } from "react";
import { EnrollWrapper } from "./Enroll.styles";
import Button from "../../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import date from "../../../assets/home/session/calendar.png";
import time from "../../../assets/home/session/watch.png";
import { Enroll } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";

const EnrollSession = ({ onViewAll, showAll, groupSessions }) => {
  const navigate = useNavigate();
  // const [showAllCards, setShowAllCards] = useState(
  //   showAll ? groupSessions?.length : 3
  // );
  const NextPage = () => {
    navigate("/ScheduleMeeting");
  };
  const toggleCards = () => {
    // setShowAllCards(showAll ? 3 : groupSessions?.length);
    onViewAll(); // Call the onViewAll function passed from parent to update the state in Home component
  };

  return (
    <EnrollWrapper>
      <div className="heading">
        <strong className="headingWrap">Enroll For Group Sessions</strong>
        {!showAll && (
          <Button width="94px" type="transparent" onClick={toggleCards}>
            View All
            <FaArrowRightLong />
          </Button>
        )}
      </div>
      <div className="cardHolder">
        <div className="wrap">
          <div className="card" onClick={NextPage}>
            <img src={Enroll[0].img} alt="Enroll" className="imgWrap" />
            <div className="textWrapper">
              <h5>{groupSessions?.title}</h5>
              <span>
                {groupSessions?.coach?.firstName +
                  " " +
                  groupSessions?.coach?.lastName}
              </span>
            </div>
            <div className="timeHolder">
              <div className="date">
                <img src={date} alt="date" />
                {groupSessions?.startDate}
              </div>
              <div className="time">
                <img src={time} alt="time" />
                {groupSessions?.startTime}
              </div>
            </div>
          </div>
          {showAll && <Button width="194px">Enroll Now</Button>}
        </div>
      </div>
    </EnrollWrapper>
  );
};

export default EnrollSession;
