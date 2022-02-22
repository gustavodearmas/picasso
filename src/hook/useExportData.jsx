import * as XLSX from "xlsx";
import filesaver from "file-saver";

const useExportData = (head, body) => {
  var wb = XLSX.utils.book_new();
  const s2ab = (s) => {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  };

  const exportdata = () => {
    wb.SheetNames.push("Hoja 1");
    var ws_data = [head, ...body];
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    wb.Sheets["Hoja 1"] = ws;
    var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    filesaver.saveAs(
      new Blob([s2ab(wbout)], { type: "application/octet-stream" }),
      "unnamed.xlsx"
    );
  };

  return { exportdata };
};

export default useExportData;
