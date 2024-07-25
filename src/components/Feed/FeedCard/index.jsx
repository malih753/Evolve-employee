import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imag from "../../../assets/blog/blogLogo.png";
import comment from "../../../assets/blog/comment.png";
import like from "../../../assets/blog/like.png";
import report from "../../../assets/blog/report.png";
import { FeedCardWrap } from "./FeedCard.styles";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";
const FeedCard = ({ data,setRefresh,currentUser }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };
  const handleLike = async (id) => {
    try {
      const res = await axios.put(
        `${serverDomain}/forum/${data.id}/toggleLike`,
        { userId: currentUser },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res);
      setRefresh(prev => !prev)
    } catch (error) {
      console.log(error);
    }
  };
  const value = {
    para: "The saying “an emergency on your part does not constitute an emergency on mine” is such a terrible thing to think. Shouldn’t we try to be, at the very least, empathetic?How about instead, realizing somebody is in trouble and trying to help them get out of situation which is causing them severe mental stress?",
    fullPara:
      "This is a short paragraph that needs to be expanded to show the full content. Here is the full content that is revealed when the paragraph is expanded. It contains more detailed information about the post.",
  };

  return (
    <FeedCardWrap>
      <div className="post">
        <div className="blogHeader">
          <div className="logo">
            <img src={imag} alt="blog" />
            <div className="titleHolder">
              <h5>Works at TCS</h5>
              <div className="tags">
                    <span className="tag">{data?.tags}</span>
                
              </div>
            </div>
          </div>
          <div className="icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="para">
          <p>
            {/* {isExpanded
              ? value.para + value.fullPara
              : `${value.para.substring(0, 200)}...`}
            <span onClick={handleToggle}>
              {isExpanded ? "see less" : "see more"}
            </span> */}
            {data?.title || "School Management System"}
          </p>
        </div>
        <div className="flex">
          <div className="replyWrap">
            <button className="reply">
              <img src={like} alt="like" onClick={handleLike}/>
              Like
            </button>
            <button className="reply">
              <img src={comment} alt="comment" />
              Comment
            </button>
            <button className="reply">
              <img src={report} alt="report" />
              Report
            </button>
          </div>
          <div className="counts">
            <span>{data?.likeCount} likes | {data?.reportCount} reports</span>
          </div>
        </div>
      </div>
    </FeedCardWrap>
  );
};

export default FeedCard;
