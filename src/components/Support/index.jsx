import React, { useState } from "react";
import { SupportWrap } from "./Support.styles";
import Tickets from "./Ticket";
import Issues from "./Issue";
import TicketRaised from "./TicketRaised";

const SupportSec = () => {
  const [ticket, setTicket] = useState(false);
  const clickHandler = () => {
    setTicket(true);
  };
  const backPage = () =>{
    setTicket(false);
  }
  return (
    <SupportWrap>
      {!ticket ? (
        <div className="wrapper">
          <div className="activeTicket support">
            <Tickets width="186px" name="Close Ticket" title="Active Tickets" click={clickHandler}/>
          </div>
          <div className="issuesHolder support">
            <Issues  click={clickHandler}/>
          </div>
          <div className="resolveTicke supportt">
            <Tickets
              type="transparent"
              name="Resolved"
              title="Resolved Tickets "
            />
          </div>
        </div>
      ) : (
        <div className="raised">
          <TicketRaised backPage={backPage} />
        </div>
      )}
    </SupportWrap>
  );
};

export default SupportSec;
