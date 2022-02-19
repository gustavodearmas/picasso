import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import ButtomBig from "../../components/buttoms/buttomBig";
import ModalSmall from "../../components/modal/modalSmall";
import { CREATE_USER } from "../../graphql/user/mutations";
import toast from "react-hot-toast";
import useImportData from "../../hook/user/useImportData";

const ImportData = () => {
  const [file, setFile] = useState(null);
  const [run, setRun] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  useImportData(file, createUser, run);

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
        <ModalSmall>
          <div className="text-gray-700 py-4 px-6">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="flex flex-col space-y-1 items-center  ">
                <div className="container mx-auto h-full flex flex-col justify-center items-center">
                  <div className="flex w-full justify-center">
                    {/* // inline-flex agreagr abajo si se rompe el codigo  */}
                    <div className="flex py-1 items-center px-4 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-xs text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ">
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
                    <div className="border border-gray-300 rounded-r-md flex items-center justify-between">
                      <span className="px-4 w-full">
                        {file && file["name"]}
                      </span>
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
            <span className="text-xs text-gray-500">
              * Extensión del archivo .xlsx
            </span>
            <div className="flex justify-center">
              {file !== null ? (
                <ButtomBig
                  text="Importar"
                  cssadd="mt-4 w-full"
                  onclick={() => {
                    setRun(true);
                    setViewModal(false);
                  }}
                />
              ) : (
                <></>
              )}
              <ButtomBig
                text="Cancelar"
                cssadd="mt-4 w-full"
                onclick={() => {
                  setFile(null);
                  setViewModal(false);
                }}
              />
            </div>
          </div>
        </ModalSmall>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImportData;
