import React, { useEffect, useState } from "react";
import CoachingCategory from "./coachingCategory";
import EnrollSession from "./Enroll";
import CoachingProfile from "./CoachingProfile";
import Schedule from "./Schedule";
import Trending from "./Trending";
import { HomeWrap } from "./Home.styles";
import Comment from "../rightSideBar/Comment/index";
import RightSideBar from "../rightSideBar";
import Blog from "../rightSideBar/Blog";
import UpgradeCourse from "../Sidebar/UpgradeCourse";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [groupSessions, setGroupSessions] = useState({});
  const [coachProfiles, setCoachProfiles] = useState([]);
  const [shuffledGroupSessions, setShuffledGroupSessions] = useState([]);
  const handleViewAll = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`${serverDomain}/home`);
        setGroupSessions(response.data?.data?.randomGroupSession);
        console.log("group", response.data?.data?.randomGroupSession);

        setCoachProfiles(response.data?.data?.coachProfiles);
        setShuffledGroupSessions(response.data?.data?.shuffledGroupSessions);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      {activeSection === null ? (
        <HomeWrap>
          <div className="home">
            <div className="discussion">
              <Comment />
            </div>
            <CoachingCategory />
            <EnrollSession
              onViewAll={() => handleViewAll("enroll")}
              showAll={false}
              groupSessions={groupSessions}
            />
            <CoachingProfile
              onViewAll={() => handleViewAll("coaching")}
              showAll={false}
              coachProfiles={coachProfiles}
            />
            <Schedule shuffledGroupSessions={shuffledGroupSessions} />
            <Trending />
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
        </HomeWrap>
      ) : activeSection === "enroll" ? (
        <EnrollSession
          onViewAll={() => handleViewAll("enroll")}
          showAll={true}
        />
      ) : activeSection === "coaching" ? (
        <CoachingProfile
          onViewAll={() => handleViewAll("coaching")}
          showAll={true}
        />
      ) : null}
    </>
  );
};

export default Home;
