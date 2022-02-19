import React, { useState, useRef, useContext, useEffect } from "react";
import Modal from "../components/modal/modal";
import A4ExportPDF from "../components/exportPDF/A4ExportPDF";
import { useReactToPrint } from "react-to-print";
import ButtonBackground from "../components/buttoms/ButtonBackground";
import { filterDataUserBySelecctionCheck } from "../utils/generalFunctions";

//ExportDataPDF recibe dos props, el primero eun array que se itera para extraer los campos a selecionar
//para el filtro en la exportación, el segundo, es la data general que se va a incluir en el pdf.
//El tecer props es el valor para cerrar el modal y el tulimo argumento es el emun con los campos a mostrar en los filtros
const PDFModule = ({ keyValueItemsCheck, data, setCloseModal, enumValue }) => {
  const [valueKey, setValueKey] = useState([]);
  const [filterValueKey, setFilterValueKey] = useState([]);
  const [dataToPdfFiltered, setDataToPdfFiltered] = useState([]);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const filterKey = (value, boolean) => {
    if (boolean) {
      setFilterValueKey([...filterValueKey, value]);
    } else {
      var newArray = filterValueKey.filter(function(f) { return f !== value })
      setFilterValueKey(newArray)
    }
  };
  useEffect(() => {
    if (keyValueItemsCheck) {
      setValueKey([Object.keys(keyValueItemsCheck)]);
    }
  }, [keyValueItemsCheck]);

  useEffect(()=>{
    if(data){
      const i = filterDataUserBySelecctionCheck(Object.values(data)[0], filterValueKey);
      setDataToPdfFiltered(i);
    }
 
  }, [filterValueKey])

  return (
    <Modal>
      <div className="relative bg-gray-400 p-4">
        <div className="absolute w-9 h-9 bg-gray-500">
          <div className="w-9 overflow-hidden inline-block">
            <div className="h-16 bg-gray-400 rotate-45 transform origin-top-right"></div>
          </div>
        </div>
        <div className="bg-white py-2 overflow-auto justify-center h-96">
          <ComponentToPrint listToPDF={dataToPdfFiltered} ref={componentRef} />
        </div>
      </div>
      <span className="text-xs font-bold">Filtros: </span>
      <div className="flex flex-wrap justify-left text-xs  border my-1 px-2 py-1">
        {valueKey[0] &&
          valueKey[0].slice(2).map((o, pp) => {
            return <ItemsCheck o={o} pp={pp} filterKey={filterKey} enumValue={enumValue} />
          })}
      </div>
      <div className="flex justify-end">
        <ButtonBackground text="Imprimir" onclick={handlePrint} />
        <ButtonBackground
          text="Cerrar"
          bg="bg-gray-500"
          onclick={() => setCloseModal(false)}
        />
      </div>
    </Modal>
  );
};

//Esto debería ser un componente
const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-2 pt-4">
      <A4ExportPDF props={props} />
    </div>
  );
});

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

export default PDFModule;

  //  console.log("valueKey: ", valueKey);
  //  console.log("filterValueKey: ", filterValueKey);
  //  console.log("dataQueryOneUserById: ", dataQueryOneUserById);
  //  console.log("listToPDF: ", listToPDF);
  //  console.log("data: ", data);

