import React, { useState, useEffect } from "react";
import { filterDataUserBySelecctionCheck } from "../../utils/generalFunctions";
import ModalPDF from "../modal/ModalPDF";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFObject } from "react-pdfobject";
import ButtonBackground from "../buttoms/ButtonBackground";
import useExportData from "../../hook/useExportData";

//ModulePDF recibe 4 props:
//keyValueItemsCheck: es un objecto que contiene las claves que queremos mostrar en los encabezados de las tablas, generalmente usamos el primer objecto de la data. Ejemplo: data[0][0]
//data: es un objecto que tiene toda la información sin filtrar de los registros selecionados, debe tener un solo elemento para poder obtener os valores asi; data[0]
//setCloseModal: es la funcion que permite cerrar la ventana modal. 
//enumValue: es un objeto que tiene las claves y su valor debe ser el valor real que se renderizará en el front. Ejemplo: {user: Usuario}
const ModulePDF = ({ keyValueItemsCheck, data, setCloseModal, enumValue }) => {
  const [valueKey, setValueKey] = useState([]);
  const [filterValueKey, setFilterValueKey] = useState([]);
  const [dataToPdfFiltered, setDataToPdfFiltered] = useState([]);
  const [dataBodyPDFObject, setDataBodyPDFObject] = useState([]);
  const [dataHeadPDFObject, setDataHeadPDFObject] = useState([]);
  const { exportdata } = useExportData(dataHeadPDFObject, dataBodyPDFObject);
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

  const viewPDF = () => {
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
      viewPDF();
    }
  }, [dataToPdfFiltered]);

  useEffect(() => {
    if (dataBodyPDFObject) {
      viewPDF();
    }
  }, [dataBodyPDFObject]);


  return (
    <ModalPDF>
      <div className="flex pt-4">
        <div className="absolute top-2 left-3 text-gray-300">
          <button onClick={() => setCloseModal(false)}>
            <i className="fal fa-times-circle"></i>
          </button>
        </div>
        <div className="w-3/12">
          <div className="flex text-xs font-bold justify-between my-3">
          <span className="flex items-end">Filtros: </span>
          <ButtonBackground text="Excel" icon="fas fa-download" onclick={()=>{exportdata()}} type="button"/> 
          </div>
          <div className="flex flex-col place-content-between h-full">
            <div className="flex flex-col h-auto justify-left text-xs border my-1 px-2 py-1">
              {valueKey[0] &&
                valueKey[0].slice(2).map((o) => {
                  return (
                    <div key={o} className="flex items-center mr-2">
                    <ItemsCheck
                      o={o}
                      filterKey={filterKey}
                      enumValue={enumValue}
                    />
                    </div>
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

const ItemsCheck = ({ o, filterKey, enumValue }) => {
  return (
   <>
      <input
        type="checkbox"
        name="nameUser"
        className="h-3 w-3 mr-2"
        onChange={(e) => {
          filterKey(o, e.target.checked);
        }}
      />
      <label htmlFor="" className="mr-1">
        {enumValue[o]}
      </label>
    </>
  );
};

export default ModulePDF;
