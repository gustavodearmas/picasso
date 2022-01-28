import React, { useContext, useEffect } from "react";
import CardDataList from "../CardDataList";
import UserContext from "../../../context/UserContext";
import HeaderContent from "../HeaderContent";
import AvatarImage from "../../../images/no-avatar.png";
import ButtomBig from "../../../components/buttoms/buttomBig";
import Line from "../../../components/Line";
import ButtonBorder from "../../../components/buttoms/buttonBorder";

const UsersExportPDF = () => {
  const { setById, data, setListUserFiltered, search, listUserToPDF } =
    useContext(UserContext);

  console.log("lf", listUserToPDF.length);

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
            <ButtonBorder text="Visualizar" />
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
        </div>
      </div>
    </>
  );
};
export default UsersExportPDF;
