import React, {useEffect} from "react";
import Modal from "../../components/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/input";
import DropDown from "../../components/dropDown";
import useFormData from "../../hook/userFormData";
import Line from "../../components/Line";
import { CREATE_USER } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from 'react-hot-toast';
import {Enum_Role, Enum_AFP, Enum_ARL, Enum_EPS, Enum_Issuance, Enum_Locality, Enum_RH, Enum_StatusUsers} from '../../utils/enums'


const EditUser = ({ setEditUser }) => {
  const [
    createUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_USER);
  const { form, formData, updateFormData } = useFormData(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("formData: ", formData)
    formData.strata = parseFloat(FormData.strata);
    createUser({variables: formData});
  }

  useEffect(() => {
    if(mutationData){
      toast.success('Usuario modificado correctamente');
    }
  }, [mutationData]);

  useEffect(() => {
    if(mutationError){
      toast.error('Erro al intentat guardar el usuario');
    }
    
  }, [mutationError]);


  return (
    
    <Modal cssadd="bg-gray-200">
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex">
          <div className="w-3/6 px-10">
            <DropDown label="Estado" type="text" name="statusUser" options={Enum_StatusUsers} />
            <DropDown label="Rol" type="text" name="role" defaultValue="" options={Enum_Role} />
            <Input label="Nombres" type="text" name="nameUser" defaultValue="" />
            <Input label="Apellidos" type="text" name="lastName" defaultValue="" />
            <Input label="Identificación" type="text" name="identification" defaultValue="" />
            <Input label="Ciudad de Nacimiento" type="text" name="cityBirth" defaultValue="" />
            <Input label="Nacionalidad" type="text" name="nationality" defaultValue="" />
            <Input label="Fecha Nacimiento" type="text" name="birthDay" defaultValue="" />
            <Input label="Email" type="text" name="email" defaultValue="" />
            <Input label="Teléfono" type="text" name="phone" defaultValue="" />
            <Input label="Celular" type="text" name="movil" defaultValue="" />
            <Input label="Dirección" type="text" name="address" defaultValue="" />
            <Input label="UPZ" type="text" name="UPZ" defaultValue="" />
            <Input label="Estrato" type="number" name="strata" defaultValue="" />
            <DropDown label="RH" name="RH" defaultValue = "" options={Enum_RH} />
            
           
          </div>
          <div className="w-3/6 px-10">
            <DropDown label="Localidad" name="locality" defaultValue = "" options={Enum_Locality} />
            <Input label="UPZ" type="text" name="UPZ" defaultValue = "" />
            <DropDown label="EPS" name="EPS" defaultValue = "" options={Enum_EPS} />
            <DropDown label="ARL" name="ARL" defaultValue = "" options={Enum_ARL}/>
            <DropDown label="AFP" name="AFP" defaultValue = "" options={Enum_AFP}/>
            <Input label="Contato de Emergencia" type="text" name="emergencyContact" defaultValue="" />
            <Line/>
            <h6 className="text-md font-bold mt-2 mb-2">Acudiente</h6>
            <Input label="Nombre" type="text" name="nameGuardian" defaultValue=""/>
            <Input label="Apellido" type="text" name="lastNameGuardian" defaultValue=""/>
            <Input label="Identificación" type="text" name="identificationGuardian" defaultValue=""/>
            <DropDown label="Parentesco" name="issuance" defaultValue = "" options={Enum_Issuance}/>
            <Input label="Email" type="email" name="emailGuardian" defaultValue=""/>
            <Input label="Dirección" type="email" name="addressGuardian" defaultValue=""/>
            <Input label="Teléfono" type="email" name="phoneGuardian" defaultValue=""/>
          </div>
        </div>
        <div className="flex justify-end mt-2 px-10">
          <ButtomBig
            text="Cerrar"
            onclick={() => {
              setEditUser(false);
            }}
          />
          <ButtomBig text="Guardar" type="submit" />
        </div>
      </form>
    </Modal>
  );
};

export default EditUser;

//Diseño para danzaLibre
{
  /* <div className="flex flex-col">
        <div className="flex">
         <div className="flex flex-col w-5/24 mx-1">
           <div className="bg-white mb-1 rounded-lg h-full">ff</div>
           <div className="bg-white mt-1 rounded-lg h-full">ff</div>
  
         </div>
         <div className="w-19/24 rounded-lg mx-1">
           <div className="flex flex-col">
             <div className="flex mb-2">
              <div className="bg-white rounded-lg w-8/24 mr-1">f</div>
              <div className="bg-white rounded-lg w-16/24 ml-1">b</div>
             </div>
             <div className="bg-white mb-2 rounded-lg">f</div>
             <div className="bg-white rounded-lg">v</div>
           </div>
         </div>
        </div>
        <div className="flex justify-end mt-4">
          <ButtomBig text="Cerrar" onclick={()=>{setEditUser(false)}} />
          <ButtomBig text="Guardar" />
        </div>
        </div> */
}
