import { useRef, useState } from "react";

const useFormData = (initial) => {
  const form = useRef(initial);
  const [formData, setFormData] = useState({});
  const getFormData = () => {
    const fd = new FormData(form.current);
    const obj = {};
    fd.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  };
  const updateFormData = () => {
    setFormData(getFormData());
  };
  console.log("formData: ___", formData)
  return { form, formData, updateFormData };
};

export default useFormData;