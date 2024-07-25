import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";
import Innovation from "../Sessions/Innovation";

const Calendar = () => {
  const [showInnovation, setShowInnovation] = useState(false);

  const openInnovation = () => {
    setShowInnovation(true);
  };
const BackToPage = () =>{
  setShowInnovation(false);
}
  return (
    <>
      {!showInnovation ? (
        <CalendarWrap>
          <h4>
            Tuesday, November 30 2024 <FaAngleLeft />
            <FaAngleRight />
          </h4>
          <CalendarHeader />
          <TimeSlots click={openInnovation} />
        </CalendarWrap>
      ) : (
        <Innovation BackToPage={BackToPage}/>
      )}
    </>
  );
};

export default Calendar;
