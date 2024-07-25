import React, { useState } from "react";
import { SessionsWrapper } from "./Sessions.styles";
import SessionSearchbar from "./SessionSearchbar";
import EnrollSessions from "./EnrollSessions";
import StartedSessions from "./startedSessions";
import Enroll from "./Enroll";
import CoachingProfile from "./CoachSessions";
import TrendingSessions from "./TrendingSessions";
import Innovation from "./Innovation";
import ScheduleMeeting from "./Innovation/ScheduleMeeting";

const Sessions = () => {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [sessionOpen, setSessionOpen] = useState(false);
  const sessionClick = () => {
    setSessionOpen(true);
  };
  const clickHandler = () => {
    setEnrollOpen(true);
  };
  const BackToPage = () => {
    setEnrollOpen(false);
  };
  
  return (
    <>
      {enrollOpen ? (
        <div>
          <Innovation BackToPage={BackToPage} />
        </div>
      ) : sessionOpen ? (
        <ScheduleMeeting/>
      ) : (
        <SessionsWrapper>
          <SessionSearchbar />
          <EnrollSessions click={sessionClick} />
          <Enroll click={clickHandler} />
          <CoachingProfile />
          <TrendingSessions />
          <StartedSessions />
        </SessionsWrapper>
      )}
    </>
  );
};

export default Sessions;
