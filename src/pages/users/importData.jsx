import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import ButtomBig from "../../components/buttoms/buttomBig";
import Modal from "../../components/modal/modal";
import { CREATE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import useImportData from "../../hook/user/useImportData";
import DropDownOutLabel from "../../components/dropdown/DropDawnOutLabel";
import { Enum_User_Key } from "../../utils/enums";

const ImportData = () => {
  const [file, setFile] = useState(null);
  const [run, setRun] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [keyExcel, setKeyExcel] = useState([]);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  const { listKeyField } = useImportData(file, createUser, run);

  console.log("Enum_User_Key: ");
  console.log("listKeyField: ", listKeyField());

  useEffect(() => {
    if (data) {
      toast.success("Importación realizada con éxito usuario", {
        position: "top-right",
      });
      setRun(false);
      setFile(null);
    }
  }, [data, file, setFile]);

  useEffect(() => {
    if (error) {
      setRun(false);
      setFile(null);
    }
  }, [error]);

  useEffect(() => {
    if (run) {
      setKeyExcel(listKeyField());
    }
  }, [run]);

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
          <div className="text-gray-700 pt-2  px-6">
            <div className="mt-1 flex justify-center border-2 border-gray-300 border-dashed rounded-md ">
              <div className="flex flex-col w-full space-y-1 items-center">
                <div className="container mx-auto h-full flex flex-col justify-center items-center ">
                  <div className="flex w-full justify-center px-12 py-4">
                    {/* // inline-flex agreagr abajo si se rompe el codigo  */}
                    <div className="flex py-1 px-4 items-center justify-center bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-xs text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
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
                      <span> Subir</span>
                    </div>
                    <div className="border w-full border-gray-300 rounded-r-md flex items-center justify-between ">
                      <span className="px-4">{file && file["name"]}</span>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
            <span className="flex justify-end text-xs text-gray-500 mb-4">
              * Extensión del archivo .xlsx
            </span>
            <div className="grid grid-cols-5 gap-0.5 text-xs">
              {listKeyField().map((e) => {
                return <Square e={e} />;
              })}
            </div>
            <div className="flex justify-end mt-2">
              {file !== null ? (
                <ButtomBig
                  text="Importar"
                  cssadd="mt-4 w-24"
                  onclick={() => {
                    setRun(true);
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

const Square = ({ e }) => {
  const [bg, setBg] = useState("bg-red-200");
  const [listCheck, setListCheck] = useState([]);

  const kk = (l, e) => {
    setListCheck(... `${e}`)
    //console.log("e: ", e, "l: ", l);
    console.log("hola")
    if (e === l) {
      setBg("bg-green-200");
    } else {
      setBg("bg-red-200");
    }
  };



  return (
    <div
      className={`flex flex-col ${bg} rounded px-2 py-2 justify-center items-center`}
    >
      <span>{e}</span>
      <select
        onBlur={(l) => kk(l.target.value, e)}
        //onChange={(l) => kk(l.target.value, e)}
        className="bg-white rounded-md text-gray-600 px-2 py-1 focus:outline-none text-xs w-full"
      >
        {Object.values(Enum_User_Key).map((o) => {
          return <option>{o}</option>;
        })}
      </select>
    </div>
  );
};

export default ImportData;
