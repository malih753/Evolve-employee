import React from "react";
import { CoachingWrapper } from "./CoachingCategory.styles";
import { Coaching } from '../../Constant/Data';

const CoachingCategory = () => {
  return (
    <CoachingWrapper>
      <div className="headingWrap">Coaching Category</div>
      <div className="coachingHolder">
      {Coaching.map((value, index) => (
        <div className="coachingCard" key={index}>
          <img src={value.img} alt={value.name} />
          <strong>{value.title}</strong>
        </div>
      ))}
      </div>
    </CoachingWrapper>
  );
};

export default CoachingCategory;
