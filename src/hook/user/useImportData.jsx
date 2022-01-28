import { useEffect } from "react";
import * as XLSX from "xlsx";
import toast from "react-hot-toast";

const useImportData = (file, mutation, run) => {
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
      d.forEach((u) => {
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
          });
      });
    });
  };

  useEffect(() => {
    if (run === true) {
      readExcel(file);
    }
  }, [run, file]);
};

export default useImportData;
