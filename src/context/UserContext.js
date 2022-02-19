import React, { createContext, useState, useEffect } from "react";
import {
  GET_USERS,
  GET_USER_BY_ID,
  GET_USERS_BY_ID,
} from "../graphql/user/querys";
import toast from "react-hot-toast";
import { useQuery } from "@apollo/client";
import { filterObjectOnlyId } from "../utils/generalFunctions";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [preViewPDF, setPreViewPDF] = useState(false);
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [createUser, setCreateUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const { data, error, loading, refetch } = useQuery(GET_USERS);
  const [listUserFiltered, setListUserFiltered] = useState(data);
  const [search, setSearch] = useState("");
  const [_id, setID] = useState("");
  const [byId, setById] = useState(false);
  const [listToPDF, setListToPDF] = useState([]);
  const {
    data: dataQueryOneUserById,
    error: errorQueryOneUserById,
    loading: loadingQueryOneUserById,
  } = useQuery(GET_USER_BY_ID, { variables: { _id } });

  const {
    data: dataQueryManyUserById,
    error: errorQueryManyUserById,
    loading: loadingQueryManyUserById,
  } = useQuery(GET_USERS_BY_ID, {
    variables: { _id: filterObjectOnlyId(listToPDF) },
  });

  useEffect(() => {
    if (data) {
      setListUserFiltered(data.Users);
      setID(data.Users[0]._id);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios", { position: "top-right" });
    }
  }, [error, errorQueryOneUserById]);

  if (loading || loadingQueryOneUserById) {
    return <div>Loding...</div>;
  }
  return (
    <UserContext.Provider
      value={{
        statusFilter,
        setStatusFilter,
        createUser,
        setCreateUser,
        editUser,
        setEditUser,
        data,
        error,
        loading,
        refetch,
        listUserFiltered,
        setListUserFiltered,
        _id,
        setID,
        dataQueryOneUserById,
        errorQueryOneUserById,
        loadingQueryOneUserById,
        byId,
        setById,
        search,
        setSearch,
        listToPDF,
        setListToPDF,
        preViewPDF,
        setPreViewPDF,
        dataQueryManyUserById
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
