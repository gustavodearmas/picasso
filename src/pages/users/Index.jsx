import React from "react";
import HeaderContent from "./HeaderContent";
import CardDataList from "./CardDataList";
import CardDetailData from "./CardDetaillData";
import { UserProvider } from "../../context/UserContext";



const Index = () => {
  return (
    <UserProvider >
      <HeaderContent />
      <div className="flex flex-col lg:flex-row mt-4 h-full">
        <CardDataList />
        <CardDetailData />
      </div>
    </UserProvider>
  );
};

export default Index;
