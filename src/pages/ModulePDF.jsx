import React, { useState, useEffect } from "react";
import { filterDataUserBySelecctionCheck } from "../utils/generalFunctions";
import ModalPDF from "../components/modal/ModalPDF";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFObject } from "react-pdfobject";

const ModulePDF = ({ keyValueItemsCheck, data, setCloseModal, enumValue }) => {
  const [valueKey, setValueKey] = useState([]);
  const [filterValueKey, setFilterValueKey] = useState([]);
  const [dataToPdfFiltered, setDataToPdfFiltered] = useState([]);
  const [dataBodyPDFObject, setDataBodyPDFObject] = useState([]);
  const [dataHeadPDFObject, setDataHeadPDFObject] = useState([]);
  const [uri, setUri] = useState("");
  const doc = new jsPDF();

  const dataToPDFObject = () => {
    const body = [];
    const head = [];
    Object.entries(dataToPdfFiltered).forEach(([key, value]) => {
      body.push(Object.values(value));
    });
    setDataBodyPDFObject(body);
    filterValueKey.map((k) => {
      head.push(enumValue[k]);
    });
    setDataHeadPDFObject(head);
  };

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

  const verPDF = () => {
    doc.autoTable({
      head: [dataHeadPDFObject],
      body: dataBodyPDFObject,
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

  useEffect(() => {
   
  }, []);

  useEffect(() => {
    if (keyValueItemsCheck) {
      setValueKey([Object.keys(keyValueItemsCheck)]);
      //dataBody();
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

  useEffect(() => {
    if (dataToPdfFiltered) {
      dataToPDFObject();
      verPDF();
    }
  }, [dataToPdfFiltered]);

  useEffect(() => {
    if (dataBodyPDFObject) {
      verPDF();
    }
  }, [dataBodyPDFObject]);


  return (
    <ModalPDF>
      <div className="flex pt-4">
        <div className="absolute top-3 right-3 text-red-300">
          <button onClick={() => setCloseModal(false)}>
            <i class="fal fa-times-circle"></i>
          </button>
        </div>
        <div className="w-3/12">
          <span className="flex text-xs font-bold my-3">Filtros: </span>
          <div className="flex flex-col place-content-between h-full">
            <div className="flex flex-col h-auto justify-left text-xs border my-1 px-2 py-1">
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
      <input
        type="checkbox"
        name="nameUser"
        className="h-3 w-3"
        onChange={(e) => {
          filterKey(o, e.target.checked);
        }}
      />
      <label htmlFor="" className="mr-1">
        {enumValue[o]}
      </label>
    </div>
  );
};

export default ModulePDF;
