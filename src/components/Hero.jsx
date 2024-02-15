import React from "react";
import ProfileCard from "./ProfileCard";

function Hero({ admins, members }) {
  return (
    <div className="hero">
      <p className="hero-text"> Administrators</p>
      <div className="admin-list">
        {admins.map((admin, i) => (
          <ProfileCard key={i} user={admin} />
        ))}
      </div>
      <hr />
      <p className="hero-text"> Members</p>
      <div className="admin-list">
        {members.map((member, i) => (
          <ProfileCard key={i} user={member} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
