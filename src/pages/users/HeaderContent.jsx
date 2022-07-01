import React, { useContext, useState, useEffect } from "react";
import ButtomBig from "../../components/buttoms/buttomBig";
import UserContext from "../../context/UserContext";
import ImportData from "./ImportData";
import CreateUser from "./CreateUser";
import CardDataListSmall from "./CardDataListSmall";

const HeaderContent = () => {
  const { setCreateUser, createUser, search, setSearch, setListUserFiltered, data, importUser, setImportUser } =
    useContext(UserContext);
  const [searchOnMovile, setSearchOnMovile]=useState(false);
  console.log("searchOnMovile: ", searchOnMovile)
  console.log("search: ", search)

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
  if (search.length === 0){
    setSearchOnMovile(false)
  }else{
    setSearchOnMovile(true)
  }
  }, [search])
  

  return (
    <>
    <div className="lg:flex lg:justify-end">
        <input
          className="rounded w-full lg:w-1/2 xl:w-8/24 h-10 pl-5 text-sm border-1 border-gray-200 shadow-md outline-none"
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      <div className="hidden  lg:flex ">
        <ButtomBig
          text="Nuevo"
          onclick={() => {
            setCreateUser(true);
          }}
        />
         <ButtomBig
        text="Importar"
        bg="bg-gray-700"
        onclick={() => {
          setImportUser(true);
        }}
      />
      
      </div>
    </div>
  {searchOnMovile ? <CardDataListSmall/> : <></>}
  {createUser ? <CreateUser/> : <></>}
  {importUser ? <ImportData setImportUser={setImportUser} /> : <></>}
     
  
     </>
  );
};

export default HeaderContent;

{/* <div className="flex md:flex-row items-center text-sm ">
    
<div className="flex justify-end mb-2 md:mb-0 w-full md:w-auto">
 
</div>
</div>
{createUser ? <CreateUser /> : <></>} */}