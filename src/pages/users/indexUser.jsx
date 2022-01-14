import React, { useState, useEffect } from "react";
import AvatarImage from "../../images/no-avatar.png";
import ButtonBorder from "../../components/buttoms/buttonBorder";
import ButtomBackground from "../../components/buttoms/buttomBackground";
import Line from "../../components/Line";
import IconKeyValue from "../../components/user/iconKeyValue";
import IconKeyValueX2 from "../../components/user/iconKeyValueX2";
import IconKeyValue2x1 from "../../components/user/iconKeyValue2x1";
import EditUser from "./editUser";
import ButtomBig from "../../components/buttoms/buttomBig";
import { GET_USERS } from "../../graphql/user/querys";
import toast from 'react-hot-toast';
import { useQuery } from "@apollo/client";

const IndexUser = () => {
  const [editUser, setEditUser] = useState(false);
  const { data, error, loading } = useQuery(GET_USERS);

console.log("data: ", data)

  useEffect(() => {
    if (error) {
      toast.error('Error consultando los usuarios');
    }
  }, [error]);

  return (
    <>
    
      {editUser ? <EditUser setEditUser={setEditUser} /> : <></>}
      
      {/* Header */}
      <div className="flex flex-row justify-end">
        <div className="flex items-center w-auto text-sm ">
          <input
            className="py-2 rounded w-80 text-xs pl-8 border-1 border-gray-200 shadow-md outline-none"
            type="text"
            placeholder="Buscar..."
          />

          <ButtomBig text="Nuevo" />
          <ButtomBig text="Importar" bg="bg-gray-700" />
        </div>
      </div>
      {/* Header */}

      {/* Content */}
      <div className="h-full flex flex-col lg:flex-row mt-4">
        {/* Card_1 - Lista de usuarios */}
        <div className="h-full shadow-md rounded flex-1 mr-1 bg-gray-50">
          {/* Cabecera y query de total de registros */}
          <div className="h-3/24 text-xs font-bold divide-y divide-gray-200 pt-8">
            <div className="flex flex-wrap w-full content-end justify-between px-4">
              <span>Usuarios</span>
              <span>36 usuarios</span>
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
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
            <ItemsUser />
          </div>
          {/* Componentes de Usuarios */}
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
            />
          </div>
          <Line />
          <div className="px-2 pt-4">
            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Identificación"
              value_="CC 1118833976"
            />
            <IconKeyValue2x1
              icon="fas fa-user"
              key_="Nombre"
              value_="Andrea"
              value_2="Carolina"
              value_3="Gonzalez"
            />

            <IconKeyValue
              icon="fas fa-id-badge"
              key_="Ciudad de Nacimiento"
              value_="Colombia"
            />
               <IconKeyValue
              icon="fas fa-id-badge"
              key_="Nacionalidad"
              value_="Colombiano"
            />
            <IconKeyValueX2
              icon="fas fa-birthday-cake"
              key_="Fecha de Nacimiento"
              value_="22/12/1990"
              value_2="20 años"
            />
            <IconKeyValue icon="fas fa-syringe" key_="RH" value_="O-" />
          
            <IconKeyValue
              icon="fas fa-envelope"
              key_="Email"
              value_="andres@hotmail.com"
            />
            <IconKeyValueX2
              icon="fas fa-phone-alt"
              key_="Teléfono"
              value_="3286212"
              value_2="3109876537"
            />
              <IconKeyValue
              icon="fas fa-medkit"
              key_="EPS"
              value_="Sura"
            />
              <IconKeyValue
              icon="fas fa-hand-holding-usd"
              key_="ARL"
              value_="Liberty"
            />
              <IconKeyValue
              icon="fas fa-blind"
              key_="AFP"
              value_="Colpensiones"
            />
              <IconKeyValue
              icon="fas fa-map-marker-alt"
              key_="Dirección"
              value_="Calle 12C # 12 - 12"
            />
               <IconKeyValue
              icon="fas fa-arrow-alt-circle-up"
              key_="Estrato"
              value_="3"
            />
               <IconKeyValueX2
              icon="fas fa-map-marked-alt"
              key_="UPZ/Localidad"
              value_="San Luis"
              value_2="Chapinero"
            />
                <IconKeyValue
              icon="fas fa-arrow-alt-circle-up"
              key_="Contato de Emergencia"
              value_="323334545"
            />
          
            
           
          
          </div>
          <Line />
          <h6 className="text-xs font-bold mt-4 mb-8">Acudiente</h6>
          <IconKeyValue2x1
            icon="fas fa-user"
            key_="Nombre"
            value_="Andrea"
            value_2="Carolina"
            value_3="Gonzalez"
          />
          <IconKeyValue
            icon="fas fa-id-badge"
            key_="Identificación"
            value_="CC 1118833976"
          />
          <IconKeyValue
            icon="fas fa-users"
            key_="Parentesco"
            value_="Madre"
          />
         
          <IconKeyValue
            icon="fas fa-map-marker-alt"
            key_="Dirección"
            value_="Calle 78 # 20 - 43"
          />
          <IconKeyValue
            icon="fas fa-envelope"
            key_="Email"
            value_="andres@hotmail.com"
          />
          <IconKeyValue
            icon="fas fa-phone-alt"
            key_="Teléfono"
            value_="3120837434"
          />
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

const ItemsUser = () => {
  return (
    <div className="bg-gray-50 hover:bg-gray-100">
      <div className="flex flex-row h-12 items-center px-4 ">
        <div className="w-1/24 mr-2">
          <input className="h-3 w-3 rounded-full" type="checkbox" />
        </div>

        <div className=" w-3/24 " src="" alt="">
          <div className="flex mx-auto rounded-full bg-gray-200 border-1 border-gray-100 justify-center w-8 h-8">
            <img
              className="object-cover object-center w-5 h-5 mt-1"
              src={AvatarImage}
              alt=""
            />
          </div>
        </div>
        <div className="w-17/24 mx-1">
          <span className="text-xs">Gustavo De Armas Nuñez</span>
        </div>
        <div className="w-3/24 mx-1">
          <span className="text-xxs italic">Activo</span>
        </div>
        <div className="h-1/12 mt-1">
          <div className="h-2 w-2 rounded-full border-2 border-green-400"></div>
        </div>
      </div>
    </div>
  );
};

const DetailPay = () => {
  return (
    <div className="flex justify-between px-4 text-xs py-1 hover:bg-gray-100">
      <span>736</span>
      <span>22/12/2020</span>
      <span>Clase</span>
      <span>$ 397.008</span>
      <ButtonBorder
        icon="fas fa-info-circle"
        cssAdd="hover:border-parotia-3 hover:text-parotia-3"
      />
    </div>
  );
};

export default IndexUser;
