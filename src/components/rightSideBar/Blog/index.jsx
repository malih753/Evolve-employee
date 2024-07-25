import React, { useState } from "react";
import { BlogWrap } from "./Blog.styles";
import Button from "../../Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BlogData } from '../../Constant/Data';
import like from '../../../assets/blog/like.png';
import comment from '../../../assets/blog/comment.png';
import report from '../../../assets/blog/report.png';

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});

  const handleToggle = (index) => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <BlogWrap>
      <div className="post postBtn">
        <Button type="transparent">Anonymous Posts</Button>
      </div>
      {BlogData.map((value, index) => (
        <div className="post" key={index}>
          <div className="blogHeader">
            <div className="logo">
              <img src={value.img} alt="blog" />
              <div className="titleHolder">
                <h5>{value.title}</h5>
                <div className="tags">
                  <span>{value.tags}</span>
                </div>
              </div>
            </div>
            <div className="icon">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="para">
            <p>{expandedPosts[index] ? value.fullPara : `${value.para.substring(0, 100)}...`}</p>
            <Button type="transparent" onClick={() => handleToggle(index)}>
              {expandedPosts[index] ? "see less" : "see more"}
            </Button>
          </div>
          <div className="replyWrap">
            <button className="reply">
              <img src={like} alt="like" />
              Like
            </button>
            <button  className="reply">
              <img src={comment} alt="comment" />
              Comment
            </button>
            <button  className="reply">
              <img src={report} alt="report" />
              Report
            </button>
          </div>
        </div>
      ))}
    </BlogWrap>
  );
};

export default Blog;
