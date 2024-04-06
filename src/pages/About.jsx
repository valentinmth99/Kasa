import React from "react";

import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import aboutData from "../data/aboutCollapseData.json";

const About = () => {
  return (
    <main>
      <BannerAbout />
      <Collapse data={aboutData} className="about-container" />
    </main>
  );
};

export default About;
