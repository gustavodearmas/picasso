import React, { useContext, useEffect, useState } from "react";
import CardDataList from "../CardDataList";
import UserContext from "../../../context/UserContext";
import HeaderContent from "../HeaderContent";
import AvatarImage from "../../../images/no-avatar.png";
import Line from "../../../components/Line";
import ButtonBorder from "../../../components/buttoms/buttonBorder";
import ExportDataPDF from "./ExportDataPDF";

const UsersExportPDF = () => {
  const {
    setById,
    data,
    setListUserFiltered,
    search,
    listUserToPDF,
    preViewPDF,
    setPreViewPDF,
    dataByID,
  } = useContext(UserContext);
  const [valueKey, setValueKey] = useState([]);

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

  useEffect(() => {
    if (dataByID) {
      setValueKey([Object.keys(dataByID.User)]);
    }
  }, [dataByID]);

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
            {listUserToPDF.length !== 0
              ? listUserToPDF.map((item) => {
                  return (
                    <div className="flex flex-col justify-center border rounded-md text-sm mb-1 px-4 py-1 mx-1 ">
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
          <Line />
          <span className="py-2">Filtros: </span>
          <div className="flex flex-wrap justify-left h-20 overflow-auto">
            {valueKey[0] &&
              valueKey[0].slice(2).map((o) => {
                return <ItemsCheck o={o} />;
              })}
          </div>
        </div>
      </div>
      {preViewPDF ? (
        <ExportDataPDF setPreViewPDF={setPreViewPDF} data={listUserToPDF} />
      ) : (
        <></>
      )}
    </>
  );
};

const ItemsCheck = ({ o }) => {
  return (
    <div className="flex items-center mr-2">
      <label htmlFor="" className="mr-1">
        {o}
      </label>
      <input type="checkbox" name="nameUser" />
    </div>
  );
};

export default UsersExportPDF;
