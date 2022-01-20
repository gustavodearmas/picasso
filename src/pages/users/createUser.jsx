import React, {useEffect} from "react";
import Modal from "../../components/modal/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/input";
import DropDown from "../../components/dropDown";
import useFormData from "../../hook/userFormData";
import Line from "../../components/Line";
import { CREATE_USER } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {Enum_Role, Enum_AFP, Enum_ARL, Enum_EPS, Enum_Issuance, Enum_Locality, Enum_RH, Enum_StatusUsers} from '../../utils/enums'


const CreateUser = ({ setCreateUser, refetch }) => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();
  const [
    createUser,
    { data: mutationData, loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_USER);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("formData: ", formData)
    formData.strata = parseFloat(FormData.strata);
    createUser({variables: formData});
  }

  useEffect(() => {
    if(mutationData){
      setCreateUser(false);
      refetch();
      toast.success('Usuario creado correctamente', {position: "top-right"});
      return navigate("/admin/users");
    }
  }, [mutationData]);

  useEffect(() => {
    if(mutationError){
      toast.error('Error al intentat guardar el usuario', {position: "top-right"});
    }
  }, [mutationError]);

  if(mutationLoading){return <div>Loding...</div>}


  return (
    
    <Modal cssadd="bg-gray-200">
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex">
          <div className="w-3/6 px-10">
            <DropDown label="Estado" type="text" name="statusUser" options={Enum_StatusUsers} required />
            <DropDown label="Rol" type="text" name="role"  options={Enum_Role} required />
            <Input label="Nombres" type="text" name="nameUser" required />
            <Input label="Apellidos" type="text" name="lastName" required />
            <Input label="Identificación" type="text" name="identification" required />
            <Input label="Ciudad de Nacimiento" type="text" name="cityBirth"  />
            <Input label="Nacionalidad" type="text" name="nationality"  />
            <Input label="Fecha Nacimiento" type="text" name="birthDay" required />
            <Input label="Foto (url)" type="text" name="photo"  />
            <Input label="Email" type="email" name="email" required />
            <Input label="Teléfono" type="text" name="phone"  />
            <Input label="Celular" type="text" name="movil" required />
            <Input label="Dirección" type="text" name="address"  />
            <Input label="UPZ" type="text" name="upz"  />
            <Input label="Estrato" type="number" name="strata"  />
            <DropDown label="RH" name="rh"  options={Enum_RH} />
           
          </div>
          <div className="w-3/6 px-10">
            <DropDown label="Localidad" name="locality"  options={Enum_Locality} />
            <DropDown label="EPS" name="eps"  options={Enum_EPS} />
            <DropDown label="ARL" name="arl"  options={Enum_ARL}/>
            <DropDown label="AFP" name="afp"  options={Enum_AFP}/>
            <Input label="Contato de Emergencia" type="text" name="emergencyContact"  />
            <Line/>
            <h6 className="text-md font-bold mt-4 mb-6">Acudiente</h6>
            <Input label="Nombre" type="text" name="nameGuardian" />
            <Input label="Apellido" type="text" name="lastNameGuardian" />
            <Input label="Identificación" type="text" name="identificationGuardian" />
            <DropDown label="Parentesco" name="issuance"  options={Enum_Issuance}/>
            <Input label="Email" type="email" name="emailGuardian" />
            <Input label="Dirección" type="text" name="addressGuardian" />
            <Input label="Teléfono" type="text" name="phoneGuardian" />
          </div>
        </div>
        <div className="flex justify-end mt-2 px-10">
        <ButtomBig text="Guardar" type="submit" />
          <ButtomBig
            text="Cerrar"
            onclick={() => {
              setCreateUser(false);
            }}
          />
          
        </div>
      </form>
    </Modal>
  );
};

export default CreateUser;
