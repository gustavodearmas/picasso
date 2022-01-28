import React from "react";
import { UserProvider } from "../../../context/UserContext";
import UsersExportPDF from "./UsersExportPDF";

const IndexR = () => {
  return (
    <UserProvider >
      <UsersExportPDF/>
    </UserProvider>
  );
};

export default IndexR;