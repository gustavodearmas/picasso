import React, { useContext, useEffect, useState } from "react";
import AvatarImage from "../../images/no-avatar.png";
import ButtonBorder from "../../components/buttoms/buttonBorder";
import ButtonBackground from "../../components/buttoms/ButtonBackground";
import Line from "../../components/ultils/Line";
import IconKeyValue from "../../components/user/iconKeyValue";
import IconKeyValueX2 from "../../components/user/iconKeyValueX2";
import IconKeyValue2x1 from "../../components/user/iconKeyValue2x1";
import { calculateAge } from "../../utils/generalFunctions";
import { useMutation } from "@apollo/client";
import { DISABLE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import DisableRecord from "../../components/ultils/DisableRecord";
import UserContext from "../../context/UserContext";
import EditUser from "./EditUser";
import SendMail from "../../components/ultils/SendMail";

const CardDetailData = () => {
  const [disableUser, { data, error }] = useMutation(DISABLE_USER);
  const [disable, setDisable] = useState(false);
  const [sendMail, setSendMail] = useState(false);
  const {setEditUser, editUser, _id, dataQueryOneUserById, refetch } = useContext(UserContext);
  //console.log("dataQueryOneUserById", dataQueryOneUserById)


  useEffect(() => {
    if (error) {
      toast.error("Error al intentar desactivar este usuario", {
        position: "top-right",
      });
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      toast.success("Usuario desactivado", {
        position: "top-right",
      });
    }
  }, [data]);

  return (
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
          <ButtonBackground
            text="Email"
            icon="fas fa-envelope-open-text pr-2"
            onclick={()=>setSendMail(true)}
            type="button"
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
            setDisable(true);
          }}
        />
      </div>
      <Line />
      <div className="px-2 pt-4">
        <IconKeyValue
          icon="fas fa-id-badge"
          key_="Identificación"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.identification}
        />
        <IconKeyValue2x1
          icon="fas fa-user"
          key_="Nombre"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.nameUser}
          value_2={dataQueryOneUserById && dataQueryOneUserById.User.lastName}
          value_3=""
        />
        <IconKeyValue
          icon="fas fa-id-badge"
          key_="Ciudad de Nacimiento"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.cityBirth}
        />
        <IconKeyValue
          icon="fas fa-id-badge"
          key_="Nacionalidad"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.nationality}
        />
        <IconKeyValueX2
          icon="fas fa-birthday-cake"
          key_="Fecha de Nacimiento"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.birthDay.slice(0, 10)}
          value_2={
            dataQueryOneUserById && calculateAge(dataQueryOneUserById.User.birthDay.slice(0, 10))
          }
        />
        <IconKeyValue
          icon="fas fa-syringe"
          key_="RH"
          value_={
            dataQueryOneUserById && dataQueryOneUserById.User.rh && dataQueryOneUserById.User.rh.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-envelope"
          key_="Email"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.email}
        />
        <IconKeyValueX2
          icon="fas fa-phone-alt"
          key_="Teléfono"
          value_="3286212"
          value_2={dataQueryOneUserById && dataQueryOneUserById.User.phone}
        />
        <IconKeyValue
          icon="fas fa-medkit"
          key_="EPS"
          value_={
            dataQueryOneUserById && dataQueryOneUserById.User.eps && dataQueryOneUserById.User.eps.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-hand-holding-usd"
          key_="ARL"
          value_={
            dataQueryOneUserById && dataQueryOneUserById.User.arl && dataQueryOneUserById.User.arl.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-blind"
          key_="AFP"
          value_={
            dataQueryOneUserById && dataQueryOneUserById.User.afp && dataQueryOneUserById.User.afp.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-map-marker-alt"
          key_="Dirección"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.address}
        />
        <IconKeyValue
          icon="fas fa-arrow-alt-circle-up"
          key_="Estrato"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.strata}
        />
        <IconKeyValueX2
          icon="fas fa-map-marked-alt"
          key_="UPZ/Localidad"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.upz}
          value_2={
            dataQueryOneUserById &&
            dataQueryOneUserById.User.locality &&
            dataQueryOneUserById.User.locality.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-arrow-alt-circle-up"
          key_="Contato de Emergencia"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.emergencyContact}
        />
      </div>
      <Line />
      <h6 className="text-xs font-bold mt-4 mb-4">Acudiente</h6>
      <div className="px-2 pt-4">
        <IconKeyValue2x1
          icon="fas fa-user"
          key_="Nombre"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.nameGuardian}
          value_2={dataQueryOneUserById && dataQueryOneUserById.User.lastNameGuardian}
          value_3=""
        />
        <IconKeyValue
          icon="fas fa-id-badge"
          key_="Identificación"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.identificationGuardian}
        />
        <IconKeyValue
          icon="fas fa-users"
          key_="Parentesco"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.issuance}
        />

        <IconKeyValue
          icon="fas fa-map-marker-alt"
          key_="Dirección"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.addressGuardian}
        />
        <IconKeyValue
          icon="fas fa-envelope"
          key_="Email"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.emailGuardian}
        />
        <IconKeyValue
          icon="fas fa-phone-alt"
          key_="Teléfono"
          value_={dataQueryOneUserById && dataQueryOneUserById.User.phoneGuardian}
        />
      </div>
      {disable ? (
        <DisableRecord mutation={disableUser} id={_id} setDisable={setDisable} refetch={refetch} />
      ) : (
        <></>
      )}
      {editUser ? <EditUser /> : <></>}
      {sendMail ? <SendMail setSendMail={setSendMail} email={dataQueryOneUserById.User.email}/> : <></>}
    </div>
  );
};

export default CardDetailData;
