import React from "react";
import { Fragment } from "react";
import profileStyles from "./Profile.module.css";

import profilePhoto from "../assets/images/profile.png";

const Profile = () => {
  return (
    <Fragment>
      <section className={profileStyles.profile_section}>
        <div>
          <img src={profilePhoto} alt="Profile of Aldrin Basa"></img>
        </div>
        <div>
          <p className={profileStyles.greeting}>
            Hi, I'm <span>Aldrin Basa</span>
          </p>
          <h2>Software Developer</h2>
          <p className={profileStyles.profile}>
            Chemical Engineering graduate with a strong passion for programming
            and software development. Experienced in software development with a
            background in web technologies (React, Angular, Flutter, and Flask),
            MySQL, Python, C#, and Java. Highly analytical, motivated, and
            skilled at solving programming and chemical engineering problems.
            Can work well both independently and in a team.
          </p>
        </div>
        <div className={profileStyles.explore}>
          <button>Explore</button>
        </div>
      </section>
    </Fragment>
  );
};

export default Profile;
