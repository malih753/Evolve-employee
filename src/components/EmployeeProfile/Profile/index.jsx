import React, { useState } from "react";
import { ProfileHold } from "./Profile.styles";
import BG from "../../../assets/profile/background.png";
import Logo from "../../../assets/profile/logo.png";
import stars from "../../../assets/sessions/stars.png";
import Button from '../../Button'

const Profile = () => {
  const [bgImage, setBgImage] = useState(BG); 
  const [logoImage, setLogoImage] = useState(Logo); 

  const handleBgImageChange = (event) => {
    if (event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setBgImage(newImage);
    }
  };

  const handleLogoImageChange = (event) => {
    if (event.target.files[0]) {
      const newImage = URL.createObjectURL(event.target.files[0]);
      setLogoImage(newImage);
    }
  };

  return (
    <ProfileHold>
      <div className="bgImg" onClick={() => document.getElementById('bgImageInput').click()}>
        <img src={bgImage} alt="Profile background" />
        <input
          type="file"
          id="bgImageInput"
          style={{ display: 'none' }}
          onChange={handleBgImageChange}
          accept=".jpg, .jpeg, .png" // Accept jpg, jpeg, and png formats
        />
      </div>
      <div className="logo" onClick={() => document.getElementById('logoInput').click()}>
        <figure>
          <img src={logoImage} alt="Profile logo" />
          <input
            type="file"
            id="logoInput"
            style={{ display: 'none' }}
            onChange={handleLogoImageChange}
            accept=".jpg, .jpeg, .png" // Accept jpg, jpeg, and png formats
          />
        </figure>
      </div>
      <div className="textxWrap">
        <div className="text">
          <h2>Rahul Wagh</h2>
          <p>Talent Management Sessions</p>
          <strong>Human Rights | Women Empowerment</strong>
        </div>
        <div className="review">
          <figure>
            <img src={stars} alt="stars" />
          </figure>
          <span>20+ Reviews</span>
        </div>
      </div>
      <div className="btn">
        <Button width="208px">Schedule</Button>
      </div>
    </ProfileHold>
  );
};

export default Profile;
