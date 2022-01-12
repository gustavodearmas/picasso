import React from "react";
import Modal from "../../components/modal";
import ButtomBig from "../../components/buttoms/buttomBig";
import Input from "../../components/input";
import DropDown from "../../components/dropDown";
import useFormData from "../../hook/userFormData";

const EditUser = ({ setEditUser }) => {
  const { form, formData, updateFormData } = useFormData(null);
  const submitForm = (e) => {
    e.preventDefault();
    console.log("formData: ", formData)
  }
  return (
    <Modal cssadd="bg-gray-200">
      <form onSubmit={submitForm} onChange={updateFormData} ref={form}>
        <div className="flex">
          <div className="w-3/6 px-10">
            <Input label="Label" type="text" name="valor1" defaultValue="" />
            <Input label="Label" type="text" name="valor2" defaultValue="" />
            <Input label="Label" type="text" name="valor3" defaultValue="" />
            <DropDown label="Label" name="valor7" defaultValue = "" options="" />
            <DropDown label="Label" name="valor8" defaultValue = "" options=""/>
            <DropDown label="Label" name="valor9" defaultValue = "" options=""/>
          </div>
          <div className="w-3/6 px-10">
            <Input label="Label" type="text" name="valor4" defaultValue=""/>
            <Input label="Label" type="text" name="valor5" defaultValue=""/>
            <Input label="Label" type="text" name="valor6" defaultValue=""/>
            <DropDown label="Label" name="valor10" defaultValue = "" options=""/>
            <DropDown label="Label" name="valor11" defaultValue = "" options=""/>
            <DropDown label="Label" name="valor12" defaultValue = "" options=""/>
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
