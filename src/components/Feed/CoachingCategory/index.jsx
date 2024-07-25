import React from "react";
import { CoachingCategoryWrap } from "./category.styles";
import { IoIosArrowForward } from "react-icons/io";
import {FeedCaochingCategory} from '../../Constant/Data';
const CoachingCategory = () => {
  return (
    <CoachingCategoryWrap>
      <div className="headingWrapper">
        <h5>Coaching Categories</h5>
        <div className="arrowIcon">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="cardWrap">
        {FeedCaochingCategory.map((value, index)=>(
             <div className="card" key={index}>
             <img src={value.img} alt="feed coach" />
             <strong>{value.title}</strong>
           </div>
        ))}
       
      </div>
    </CoachingCategoryWrap>
  );
};

export default CoachingCategory;
