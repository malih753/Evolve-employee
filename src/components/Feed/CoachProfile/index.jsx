import React from "react";
import { CoachingCategoryWrap } from "../CoachingCategory/category.styles";
import { CoachingProfileWrap } from "./CoachProfile.styles";
import { IoIosArrowForward } from "react-icons/io";
import { FeedCaochProfile } from "../../Constant/Data";
import stars from "../../../assets/home/session/stars.png";
import Button from "../../Button";
const CoachProfile = () => {
  return (
    <CoachingCategoryWrap>
      <CoachingProfileWrap>
        <div className="headingWrapper">
          <h5>Coach Profiles</h5>
          <div className="arrowIcon">
            <IoIosArrowForward />
          </div>
        </div>
        <div className="profileCard">
          {FeedCaochProfile.map((value, index) => (
            <div className="card" key={index}>
              <div className="profile">
                <img src={value.img} alt="profile" />
                <div className="textWrap">
                  <h5>{value.title}</h5>
                  <span>{value.subTitle}</span>
                  <div className="review">
                    <img src={stars} alt="stars" />
                    <span>{value.review} review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button type="transparent">View All</Button>
      </CoachingProfileWrap>
    </CoachingCategoryWrap>
  );
};

export default CoachProfile;
