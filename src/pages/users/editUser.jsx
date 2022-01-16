import React, {useEffect} from "react";
import Modal from "../../components/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/input";
import DropDown from "../../components/dropDown";
import useFormData from "../../hook/userFormData";
import Line from "../../components/Line";
import { EDIT_USER } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import {Enum_Role, Enum_AFP, Enum_ARL, Enum_EPS, Enum_Issuance, Enum_Locality, Enum_RH, Enum_StatusUsers} from '../../utils/enums'


const EditUser = ({ setEditUser, dataByID, refetch }) => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();
  const [
    editUser,
    { data, loading, error},
  ] = useMutation(EDIT_USER);
  const submitForm = (e) => {
    e.preventDefault();
    formData._id = dataByID.User._id;
    formData.strata = parseFloat(formData.strata)
    console.log("formData: ", formData)
    editUser({variables: formData});
  }

  useEffect(() => {
    if(data){
      setEditUser(false);
      refetch();
      toast.success("Usuario modificado con éxito");
      return navigate("/admin/users");
    
    }
  }, [data]);

  useEffect(() => {
    if(error){
      toast.error('Error al modificar el usuario');
    }
  }, [error]);

  if(loading){return <div>Loding...</div>}


  return (
    
    <Modal cssadd="bg-gray-200">
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex">
          <div className="w-3/6 px-10">
            <DropDown label="Estado" type="text" name="statusUser" options={Enum_StatusUsers} defaultValue={dataByID.User.statusUser} />
            <DropDown label="Rol" type="text" name="role" defaultValue={dataByID.User.role}  options={Enum_Role} />
            <Input label="Nombres" type="text" name="nameUser" defaultValue={dataByID.User.nameUser}  />
            <Input label="Apellidos" type="text" name="lastName" defaultValue={dataByID.User.lastName}  />
            <Input label="Identificación" type="text" name="identification" defaultValue={dataByID.User.identification}  />
            <Input label="Ciudad de Nacimiento" type="text" name="cityBirth" defaultValue={dataByID.User.cityBirth}  />
            <Input label="Nacionalidad" type="text" name="nationality" defaultValue={dataByID.User.nationality}  />
            <Input label="Fecha Nacimiento" type="text" name="birthDay" defaultValue={dataByID.User.birthDay.slice(0,10)}  />
            <Input label="Foto (url)" type="text" name="photo" defaultValue={dataByID.User.photo}  />
            <Input label="Email" type="text" name="email" defaultValue={dataByID.User.email}  />
            <Input label="Teléfono" type="text" name="phone" defaultValue={dataByID.User.phone}  />
            <Input label="Celular" type="text" name="movil" defaultValue={dataByID.User.movil}  />
            <Input label="Dirección" type="text" name="address" defaultValue={dataByID.User.address}  />
            <Input label="UPZ" type="text" name="upz" defaultValue={dataByID.User.upz}  />
            <Input label="Estrato" type="number" name="strata" defaultValue={dataByID.User.strata}  />
            <DropDown label="rh" name="rh" defaultValue={dataByID.User.rh}  options={Enum_RH} />
           
          </div>
          <div className="w-3/6 px-10">
            <DropDown label="Localidad" name="locality" defaultValue={dataByID.User.locality}  options={Enum_Locality} />
            <DropDown label="EPS" name="eps" defaultValue={dataByID.User.eps}  options={Enum_EPS} />
            <DropDown label="ARL" name="arl" defaultValue={dataByID.User.arl}  options={Enum_ARL}/>
            <DropDown label="AFP" name="afp" defaultValue={dataByID.User.afp}  options={Enum_AFP}/>
            <Input label="Contato de Emergencia" type="text" name="emergencyContact" defaultValue={dataByID.User.emergencyContact}  />
            <Line/>
            <h6 className="text-md font-bold mt-4 mb-6">Acudiente</h6>
            <Input label="Nombre" type="text" name="nameGuardian" defaultValue={dataByID.User.nameGuardian} />
            <Input label="Apellido" type="text" name="lastNameGuardian" defaultValue={dataByID.User.lastNameGuardian} />
            <Input label="Identificación" type="text" name="identificationGuardian" defaultValue={dataByID.User.identificationGuardian} />
            <DropDown label="Parentesco" name="issuance" defaultValue={dataByID.User.issuance}  options={Enum_Issuance}/>
            <Input label="Email" type="email" name="emailGuardian" defaultValue={dataByID.User.emailGuardian} />
            <Input label="Dirección" type="text" name="addressGuardian" defaultValue={dataByID.User.addressGuardian} />
            <Input label="Teléfono" type="text" name="phoneGuardian" defaultValue={dataByID.User.phoneGuardian} />
          </div>
        </div>
        <div className="flex justify-end mt-2 px-10">
        <ButtomBig text="Guardar" type="submit" />
          <ButtomBig
            text="Cerrar"
            onclick={() => {
              setEditUser(false);
            }}
          />
      
        </div>
      </form>
    </Modal>
  );
};

export default EditUser;