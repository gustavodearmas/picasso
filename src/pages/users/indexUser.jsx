import React, { useState, useEffect } from "react";
import AvatarImage from "../../images/no-avatar.png";
import ButtonBorder from "../../components/buttoms/buttonBorder";
import ButtomBackground from "../../components/buttoms/buttomBackground";
import Line from "../../components/Line";
import IconKeyValue from "../../components/user/iconKeyValue";
import IconKeyValueX2 from "../../components/user/iconKeyValueX2";
import IconKeyValue2x1 from "../../components/user/iconKeyValue2x1";
import CreateUser from "./createUser";
import EditUser from "./editUser";
import ButtomBig from "../../components/buttoms/buttomBig";
import { GET_USERS, GET_USER_BY_ID } from "../../graphql/user/querys";
import { DISABLE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import { useQuery, useMutation } from "@apollo/client";
import { calculateAge } from "../../utils/generalFunctions";
import DisableRecord from "../../components/toast/disable";
import ImportData from "./importData";
import { Enum_StatusUsers } from "../../utils/enums";

const IndexUser = () => {
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [createUser, setCreateUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const { data, error, loading, refetch: refetchUsers } = useQuery(GET_USERS);
  const [listUser, setListUSer] = useState(data);
  const [_id, setID] = useState("");
  const {
    data: dataByID,
    error: errorByID,
    loading: loadingByID,
    refetch,
  } = useQuery(GET_USER_BY_ID, { variables: { _id } });
  const [
    disableUser,
    {
      data: dataDisableUser,
      loading: loadingDisableUser,
      error: errorDisableUser,
    },
  ] = useMutation(DISABLE_USER);

  useEffect(() => {
    if(data && statusFilter==="TODOS"){
      setListUSer(data.Users);
    }else{
      if(data){setListUSer(data.Users.filter(d=> d.statusUser+"S" === statusFilter))}
    }
  }, [statusFilter]);

  useEffect(() => {
    if (listUser) {
      setID(listUser[0]._id);
    }
  }, [listUser]);

  useEffect(() => {
    if (data) {
      setListUSer(data.Users);
    }
  }, [data]);

    // console.log("list: ", listUser)
    console.log("id: ", _id)

  
  useEffect(() => {
    if (dataDisableUser) {
      toast.success("Usuario desactivado", { position: "top-right" });
      refetchUsers();
    }
  }, [dataDisableUser]);

  useEffect(() => {
    if (error) {
      toast.error("Error consultando los usuarios", { position: "top-right" });
    }
    // if (errorByID) {
    //   toast.error("Error consultando el usuario", { position: "top-right" });
    // }
    if (errorDisableUser) {
      toast.error("Error al intentar desactivar este usuario", {
        position: "top-right",
      });
    }
  }, [error, errorByID, errorDisableUser]);

  const disableUser_ = (data) => {
    toast(
      () => (
        <DisableRecord
          title={`${dataByID.User.nameUser} ${dataByID.User.lastName}`}
          message="¿Estás seguro que quieres eliminar este usuario?"
          onClick={() => {
            disableUser({ variables: data });
          }}
        />
      ),
      { position: "top-right", duration: 2000 }
    );
  };

  if (loading || loadingByID) {
    return <div>Loding...</div>;
  }

  return (
    <>
      {editUser ? (
        <EditUser
          setEditUser={setEditUser}
          dataByID={dataByID}
          refetch={refetchUsers}
        />
      ) : (
        <></>
      )}
      {createUser ? (
        <CreateUser setCreateUser={setCreateUser} refetch={refetchUsers} />
      ) : (
        <></>
      )}

      {/* Header */}
      <div className="flex justify-center md:justify-end w-full">
        <div className="flex flex-col-reverse md:flex-row items-center w-auto text-sm ">
          <input
            className="py-2 rounded w-80 text-xs pl-8 border-1 border-gray-200 shadow-md outline-none"
            type="text"
            placeholder="Buscar..."
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
      </div>
      {/* Header */}

      {/* Content */}
      <div className="h-full flex flex-col lg:flex-row mt-4">
        {/* Card_1 - Lista de usuarios */}
        <div className="md:flex hidden flex-1">
          <div className="h-full w-full shadow-md rounded mr-1 bg-gray-50">
            {/* Cabecera y query de total de registros */}
            <div className="h-3/24 text-xs font-bold divide-y divide-gray-200 pt-8">
              <div className="flex flex-wrap w-full content-end justify-between px-4">
                <div>
                  <label htmlFor="" className="mr-1">Filtro:</label>
                  <select className="focus:outline-none bg-gray-50" name="drop" defaultValue={statusFilter} onChange={(e)=>{
                    setStatusFilter(e.target.value)
                  }}>
                    <option>ACTIVOS</option>
                    <option>INACTIVOS</option>
                    <option>TODOS</option>
                  </select>
                </div>
                <div>
                  {listUser && data ? <span className="pr-2">{`${listUser.length}/${data.Users.length} Usuarios`}</span> : <></>}
                  
                </div>
              </div>
              <div className="mt-4"></div>
            </div>
            {/* Cabecera y query de total de registros */}

            {/* Seleccionar todo y botón de borrar */}
            <div className="h-2/24 divide-y divide-gray-200 ">
              <div className="flex flex-row justify-between items-center px-4 pb-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-xxs italic">Seleccionar todo</span>
                </div>
                <div className="">
                  <ButtonBorder
                    text="Borrar"
                    icon="far fa-trash-alt pr-2"
                    cssAdd="mr-1 hover:border-red-400 hover:text-red-400"
                  />
                </div>
              </div>
              <div></div>
            </div>
            {/* Seleccionar todo y botón de borrar */}

            {/* Componentes de Usuarios */}
            <div className="h-19/24 flex flex-col divide-y divide-gray-200 overflow-auto -mt-3">
              {listUser &&
                listUser.map((e, pos) => {
                  return (
                    <ItemsUser
                      k={pos}
                      _idUser={e._id}
                      nameUser={e.nameUser}
                      lastName={e.lastName}
                      statusUser={e.statusUser}
                      setID={setID}
                      photo={e.photo}
                    />
                  );
                })}
            </div>
            {/* Componentes de Usuarios */}
          </div>
        </div>
        {/* Card_1 - Lista de usuarios */}

        {/* Card_2 - Información de Usuario*/}
        <div className="shadow-md rounded flex-1 bg-gray-50 px-4 py-8 overflow-auto">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center ">
              <img
                className="h-12 w-12 bg-white rounded-full"
                src={AvatarImage}
                alt=""
              />
              <div className="flex flex-col">
                <span className="ml-2 text-sm font-extrabold">
                  Gustavo de Armas
                </span>
                <span className="ml-2 text-xs italic">18 dic de 2021</span>
              </div>
            </div>
            <div className="">
              <ButtomBackground
                text="Email"
                icon="fas fa-envelope-open-text pr-2"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end h-auto -mt-2">
            <ButtonBorder
              icon="far fa-edit"
              cssAdd="mr-1 hover:border-parotia-3 hover:text-parotia-3"
              onclick={() => {
                setEditUser(true);
              }}
            />
            <ButtonBorder
              icon="far fa-trash-alt"
              cssAdd="hover:border-red-400 hover:text-red-400"
              onclick={() => {
                disableUser_({ _id: _id });
              }}
            />
          </div>
          <Line />
          <div className="px-2 pt-4">
            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Identificación"
              value_={dataByID && dataByID.User.identification}
            />
            <IconKeyValue2x1
              icon="fas fa-user"
              key_="Nombre"
              value_={dataByID && dataByID.User.nameUser}
              value_2={dataByID && dataByID.User.lastName}
              value_3=""
            />

            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Ciudad de Nacimiento"
              value_={dataByID && dataByID.User.cityBirth}
            />
            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Nacionalidad"
              value_={dataByID && dataByID.User.nationality}
            />
            <IconKeyValueX2
              icon="fas fa-birthday-cake"
              key_="Fecha de Nacimiento"
              value_={dataByID && dataByID.User.birthDay.slice(0, 10)}
              value_2={
                dataByID && calculateAge(dataByID.User.birthDay.slice(0, 10))
              }
            />
            <IconKeyValue
              icon="fas fa-syringe"
              key_="RH"
              value_={
                dataByID &&
                dataByID.User.rh &&
                dataByID.User.rh.replace("_", " ")
              }
            />

            <IconKeyValue
              icon="fas fa-envelope"
              key_="Email"
              value_={dataByID && dataByID.User.email}
            />
            <IconKeyValueX2
              icon="fas fa-phone-alt"
              key_="Teléfono"
              value_="3286212"
              value_2={dataByID && dataByID.User.phone}
            />
            <IconKeyValue
              icon="fas fa-medkit"
              key_="EPS"
              value_={
                dataByID &&
                dataByID.User.eps &&
                dataByID.User.eps.replace("_", " ")
              }
            />
            <IconKeyValue
              icon="fas fa-hand-holding-usd"
              key_="ARL"
              value_={
                dataByID &&
                dataByID.User.arl &&
                dataByID.User.arl.replace("_", " ")
              }
            />
            <IconKeyValue
              icon="fas fa-blind"
              key_="AFP"
              value_={
                dataByID &&
                dataByID.User.afp &&
                dataByID.User.afp.replace("_", " ")
              }
            />
            <IconKeyValue
              icon="fas fa-map-marker-alt"
              key_="Dirección"
              value_={dataByID && dataByID.User.address}
            />
            <IconKeyValue
              icon="fas fa-arrow-alt-circle-up"
              key_="Estrato"
              value_={dataByID && dataByID.User.strata}
            />
            <IconKeyValueX2
              icon="fas fa-map-marked-alt"
              key_="UPZ/Localidad"
              value_={dataByID && dataByID.User.upz}
              value_2={
                dataByID &&
                dataByID.User.locality &&
                dataByID.User.locality.replace("_", " ")
              }
            />
            <IconKeyValue
              icon="fas fa-arrow-alt-circle-up"
              key_="Contato de Emergencia"
              value_={dataByID && dataByID.User.emergencyContact}
            />
          </div>
          <Line />
          <h6 className="text-xs font-bold mt-4 mb-4">Acudiente</h6>
          <div className="px-2 pt-4">
            <IconKeyValue2x1
              icon="fas fa-user"
              key_="Nombre"
              value_={dataByID && dataByID.User.nameGuardian}
              value_2={dataByID && dataByID.User.lastNameGuardian}
              value_3=""
            />
            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Identificación"
              value_={dataByID && dataByID.User.identificationGuardian}
            />
            <IconKeyValue
              icon="fas fa-users"
              key_="Parentesco"
              value_={dataByID && dataByID.User.issuance}
            />

            <IconKeyValue
              icon="fas fa-map-marker-alt"
              key_="Dirección"
              value_={dataByID && dataByID.User.addressGuardian}
            />
            <IconKeyValue
              icon="fas fa-envelope"
              key_="Email"
              value_={dataByID && dataByID.User.emailGuardian}
            />
            <IconKeyValue
              icon="fas fa-phone-alt"
              key_="Teléfono"
              value_={dataByID && dataByID.User.phoneGuardian}
            />
          </div>
        </div>
        {/* Card_2 - Información de Usuario*/}

        {/* Card_3 - Pagos Asociados */}
        {/* <div className="shadow-md rounded flex-1 ml-1 bg-gray-50">
          <div className="flex justify-between mt-14 px-4">
            <span className="ml-2 text-sm font-extrabold">
              Pagos Registrados
            </span>
            <ButtomBackground text="Nuevo" icon="fas fa-plus pr-2" />
          </div>
          <Line />
          <div className="flex justify-between px-4 text-sm font-bold bg-parotia-3 text-white -mt-4">
            <span>Nº</span>
            <span>Fecha</span>
            <span>Detalle</span>
            <span>Total</span>
            <span>Op.</span>
          </div>
         
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
         <DetailPay/>
        </div>
        Card_3 - Pagos Asociados */}
      </div>
      {/* Content */}
    </>
  );
};

const ItemsUser = ({
  k,
  _idUser,
  nameUser,
  lastName,
  statusUser,
  photo,
  setID,
}) => {
  return (
    <div className="bg-gray-50 hover:bg-gray-100">
      <div className="flex flex-row h-12 items-center px-4">
        <div className="w-1/24 mr-2">
          <input className="h-3 w-3 rounded-full" type="checkbox" />
        </div>
        <div
          className="flex flex-row h-12 w-23/24 items-center px-4"
          onClick={() => {
            setID(_idUser);
          }}
          key={k}
        >
          <div className="w-3/24" src="" alt="">
            <div className="flex mx-auto rounded-full bg-gray-200 border-1 border-gray-100 justify-center w-8 h-8">
              <img
                className="object-cover object-center w-5 h-5 mt-1"
                src={AvatarImage}
                alt=""
              />
            </div>
          </div>
          <div className="w-17/24 mx-1">
            <span className="text-xs">
              {nameUser} {lastName}
            </span>
          </div>
          <div className="w-3/24 mx-1">
            <span className="text-xxs italic">{statusUser}</span>
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
    </div>
  );
};

// const DetailPay = () => {
//   return (
//     <div className="flex justify-between px-4 text-xs py-1 hover:bg-gray-100">
//       <span>736</span>
//       <span>22/12/2020</span>
//       <span>Clase</span>
//       <span>$ 397.008</span>
//       <ButtonBorder
//         icon="fas fa-info-circle"
//         cssAdd="hover:border-parotia-3 hover:text-parotia-3"
//       />
//     </div>
//   );
// };

export default IndexUser;
