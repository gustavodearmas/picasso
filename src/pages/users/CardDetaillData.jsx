import React, { useContext, useEffect, useState } from "react";
import AvatarImage from "../../images/no-avatar.png";
import ButtonBorder from "../../components/buttoms/buttonBorder";
import ButtonBackground from "../../components/buttoms/ButtonBackground";
import ButtonBgLarge from "../../components/buttoms/ButtonBgLarge";
import Line from "../../components/ultils/Line";
import KeyValue from "../../components/user/KeyValue";
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
import { Test2 } from "./Test2";

const CardDetailData = () => {
  const [disableUser, { data, error }] = useMutation(DISABLE_USER);
  const [disable, setDisable] = useState(false);
  const [sendMail, setSendMail] = useState(false);
  const {
    setEditUser,
    editUser,
    _id,
    dataQueryOneUserById,
    refetch,
    setCreateUser,
  } = useContext(UserContext);
  console.log("dataQueryOneUserById", dataQueryOneUserById);

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
    <div className="flex-col shadow-md rounded bg-gray-50 py-4 overflow-auto lg:w-6/12 xl:w-8/12">
      {/* Header */}
      <div className="flex justify-end px-7 lg:h-7">
        <ButtonBorder
          cssAdd={"lg:hidden rounded-2xl"}
          icon="fas fa-plus text-xxs"
          onclick={() => {
            setCreateUser(true);
          }}
        />
      </div>
      {/* End-Header */}
      <Line />

      {/* UserPicture */}
      <div className="xl:flex xl:justify-between pt-4 divide-x divide-gray-200">
        <div className="flex items-center px-7">
          <img
            className="h-20 w-20 bg-white rounded-full"
            src={AvatarImage}
            alt=""
          />
          <div className="pl-4 ">
            <span className="flex font-black text-base text-menta-200">
              {dataQueryOneUserById &&
                dataQueryOneUserById.User.nameUser +
                  " " +
                  dataQueryOneUserById.User.lastName}
            </span>
            <span className="flex font-bold text-sm">
              {dataQueryOneUserById &&
                "Id." + " " + dataQueryOneUserById.User.identification}
            </span>
          </div>
        </div>
        <div className="flex justify-end text-sm mt-2 xl:h-5 self-end pr-10">
          <ButtonBgLarge
            icon="far fa-paper-plane"
            bg="bg-gray-600"
            text="Email"
            cssAdd="hover:border-parotia-3 hover:text-parotia-3"
            onclick={() => setSendMail(true)}
            type="button"
          />
          <ButtonBgLarge
            icon="far fa-edit"
            text="Editar"
            cssAdd="hover:border-parotia-3 hover:text-parotia-3"
            onclick={() => {
              setEditUser(true);
            }}
          />
          <ButtonBgLarge
            bg="bg-red-500"
            icon="far fa-trash-alt"
            text="Borrar"
            cssAdd="hover:border-red-400 hover:text-red-400"
            onclick={() => {
              setDisable(true);
            }}
          />
        </div>
      </div>
      <Line />
      {/* UserPicture */}

      {/* UserData */}
      <div className="xl:flex p-7">
        <div className="xl:flex-1">
          <span className="flex text-xs font-bold text-menta-200 mb-2">
            DATOS PRINCIPALES
          </span>
          <KeyValue
            key_="Ciudad de Nacimiento"
            value_={dataQueryOneUserById && dataQueryOneUserById.User.cityBirth}
          />
          <KeyValue
            key_="Nacionalidad"
            value_={
              dataQueryOneUserById && dataQueryOneUserById.User.nationality
            }
          />
          <KeyValue
            key_="Fecha de Nacimiento"
            value_={
              dataQueryOneUserById &&
              dataQueryOneUserById.User.birthDay.slice(0, 10)
            }
          />
          <KeyValue
            key_="Edad"
            value_={
              dataQueryOneUserById &&
              calculateAge(dataQueryOneUserById.User.birthDay.slice(0, 10)) +
                " años"
            }
          />
          <KeyValue
            key_="Email"
            value_={dataQueryOneUserById && dataQueryOneUserById.User.email}
          />
          <KeyValue
            key_="Teléfono"
            value_="3286212"
            value_2={dataQueryOneUserById && dataQueryOneUserById.User.phone}
          />
          <KeyValue
            key_="Dirección"
            value_={dataQueryOneUserById && dataQueryOneUserById.User.address}
          />
          <KeyValue
            key_="Estrato"
            value_={dataQueryOneUserById && dataQueryOneUserById.User.strata}
          />
          <KeyValue
            key_="UPZ"
            value_={dataQueryOneUserById && dataQueryOneUserById.User.upz}
            value_2={
              dataQueryOneUserById &&
              dataQueryOneUserById.User.locality &&
              dataQueryOneUserById.User.locality.replace("_", " ")
            }
          />
          <KeyValue
            key_="Localidad"
            value_={
              dataQueryOneUserById &&
              dataQueryOneUserById.User.locality &&
              dataQueryOneUserById.User.locality.replace("_", " ")
            }
          />
          <KeyValue
            key_="Contato de Emergencia"
            value_={
              dataQueryOneUserById && dataQueryOneUserById.User.emergencyContact
            }
          />
        </div>
        <div className="xl:flex-1">
          <div className="xl:hidden">
            <Line />
          </div>
          <span className="flex text-xs font-bold text-menta-200 xl:mt-0 mt-7 mb-2">
            DATOS ADICIONALES
          </span>
          <div className="">
            <KeyValue
              key_="RH"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.rh &&
                dataQueryOneUserById.User.rh.replace("_", " ")
              }
            />
            <KeyValue
              key_="EPS"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.eps &&
                dataQueryOneUserById.User.eps.replace("_", " ")
              }
            />
            <KeyValue
              key_="ARL"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.arl &&
                dataQueryOneUserById.User.arl.replace("_", " ")
              }
            />
            <KeyValue
              key_="AFP"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.afp &&
                dataQueryOneUserById.User.afp.replace("_", " ")
              }
            />
          </div>
          <Line />
          <span className="flex text-xs font-bold text-menta-200 mt-7 mb-2">
            CONTACTO DE EMERGENCIA
          </span>
          <div className="">
            <KeyValue
              key_="Nombre"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.nameGuardian +
                  " " +
                  dataQueryOneUserById.User.lastNameGuardian
              }
            />
            <KeyValue
              key_="Identificación"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.identificationGuardian
              }
            />
            <KeyValue
              key_="Parentesco"
              value_={
                dataQueryOneUserById && dataQueryOneUserById.User.issuance
              }
            />
            <KeyValue
              key_="Dirección"
              value_={
                dataQueryOneUserById &&
                dataQueryOneUserById.User.addressGuardian
              }
            />
            <KeyValue
              key_="Email"
              value_={
                dataQueryOneUserById && dataQueryOneUserById.User.emailGuardian
              }
            />
            <KeyValue
              key_="Teléfono"
              value_={
                dataQueryOneUserById && dataQueryOneUserById.User.phoneGuardian
              }
            />
          </div>
        </div>
      </div>
      {disable ? (
        <DisableRecord
          mutation={disableUser}
          id={_id}
          setDisable={setDisable}
          refetch={refetch}
        />
      ) : (
        <></>
      )}
      {editUser ? <EditUser /> : <></>}
      {sendMail ? (
        <SendMail
          setSendMail={setSendMail}
          email={dataQueryOneUserById.User.email}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardDetailData;
