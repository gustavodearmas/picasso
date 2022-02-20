import React, { useContext, useEffect, useState } from "react";
import CardDataList from "../CardDataList";
import UserContext from "../../../context/UserContext";
import HeaderContent from "../HeaderContent";
import AvatarImage from "../../../images/no-avatar.png";
import Line from "../../../components/Line";
import ButtonBorder from "../../../components/buttoms/buttonBorder";
import { Enum_User_Key } from "../../../utils/enums";
import ModulePDF from "../../../components/ModulePDF";
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

  return (
    <>
      <HeaderContent />
      <br />
      <div className="flex">
        <div className="md:flex-1 bg-gray-50">
          <CardDataList />
        </div>
        <div className="flex flex-col md:flex-1 bg-gray-50 px-4 py-7 shadow-md text-xs">
          <div className="flex justify-between items-center -mb-2">
            <h5 className="font-bold ">Listado para exportar</h5>
            <ButtonBorder
              text="Visualizar"
              onclick={() => setPreViewPDF(true)}
            />
          </div>
          <Line />
          <div className="flex flex-wrap justify-center content-center h-full">
            {listToPDF.length !== 0
              ? listToPDF.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="flex flex-col justify-center border border-parotia-3 rounded-md text-sm mb-1 px-4 py-1 mx-1 "
                    >
                      <div className="flex justify-center">
                        <img
                          className="object-cover object-center w-10 h-10 mt-1"
                          src={AvatarImage}
                          alt=""
                        />
                      </div>
                      <span className="text-xs">
                        {item.nameUser} {item.lastName}
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
    </>
  );
};

export default UsersExportPDF;