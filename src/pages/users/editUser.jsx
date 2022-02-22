import React, {useContext, useEffect} from "react";
import Modal from "../../components/modal/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/inputs/Input";
import DropDown from "../../components/dropdown/dropDown";
import useFormData from "../../hook/user/useFormData";
import Line from "../../components/ultils/Line";
import { EDIT_USER } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {Enum_Role, Enum_AFP, Enum_ARL, Enum_EPS, Enum_Issuance, Enum_Locality, Enum_RH, Enum_StatusUsers} from '../../utils/enums'
import UserContext from "../../context/UserContext";


const EditUser = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();
  const {setEditUser, dataQueryOneUserById, refetch} = useContext(UserContext);
  
  const [
    editUser,
    { data, loading, error},
  ] = useMutation(EDIT_USER);

  const submitForm = (e) => {
    e.preventDefault();
    formData._id = dataQueryOneUserById.User._id;
    formData.strata = parseFloat(formData.strata)
    editUser({variables: formData});
  }

  useEffect(() => {
    if(data){
      setEditUser(false);
      refetch();
      toast.success("Usuario modificado con éxito", {position: "top-right"});
      return navigate("/admin/users");
    
    }
  }, [data]);

  useEffect(() => {
    if(error){
      toast.error('Error al modificar el usuario', {position: "top-right"});
    }
  }, [error, navigate, refetch, setEditUser]);

  if(loading){return <div>Loding...</div>}


  return (
    
    <Modal cssadd="bg-gray-200">
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex">
          <div className="w-3/6 px-10">
            <DropDown label="Estado" type="text" name="statusUser" options={Enum_StatusUsers} defaultValue={dataQueryOneUserById.User.statusUser} />
            <DropDown label="Rol" type="text" name="role" defaultValue={dataQueryOneUserById.User.role}  options={Enum_Role} />
            <Input label="Nombres" type="text" name="nameUser" defaultValue={dataQueryOneUserById.User.nameUser}  />
            <Input label="Apellidos" type="text" name="lastName" defaultValue={dataQueryOneUserById.User.lastName}  />
            <Input label="Identificación" type="text" name="identification" defaultValue={dataQueryOneUserById.User.identification}  />
            <Input label="Ciudad de Nacimiento" type="text" name="cityBirth" defaultValue={dataQueryOneUserById.User.cityBirth}  />
            <Input label="Nacionalidad" type="text" name="nationality" defaultValue={dataQueryOneUserById.User.nationality}  />
            <Input label="Fecha Nacimiento" type="text" name="birthDay" defaultValue={dataQueryOneUserById.User.birthDay.slice(0,10)}  />
            <Input label="Foto (url)" type="text" name="photo" defaultValue={dataQueryOneUserById.User.photo}  />
            <Input label="Email" type="text" name="email" defaultValue={dataQueryOneUserById.User.email}  />
            <Input label="Teléfono" type="text" name="phone" defaultValue={dataQueryOneUserById.User.phone}  />
            <Input label="Celular" type="text" name="movil" defaultValue={dataQueryOneUserById.User.movil}  />
            <Input label="Dirección" type="text" name="address" defaultValue={dataQueryOneUserById.User.address}  />
            <Input label="UPZ" type="text" name="upz" defaultValue={dataQueryOneUserById.User.upz}  />
            <Input label="Estrato" type="number" name="strata" defaultValue={dataQueryOneUserById.User.strata}  />
            <DropDown label="RH" name="rh" defaultValue={dataQueryOneUserById.User.rh} options={Enum_RH} />
           
          </div>
          <div className="w-3/6 px-10">
            <DropDown label="Localidad" name="locality" defaultValue={dataQueryOneUserById.User.locality}  options={Enum_Locality} />
            <DropDown label="EPS" name="eps" defaultValue={dataQueryOneUserById.User.eps}  options={Enum_EPS} />
            <DropDown label="ARL" name="arl" defaultValue={dataQueryOneUserById.User.arl}  options={Enum_ARL}/>
            <DropDown label="AFP" name="afp" defaultValue={dataQueryOneUserById.User.afp}  options={Enum_AFP}/>
            <Input label="Contato de Emergencia" type="text" name="emergencyContact" defaultValue={dataQueryOneUserById.User.emergencyContact}  />
            <Line/>
            <h6 className="text-md font-bold mt-4 mb-6">Acudiente</h6>
            <Input label="Nombre" type="text" name="nameGuardian" defaultValue={dataQueryOneUserById.User.nameGuardian} />
            <Input label="Apellido" type="text" name="lastNameGuardian" defaultValue={dataQueryOneUserById.User.lastNameGuardian} />
            <Input label="Identificación" type="text" name="identificationGuardian" defaultValue={dataQueryOneUserById.User.identificationGuardian} />
            <DropDown label="Parentesco" name="issuance" defaultValue={dataQueryOneUserById.User.issuance}  options={Enum_Issuance}/>
            <Input label="Email" type="email" name="emailGuardian" defaultValue={dataQueryOneUserById.User.emailGuardian} />
            <Input label="Dirección" type="text" name="addressGuardian" defaultValue={dataQueryOneUserById.User.addressGuardian} />
            <Input label="Teléfono" type="text" name="phoneGuardian" defaultValue={dataQueryOneUserById.User.phoneGuardian} />
          </div>
        </div>
        <div className="flex justify-end mt-2 px-10">
        <ButtomBig text="Guardar" type="submit" />
          <ButtomBig
            text="Cerrar"
            onclick={() => {
              setEditUser(false);
            }}
            type="button"
          />
      
        </div>
      </form>
    </Modal>
  );
};

export default EditUser;