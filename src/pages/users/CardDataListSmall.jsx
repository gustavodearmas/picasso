import React, { useContext, useEffect, useState } from "react";
import SelectAllDelete from "./SelectAllDelete";
import AvatarImage from "../../images/no-avatar.png";
import { Enum_StatusUsers } from "../../utils/enums";
import UserContext from "../../context/UserContext";

const CardDataListSmall = () => {
  const {
    statusFilter,
    setStatusFilter,
    data,
    listUserFiltered,
    setID,
    setListUserFiltered,
    byId,
    setById,
    setSearch,
    listToPDF,
    setListToPDF,
  } = useContext(UserContext);

  useEffect(() => {
    setById(false);
  }, []);

  useEffect(() => {
    if (data && statusFilter === "TODOS") {
      setListUserFiltered(data.Users);
    } else {
      if (data) {
        setListUserFiltered(
          data.Users.filter((d) => d.statusUser + "S" === statusFilter)
        );
      }
    }
  }, [statusFilter, data, setListUserFiltered]);

  return (
    <div className="lg:hidden overflow-y-auto">
      <div className="shadow-md rounded mt-4 bg-gray-50">
        <div className="flex flex-col divide-y divide-gray-200 overflow-auto -mt-3">
          {listUserFiltered?.map((e) => {
            return (
              <div key={e._id}>
                <ItemsUser
                  _idUser={e._id}
                  nameUser={e.nameUser}
                  lastName={e.lastName}
                  statusUser={e.statusUser}
                  setID={setID}
                  photo={e.photo}
                  byId={byId}
                  setSearch={setSearch}
                  listToPDF={listToPDF}
                  setListToPDF={setListToPDF}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ItemsUser = ({
  _idUser,
  nameUser,
  lastName,
  statusUser,
  photo,
  setID,
  byId,
  setSearch,
  listToPDF,
  setListToPDF,
}) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      setListToPDF([
        ...listToPDF,
        { _id: _idUser, nameUser: nameUser, lastName: lastName },
      ]);
    } else {
      const deleteItem = listToPDF.filter((item) => item._id !== _idUser);
      setListToPDF(deleteItem);
    }
  }, [check]);

  const byIdF = () => {
    if (byId) {
      //console.log("card", byId)
      return null;
    } else {
      //console.log("else", byId)
      setID(_idUser);
      setSearch("");
    }
  };
  return (
    <div className="flex items-center h-1/12 bg-gray-50 hover:bg-gray-100">
      <div className="flex justify-center content-center w-1/24 px-4">
        <input
          className="h-3 w-3 rounded-full"
          type="checkbox"
          onChange={() => setCheck(!check)}
        />
      </div>
      <div
        className="flex flex-row h-12 items-center px-2 w-23/24"
        onClick={() => {
          byIdF();
        }}
      >
        <div className="w-3/24">
          <div className="flex mx-auto rounded-full bg-gray-200 border-1 border-gray-100 justify-center w-8 h-8">
            <img
              className="object-cover object-center w-5 h-5 mt-1"
              src={AvatarImage}
              alt=""
            />
          </div>
        </div>
        <div className="w-20/24 mx-1">
          <span className="text-xs font-black text-menta-200">
            {nameUser} {lastName}
          </span>
        </div>

        <div className="h-1/24">
          {statusUser === Enum_StatusUsers.ACTIVO ? (
            <div className="h-2 w-2 rounded-full border-2 border-green-400"></div>
          ) : (
            <div className="h-2 w-2 rounded-full border-2 border-red-400"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDataListSmall;
