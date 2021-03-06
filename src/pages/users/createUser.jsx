import React, { useContext, useEffect } from "react";
import Modal from "../../components/modal/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/inputs/Input";
import DropDown from "../../components/dropdown/dropDown";
import useFormData from "../../hook/user/useFormData";
import Line from "../../components/ultils/Line";
import { CREATE_USER } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Enum_Role,
  Enum_AFP,
  Enum_ARL,
  Enum_EPS,
  Enum_Issuance,
  Enum_Locality,
  Enum_RH,
  Enum_StatusUsers,
} from "../../utils/enums";
import UserContext from "../../context/UserContext";
import ButtonBorder from "../../components/buttoms/buttonBorder";

const CreateUser = () => {
  const { form, formData, updateFormData } = useFormData(null);
  const navigate = useNavigate();
  const { setCreateUser, refetch } = useContext(UserContext);

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const submitForm = (e) => {
    e.preventDefault();
    //console.log("formData: ", formData);
    formData.strata = parseFloat(FormData.strata);
    createUser({ variables: formData });
  };

  useEffect(() => {
    if (data) {
      setCreateUser(false);
      refetch();
      toast.success("Usuario creado correctamente", { position: "top-right" });
      return navigate("/admin/users");
    }
  }, [data, navigate, refetch, setCreateUser]);

  useEffect(() => {
    if (error) {
      toast.error("Error al intentat guardar el usuario", {
        position: "top-right",
      });
    }
  }, [error]);

  if (loading) {
    return <div>Loding...</div>;
  }

  return (
    <Modal cssadd="bg-white" onClick={setCreateUser}>
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex-col">
          <div className="lg:flex">
            <div className="lg:flex-1 lg:px-5">
              <DropDown
                label="Estado"
                type="text"
                name="statusUser"
                options={Enum_StatusUsers}
                required
              />
              <DropDown
                label="Rol"
                type="text"
                name="role"
                options={Enum_Role}
                required
              />
              <Input label="Nombres" type="text" name="nameUser" required />
              <Input label="Apellidos" type="text" name="lastName" required />
              <Input
                label="Identificaci??n"
                type="text"
                name="identification"
                required
              />
              <Input
                label="Ciudad de Nacimiento"
                type="text"
                name="cityBirth"
              />
              <Input label="Nacionalidad" type="text" name="nationality" />
              <Input
                label="Fecha Nacimiento"
                type="text"
                name="birthDay"
                required
              />
              <Input label="Foto (url)" type="text" name="photo" />
              <Input label="Email" type="email" name="email" required />
              <Input label="Tel??fono" type="text" name="phone" />
              <Input label="Celular" type="text" name="movil" required />
              <Input label="Direcci??n" type="text" name="address" />
              <Input label="UPZ" type="text" name="upz" />
              <Input label="Estrato" type="number" name="strata" />
              <DropDown label="RH" name="rh" options={Enum_RH} />
            </div>
            <div className="lg:flex-1 lg:px-5">
              <DropDown
                label="Localidad"
                name="locality"
                options={Enum_Locality}
              />
              <DropDown label="EPS" name="eps" options={Enum_EPS} />
              <DropDown label="ARL" name="arl" options={Enum_ARL} />
              <DropDown label="AFP" name="afp" options={Enum_AFP} />
              <Input
                label="Contato de Emergencia"
                type="text"
                name="emergencyContact"
              />
              <Line />
              <h6 className="text-md font-bold mt-4 mb-6">Acudiente</h6>
              <Input label="Nombre" type="text" name="nameGuardian" />
              <Input label="Apellido" type="text" name="lastNameGuardian" />
              <Input
                label="Identificaci??n"
                type="text"
                name="identificationGuardian"
              />
              <DropDown
                label="Parentesco"
                name="issuance"
                options={Enum_Issuance}
              />
              <Input label="Email" type="email" name="emailGuardian" />
              <Input label="Direcci??n" type="text" name="addressGuardian" />
              <Input label="Tel??fono" type="text" name="phoneGuardian" />
            </div>
          </div>

          <div className="flex justify-end mt-2 mr-5">
            <ButtomBig text="Guardar" type="submit" />
            <ButtomBig
              text="Cerrar"
              bg="bg-gray-500"
              onclick={() => {
                setCreateUser(false);
              }}
              type="button"
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default CreateUser;
