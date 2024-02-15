import React from "react";

function ProfileCard({ user }) {
  return (
    <div className="info-card">
      <img src={user.img} className="profile-pic"></img>
      <div>
        <p className="name">
          {user.first_name} {user.last_name}
        </p>
        <p className="email">{user.email}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
