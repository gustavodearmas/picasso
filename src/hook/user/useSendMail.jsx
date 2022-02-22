import { useEffect } from "react";
import { SEND_MAIL } from "../../graphql/user/mutations";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const useSendMail = (formData, setSendMail) => {
  //console.log("formData: ", formData)
  const [createUser, { data, loading, error }] = useMutation(SEND_MAIL);

  const submitForm = (e) => {
    e.preventDefault();
    createUser({ variables: formData });
  };

  useEffect(() => {
    if (data) {
      toast.success("Email enviado con éxito");
      setSendMail(false);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error("Error al enviar el email");
    }
  }, [error]);

  if(loading){return <div>Cargando...</div>}

  return { submitForm };
};

export default useSendMail;
