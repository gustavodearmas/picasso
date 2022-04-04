import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

const useImportData = (file, mutation, validateKeyExcel, runImportExcel) => {
  const [dataP, setData_] = useState([]);

  useEffect(() => {
    if (validateKeyExcel || runImportExcel === true) {
      readExcel(file);
    }
  }, [validateKeyExcel, file, runImportExcel]);

  const listKeyField = () => {
    if (validateKeyExcel === true) {
      const r = Object.keys(dataP);
      return r;
    }
  };

  const readExcel = (file) => {
    console.log("b");
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
        setData_(data[0]);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    if (runImportExcel) {
      promise.then((d) => {
        console.log("jj", d);
        d.forEach((u) => {
          console.log("ee: ", u)
          mutation({ variables: u })
            .then((a) => {})
            .catch((e) => {
              if (e["message"].includes("duplicate")) {
                toast.error(
                  `Campos duplicados: ${e["message"]
                    .slice(80)
                    .replace("}", " ")}`,
                  { position: "top-right" }
                );
              }
              toast.error(
                `Se produjo el siguiente error: ${e.networkError.result.errors[0].message}`,
                { position: "top-right" }
              );
            }
            );
        }
        );
      });
    }
  };

  return { listKeyField };
};

export default useImportData;
