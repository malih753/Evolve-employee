import React from "react";
import { ProfileWrapper } from "./Profile.styles";
import RightSideBar from "../rightSideBar";
import Comment from "../rightSideBar/Comment";
import Blog from "../rightSideBar/Blog";
import UpgradeCourse from "../Sidebar/UpgradeCourse";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import {Educationdata, Experiencedata} from '../Constant/Data'
import Certificate from "./Certificate";
import Session from "./Certificate/Session";
const EmployeeProfile = () => {
  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile />
        <Session/>
        <About/>
        <Analysis/>
        <Skills/>
        <Education data={Experiencedata}/>
        <Education data={Educationdata}/>
        <Certificate />
        <Rating/>
      </div>
      <div className="rightSideBar">
        <RightSideBar>
          <div className="comment">
            <Comment />
          </div>
          <div className="blog">
            <Blog />
          </div>
          <div className="course">
            <UpgradeCourse />
          </div>
        </RightSideBar>
      </div>
    </ProfileWrapper>
  );
};

export default EmployeeProfile;
