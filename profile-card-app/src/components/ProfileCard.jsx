import React from "react";

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;
