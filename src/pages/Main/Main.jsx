import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TitleOffer from "../../components/Offers/TitleOffer/TitleOffer";
import Benefits from "../../components/Offers/Benefits/Benefits";
import Balls from "../../components/Balls/Balls";

const Main = () => {
  return (
    <>
      <Header />
      <main className="offers__wrapper">
        <div className="offers container">
          <TitleOffer />
          <Benefits />
        </div>
      </main>
      <Footer />
      <Balls />
    </>
  );
};

export default Main;
