import { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const useExportData = (Enum) => {
  const [list, setList] = useState({});
  const extractionValue = Object.values(Enum);

  useEffect(() => {
    let updateValue = {};
    extractionValue.map((e) => {
      updateValue[e] = undefined;
      setList({ ...list, ...updateValue });
    });
  }, [Enum]);

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet([list]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Responses");
    XLSX.writeFile(wb, "export.xlsx");
  };

  return { downloadExcel };
};

export default useExportData;
