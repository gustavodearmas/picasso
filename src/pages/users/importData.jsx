import { useState } from "react";
import * as XLSX from "xlsx";
import ButtomBig from "../../components/buttoms/buttomBig";
import ModalSmall from "../../components/modal/modalSmall";

const ImportData = () => {
  const [items, setItems] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log(d);
      setItems(d);
    });
  };

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
          <div className="flex flex-row px-4 py-2 items-center rounded text-xs text-white ml-2">
            <input
              type="file"
              className="text-black"
              onChange={(e) => {
                const file = e.target.files[0];
                readExcel(file);
                setViewModal(false);
              }}
            />
          </div>
        </ModalSmall>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImportData;