import React from "react";
import { CoachingWrap } from "./Coach.styles";
import stars from "../../../assets/home/session/stars.png";
import { coachingProfile } from "../../Constant/Data";
import { useNavigate } from "react-router-dom";
const CoachingProfile = () => {
  const navigate = useNavigate();
  const ProfileOpen = () =>{
    navigate('/profile');
  }
  return (
    <CoachingWrap>
        <h4 className="headingWrap">Coach Profiles</h4>
      <div className="cardHolder">
        {coachingProfile.map((value, index) => (
          <div className="card" key={index} onClick={ProfileOpen}>
            <div className="logoWrap">
              <div className="imgHolder">
                <img src={value.img} alt="logo" />
              </div>
              <div className="review">
                <img src={stars} alt="stars" />
                <span>50 reviews</span>
              </div>
            </div>
            <div className="textContent">
              <h5>{value.name}</h5>
              <span>{value.type}</span>
            </div>
            <div className="sessions">
              <span>Uploaded Sessions: {value.sessions} </span>
              <span>Enrolled Students: : {value.uploaded}</span>
            </div>
          </div>
        ))}
      </div>
    </CoachingWrap>
  );
};

export default CoachingProfile;
