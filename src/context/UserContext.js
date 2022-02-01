import React, { createContext, useState, useEffect } from "react";
import { GET_USERS, GET_USER_BY_ID } from "../graphql/user/querys";
import toast from "react-hot-toast";
import { useQuery } from "@apollo/client";

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
  const [listUserToPDF, setListUserToPDF] = useState([]);
  const {
    data: dataByID,
    error: errorByID,
    loading: loadingByID,
  } = useQuery(GET_USER_BY_ID, { variables: { _id } });

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
  }, [error, errorByID]);

  if (loading || loadingByID) {
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
        dataByID,
        errorByID,
        loadingByID,
        byId,
        setById,
        search,
        setSearch,
        listUserToPDF, 
        setListUserToPDF, 
        preViewPDF, 
        setPreViewPDF
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
