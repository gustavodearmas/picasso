import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import ButtomBig from "../../components/buttoms/buttomBig";
import Modal from "../../components/modal/modal";
import { CREATE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import useImportData from "../../hook/user/useImportData";
import DropDownOutLabel from "../../components/dropdown/DropDawnOutLabel";
import { Enum_User_Key } from "../../utils/enums";
import useExportData from "../../hook/user/useExportData";

const ImportData = () => {
  const [file, setFile] = useState(null);
  const [validateKeyExcel, setValidateKeyExcel] = useState(undefined);
  const [runImportExcel, setRunImportExcel] = useState(undefined);
  const [viewModal, setViewModal] = useState(false);
  const [keyExcel, setKeyExcel] = useState([]);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const { listKeyField } = useImportData(
    file,
    createUser,
    validateKeyExcel,
    runImportExcel
  );
  const { downloadExcel } = useExportData(Enum_User_Key);

  //const [listCheck, setListCheck] = useState([]);
  //console.log("listCheck:", listCheck);
  //console.log("runImportExcel:", runImportExcel);
  //console.log("validation 1: ", validateKeyExcel);
  //console.log("listKeyField: ", typeof listKeyField());
  //console.log("enum: ", typeof Object.values(Enum_User_Key));

  useEffect(() => {
    if (data) {
      toast.success("Importación realizada con éxito usuario", {
        position: "top-right",
      });
      setValidateKeyExcel(false);
      setFile(null);
    }
  }, [data, file, setFile]);

  useEffect(() => {
    if (error) {
      setValidateKeyExcel(false);
      setFile(null);
      setRunImportExcel(false);
      setViewModal(false);
    }
  }, [error]);

  useEffect(() => {
    if (validateKeyExcel) {
      setKeyExcel(listKeyField());
    }
  }, [validateKeyExcel]);

  if (loading) {
    return <div>Loding...</div>;
  }
  return (
    <>
      <ButtomBig
        text="Importar"
        bg="bg-gray-700"
        onclick={() => {
          setViewModal(true);
        }}
      />

      {viewModal ? (
        <Modal>
          <div className="text-gray-700 pt-2 px-6">
            <div className="flex mt-1 justify-center border-2 border-gray-300 border-dashed rounded-md">
              <div className="flex w-full space-y-1 items-center">
                <div className="container mx-auto h-full flex flex-col justify-center items-center ">
                  <div className="flex w-full justify-center px-8 py-4">
                    {/* // inline-flex agreagr abajo si se rompe el codigo  */}
                    <div className="flex py-1 px-4 w-full items-center justify-center bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-xs text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                      <span>Subir Archivo .xlsx</span>
                    </div>
                    <div className="border w-full border-gray-300 rounded-r-md flex items-center justify-center ">
                      <span className="px-4">{file && file["name"]}</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                    onChange={(e) => {
                      setValidateKeyExcel(true);
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-4 mt-2 text-xs text-gray-500">
              <button
                className="flex"
                onClick={() => {
                  downloadExcel(Enum_User_Key);
                }}
              >
                <a className="mr-2 text-parotia-3">
                  <i className="fas fa-download"></i>
                </a>
                <span>Descargar Plantilla</span>
              </button>
            </div>
            <div className="grid grid-cols-5 gap-0.5 text-xs">
              {Object.values(Enum_User_Key).map((e) => {
                return (
                  <Square
                    e={e}
                    validateKeyExcel={validateKeyExcel}
                    listKeyField={listKeyField}
                  />
                );
              })}
            </div>
            {validateKeyExcel === true ? (
            <div className="flex flex-col text-xs mt-2">
              <a className="text-parotia-3">
                <i class="fas fa-check-circle">
                  <span className="text-gray-600 ml-2">
                    Este campo ha sido verificado correctamente.
                  </span>
                </i>
              </a>

              <a className="text-yellow-300">
                <i class="fas fa-exclamation-triangle">
                  <span className="text-gray-600 ml-2">
                    Revise este campo en su archivo de Excel, es posible que la
                    importación no se realice correctamente.
                  </span>
                </i>
              </a>
            </div>
            ): 
            <></>
}
            <div className="flex justify-end mt-2">
              {validateKeyExcel === true ? (
                <ButtomBig
                  text="Importar"
                  cssadd="mt-4 w-24"
                  bg="bg-gray-600"
                  onclick={() => {
                    setRunImportExcel(true);
                    //setViewModal(false);
                  }}
                />
              ) : (
                <></>
              )}

              <ButtomBig
                text="Cancelar"
                cssadd="mt-4 w-24"
                onclick={() => {
                  setFile(null);
                  setValidateKeyExcel(false);
                  setViewModal(false);
                }}
              />
            </div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

const Square = ({ e, validateKeyExcel, listKeyField }) => {
  //Validar que hacer cuando se sube el archivo y hay error
  return validateKeyExcel === true ? (
    <div
      className={`flex flex-col ${
        listKeyField().includes(e) ? "bg-parotia-3" : "bg-menta-80"
      } rounded px-2 py-2 justify-center items-left text-white`}
    >
      <div className="flex items-center">
        <a
          className={`mr-2 text-lg  ${
            !listKeyField().includes(e) ? "text-yellow-300" : "text-white"
          }`}
        >
          {!listKeyField().includes(e) ? (
            <i class="fas fa-exclamation-triangle"></i>
          ) : (
            <i class="fas fa-check-circle"></i>
          )}
        </a>
        <span>{e}</span>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ImportData;
