import React from "react";
import LogementList from "../components/LogementList";
import BannerHome from "../components/BannerHome";

const Home = () => {
  return (
    <main className="main-home">
      <BannerHome />
      <LogementList />
    </main>
  );
};

export default Home;
