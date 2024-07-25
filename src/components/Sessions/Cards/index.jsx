import React from "react";
import { CardsWrap } from "./Cards.styles";
import Button from "../../Button";

import stars from "../../../assets/sessions/stars.png";
import { enrollSeesion } from "../../Constant/Data";

const Cards = ({ data, click, bookedSession = false }) => {
  return bookedSession ? (
    <CardsWrap>
      <div className="cardHolder">
        {data.map((val, ind) => (
          <div className="card" key={ind}>
            <figure>
              <img src={enrollSeesion[0].img} alt="enroll" />
            </figure>
            <div className="textWrap">
              <h5>{val?.session?.title}</h5>
              <p>
                {val?.session?.about}
                <span>{enrollSeesion[0].btn}</span>
              </p>
            </div>

            <div className="starHolder">
              <span>{val?.session?.coach?.firstName + " " + val?.session?.coach?.lastName}</span>
              <figure>
                <img src={stars} alt="stars" />
              </figure>
            </div>
          
          </div>
        ))}
      </div>
    </CardsWrap>
  ) : (
    <CardsWrap>
      <div className="cardHolder">
        {data.map((val, ind) => (
          <div className="card" key={ind}>
            <figure>
              <img src={val.img} alt="enroll" />
            </figure>
            <div className="textWrap">
              <h5>{val.title}</h5>
              <p>
                {val.para}
                <span>{val.btn}</span>
              </p>
            </div>

            <div className="starHolder">
              <span>{val.author}</span>
              <figure>
                <img src={stars} alt="stars" />
              </figure>
            </div>
            <Button width="189px" onClick={click}>
              Enroll Group Session
            </Button>
          </div>
        ))}
      </div>
    </CardsWrap>
  );
};

export default Cards;
