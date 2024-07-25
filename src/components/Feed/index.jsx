import React, { useEffect, useState } from "react";
import { FeedWrap } from "./Feed.styles";
import Comment from "../rightSideBar/Comment";
import FeedCard from "./FeedCard";
import CoachingCategory from "./CoachingCategory";
import CoachProfile from "./CoachProfile";
import UpcomingSession from "./UpcomingSession";
import Sessions from "./Sessions";
import GroupSession from "./GroupSession";
import TrendingSession from "./TrendingSession";
import CardProgress from "./CardProgress";
import axios from "axios";
import { serverDomain } from "../../constant/server-domain";
import { useAuth } from "../../Context/AuthContext";

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const { currentUser, companyId } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${serverDomain}/forum?page=1&count=10&userId=${currentUser}&companyId=${companyId}`
        );

        console.log(res);
        setFeed(res.data.forums);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [refresh]);

  return (
    <FeedWrap>
      <div className="feed">
        <div className="comment">
          <Comment />
        </div>

        {feed
          ? feed.map((f, i) => {
              if (f.type === "Discussion" || f.type === "Question") {
                return (
                  <div key={i} className="FeedCard">
                    <FeedCard
                      data={f}
                      setRefresh={setRefresh}
                      currentUser={currentUser}
                    />
                  </div>
                );
              } else if (f.type === "Poll") {
                return (
                  <div key={i} className="cardProgress">
                    <CardProgress
                      data={f}
                      setRefresh={setRefresh}
                      currentUser={currentUser}
                    />
                  </div>
                );
              }
            })
          : null}

        <div className="FeedCard">
          <FeedCard />
        </div>
        <div className="cardProgress">
          <CardProgress />
        </div>
      </div>
      <div className="rightSideBar">
        <div className="coachingCategory">
          <CoachingCategory />
          <CoachProfile />
          <UpcomingSession />
          <Sessions />
          <GroupSession />
          <TrendingSession />
        </div>
      </div>
    </FeedWrap>
  );
};

export default Feed;
