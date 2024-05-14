import React from "react";
import Header from "../components/Header.js";
import Transactions from "../components/Transactions.js";
import InfoSection from "../components/InfoSection.js";
import { useNavigation } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <div className="ml-8 flex gap-10 flex-col">
        <InfoSection />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;
