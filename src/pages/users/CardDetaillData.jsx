import React, { useContext, useEffect, useState } from "react";
import AvatarImage from "../../images/no-avatar.png";
import ButtonBorder from "../../components/buttoms/buttonBorder";
import ButtonBackground from "../../components/buttoms/ButtonBackground";
import Line from "../../components/Line";
import IconKeyValue from "../../components/user/iconKeyValue";
import IconKeyValueX2 from "../../components/user/iconKeyValueX2";
import IconKeyValue2x1 from "../../components/user/iconKeyValue2x1";
import { calculateAge } from "../../utils/generalFunctions";
import { useMutation } from "@apollo/client";
import { DISABLE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import DisableRecord from "../../components/DisableRecord";
import UserContext from "../../context/UserContext";
import EditUser from "./EditUser";
import SendMail from "../../components/SendMail";

const CardDetailData = () => {
  const [disableUser, { data, error }] = useMutation(DISABLE_USER);
  const [disable, setDisable] = useState(false);
  const [sendMail, setSendMail] = useState(false);
  const {setEditUser, editUser, _id, dataByID } = useContext(UserContext);
  console.log("dataByID", dataByID)


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
            dataByID && dataByID.User.rh && dataByID.User.rh.replace("_", " ")
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
            dataByID && dataByID.User.eps && dataByID.User.eps.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-hand-holding-usd"
          key_="ARL"
          value_={
            dataByID && dataByID.User.arl && dataByID.User.arl.replace("_", " ")
          }
        />
        <IconKeyValue
          icon="fas fa-blind"
          key_="AFP"
          value_={
            dataByID && dataByID.User.afp && dataByID.User.afp.replace("_", " ")
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
      {disable ? (
        <DisableRecord mutation={disableUser} id={_id} setDisable={setDisable} />
      ) : (
        <></>
      )}
      {editUser ? <EditUser /> : <></>}
      {sendMail ? <SendMail setSendMail={setSendMail} email={dataByID.User.email}/> : <></>}
    </div>
  );
};

export default CardDetailData;
