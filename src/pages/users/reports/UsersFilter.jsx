import React, { useContext, useEffect, useState } from "react";
import CardDataList from "../CardDataList";
import UserContext from "../../../context/UserContext";
import HeaderContent from "../HeaderContent";
import AvatarImage from "../../../images/no-avatar.png";
import Line from "../../../components/ultils/Line";
import ButtonBorder from "../../../components/buttoms/buttonBorder";
import { Enum_User_Key } from "../../../utils/enums";
import ModulePDF from "../../../components/ultils/ModulePDF";
import ButtonBackground from "../../../components/buttoms/ButtonBackground";
const UsersExportPDF = () => {
  const {
    setById,
    data,
    setListUserFiltered,
    search,
    listToPDF,
    preViewPDF,
    setPreViewPDF,
    dataQueryManyUserById,
    setListToPDF
  } = useContext(UserContext);

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

  useEffect(() => {
    setById(true);
  }, []);

  const deleteItem = (_idUser) => {
    const item = listToPDF.filter((items) => items._id !== _idUser);
      setListToPDF(item);
  }

  return (
    <div className="flex-col">
      <div>
      <HeaderContent />
      <br />
      </div>
      <div className="flex">
        <div className="hidden lg:flex lg:flex-1 ">
          <CardDataList />
        </div>
        <div className="flex-col lg:flex-1 bg-gray-50 rounded-md px-4 py-7 shadow-md text-xs w-full">
          <div className="flex justify-between items-center -mb-2">
            <span className="font-bold">Listado para exportar</span>
            <ButtonBackground
              text="Visualizar"
              onclick={() => setPreViewPDF(true)}
            />
          </div>
          <Line />
          <div className="flex flex-wrap justify-center content-center h-full pt-3">
            {listToPDF.length !== 0
              ? listToPDF.map((item, key) => {
                console.log("item: ", item)
                  return (
                    <div
                      key={key}
                      className="flex relative flex-col justify-center bg-white shadow-lg rounded-xl text-sm m-1 px-4 py-1 w-32 "
                    >
                      <ButtonBorder 
                        icon="fal fa-times-circle"
                        cssAdd={"justify-end, absolute top-2 right-2"}
                        onclick={() => 
                          deleteItem(item._id)
                        }
                      />
                      <div className="flex justify-center">
                        <img
                          className="object-cover object-center w-10 h-10 my-2"
                          src={AvatarImage}
                          alt=""
                        />
                      </div>
                      <span className="text-center text-xs">
                        {item.nameUser + " " + item.lastName}
                      </span>
                    </div>
                  );
                })
              : "Seleccione los usuarios a impirmir"}
          </div>
        </div>
      </div>
      {preViewPDF ? (
        <ModulePDF
          keyValueItemsCheck={dataQueryManyUserById.UsersById[0]}
          data={dataQueryManyUserById}
          setCloseModal={setPreViewPDF}
          enumValue={Enum_User_Key}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default UsersExportPDF;
