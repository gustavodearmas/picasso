import React, { useContext, useState, useEffect } from "react";
import ButtomBig from "../../components/buttoms/buttomBig";
import UserContext from "../../context/UserContext";
import ImportData from "./ImportData";
import CreateUser from "./CreateUser";

const HeaderContent = () => {
  const { setCreateUser, createUser, search, setSearch, setListUserFiltered, data } =
    useContext(UserContext);

    useEffect(() => {
      if (data) {
        setListUserFiltered(
          data.Users.filter((element) => {
            return JSON.stringify(element)
              .toLowerCase()
              .includes(search.toLowerCase());
          })
        );
      }
    }, [search]);

  return (
    <div className="flex justify-center md:justify-end w-full">
      <div className="flex flex-col-reverse md:flex-row items-center w-auto text-sm ">
        <input
          className="py-2 rounded w-80 text-xs pl-8 border-1 border-gray-200 shadow-md outline-none"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <div className="flex justify-end mb-2 md:mb-0 w-full md:w-auto">
          <ButtomBig
            text="Nuevo"
            onclick={() => {
              setCreateUser(true);
            }}
          />
          <ImportData />
        </div>
      </div>
      {createUser ? <CreateUser /> : <></>}
    </div>
  );
};

export default HeaderContent;
