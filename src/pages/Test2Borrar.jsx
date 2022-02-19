import React, { useState, useRef, useContext, useEffect } from "react";
import Modal from "../components/modal/modal";
import A4ExportPDF from "../components/exportPDF/A4ExportPDF";
import { useReactToPrint } from "react-to-print";
import ButtonBackground from "../components/buttoms/ButtonBackground";
import { filterDataUserBySelecctionCheck } from "../utils/generalFunctions";
import ModalPDF from "../components/modal/ModalPDF";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFObject } from "react-pdfobject";

const Test2Borrar = ({
  keyValueItemsCheck,
  data,
  setCloseModal,
  enumValue,
}) => {
  const [valueKey, setValueKey] = useState([]);
  const [filterValueKey, setFilterValueKey] = useState([]);
  const [dataToPdfFiltered, setDataToPdfFiltered] = useState([]);

  const filterKey = (value, boolean) => {
    if (boolean) {
      setFilterValueKey([...filterValueKey, value]);
    } else {
      var newArray = filterValueKey.filter(function (f) {
        return f !== value;
      });
      setFilterValueKey(newArray);
    }
  };
  useEffect(() => {
    if (keyValueItemsCheck) {
      setValueKey([Object.keys(keyValueItemsCheck)]);
    }
  }, [keyValueItemsCheck]);

  useEffect(() => {
    if (data) {
      const i = filterDataUserBySelecctionCheck(
        Object.values(data)[0],
        filterValueKey
      );
      setDataToPdfFiltered(i);
    }
  }, [filterValueKey]);

  const [uri, setUri] = useState("");
  var head = [["Name", "Email", "Country"]];
  var body = [
    ["David", "david@example.com", "Sweden"],
    ["Castille", "castille@example.com", "Spain"],
  ];

  const doc = new jsPDF();

  const verPDF = () => {
    doc.autoTable({
      head: head,
      body: body,
      theme: "grid",
      styles: {
        fontSize: 7,
      },
      headStyles: { fillColor: [49, 156, 140] },
      tableWidth: "wrap",
    });
    //doc.save("table.pdf");
    setUri(doc.output("bloburi"));
  };

  return (
    <ModalPDF>
      <div className="flex pt-4">
        <div className="absolute top-3 right-3 text-red-300">
          <button  onClick={() => setCloseModal(false)}>
            <i class="fal fa-times-circle"></i>
          </button>
        </div>
        <div className="w-3/12">
          <span className="flex text-xs font-bold my-3">Filtros: </span>
          <div className="flex flex-col place-content-between h-full">
            <div className="flex flex-wrap justify-left text-xs border my-1 px-2 py-1">
              {valueKey[0] &&
                valueKey[0].slice(2).map((o, pp) => {
                  return (
                    <ItemsCheck
                      o={o}
                      pp={pp}
                      filterKey={filterKey}
                      enumValue={enumValue}
                    />
                  );
                })}
            </div>
            <div className="flex justify-end">
              <button onClick={() => verPDF()}>Visualizar</button>
            </div>
          </div>
        </div>
        <div className="w-9/12 ml-5  flex justify-center">
          <PDFObject url={uri} width="600px" height="500px" />
        </div>
      </div>
    </ModalPDF>
  );
};

//Esto debería ser un componente

const ItemsCheck = ({ o, pp, filterKey, enumValue }) => {
  return (
    <div key={pp} className="flex items-center mr-2">
      <label htmlFor="" className="mr-1">
        {enumValue[o]}
      </label>
      <input
        type="checkbox"
        name="nameUser"
        className="h-3 w-3"
        onChange={(e) => {
          filterKey(o, e.target.checked);
        }}
      />
    </div>
  );
};

export default Test2Borrar;
