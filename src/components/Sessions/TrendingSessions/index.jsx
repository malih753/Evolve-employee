import React from "react";
import { TrendingWrap } from "./Trending.styles";
import enroll9 from "../../../assets/sessions/enroll9.png";
import stars from '../../../assets/sessions/stars.png'
import Button from "../../Button";
const TrendingSessions = () => {
  return (
    <TrendingWrap>
      <h4>Trending Sessions</h4>
      <div className="cardDetail">
        <figure>
          <img src={enroll9} alt="enroll" />
        </figure>
        <div className="textHolder">
          <h5>
            “ Embracing Effective Communication and Collaboration in the
            Workplace ”
          </h5>
          <p>
            In today's fast-paced corporate environment, the ability to
            communicate effectively and collaborate efficiently is crucial for
            success. This engaging training session is designed to empower
            participants with the skills and strategies necessary to foster
            strong professional relationships, enhance teamwork, and ultimately
            drive business growth. During this interactive workshop, attendees
            will learn essential communication techniques, such as active
            listening, assertive expression, and conflict resolution.
            <span>see more</span>
            <div className="btnHolder">
                <div className="author">
                <span>By Sahra Conar </span>
                <figure>
                    <img src={stars} alt="stars" />
                </figure>
                </div>
                <Button width="189px">Schedule 1:1 Session</Button>
            </div>
          </p>
        </div>
      </div>
    </TrendingWrap>
  );
};

export default TrendingSessions;
