import React from "react";
import { UserProvider } from "../../../context/UserContext";
import UsersFilter from "./UsersFilter";

const IndexR = () => {
  return (
    <UserProvider >
      <UsersFilter/>
    </UserProvider>
  );
};

export default IndexR;