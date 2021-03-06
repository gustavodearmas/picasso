import React from "react";
import ButtonBackground from "../buttoms/ButtonBackground";
import InputCol from "../form/InputCol";
import TextAreaCol from "../form/TextAreaCol";
import useFormData from "../../hook/user/useFormData";
import Modal from "../modal/modal";
import useSendMail from "../../hook/user/useSendMail";



const SendMail = ({ setSendMail, email }) => {
  const { form, formData, updateFormData } = useFormData(null);
  formData.to = email;

  const { submitForm } = useSendMail(formData, setSendMail);

  return (
    <Modal onClick={setSendMail}>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className="h-full"
      >
        <div className="h-23/24">
          <InputCol
            type="email"
            name="to"
            label="Destino: "
            defaultValue={email}
            required
            disabled
          />
          <InputCol
            type="text"
            name="subject"
            label="Asunto: "
            defaultValue="test"
            required
          />
          <TextAreaCol
            type="text"
            name="message"
            label="Mensaje: "
            defaultValue="test"
            required
          />
      
        </div>
        <div className="flex justify-end h-1/24">
          <ButtonBackground text="Enviar" cssadd="w-20" type="submit" />
          <ButtonBackground
            text="Cancelar"
            bg="bg-gray-500"
            cssadd="w-20"
            onclick={() => {
              setSendMail(false);
            }}
            type="button"
          />
        </div>
      </form>
    </Modal>
  );
};

export default SendMail;
