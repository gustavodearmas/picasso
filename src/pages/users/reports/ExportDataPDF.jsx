import React, { useState, useRef, useContext, useEffect } from "react";
import Modal from "../../../components/modal/modal";
import LittleData from "../../../components/exportPDF/LittleData";
import { useReactToPrint } from "react-to-print";
import UserContext from "../../../context/UserContext";
import ButtonBackground from "../../../components/buttoms/ButtonBackground";
import { GET_USERS_BY_ID } from "../../../graphql/user/querys";
import { useQuery } from "@apollo/client";
import { Enum_User_Key } from "../../../utils/enums";
import { filterObjectOnlyId } from "../../../utils/generalFunctions";
import { filterDataUserBySelecctionCheck } from "../../../utils/generalFunctions";

const ExportDataPDF = ({ listUserToPDF }) => {
  const { data, error, loading } = useQuery(GET_USERS_BY_ID, {
    variables: { _id: filterObjectOnlyId(listUserToPDF) },
  });
  const { setPreViewPDF, dataByID } = useContext(UserContext);
  const [valueKey, setValueKey] = useState([]);
  const [filterValueKey, setFilterValueKey] = useState([]);
  const [dataToPdfFiltered, setDataToPdfFiltered] = useState([]);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

   console.log("valueKey: ", valueKey);
   console.log("filterValueKey: ", filterValueKey);
   console.log("dataByID: ", dataByID);
   console.log("listUserToPDF: ", listUserToPDF);
   console.log("data: ", data);


  const filterKey = (value, boolean) => {
    if (boolean) {
      setFilterValueKey([...filterValueKey, value]);
    } else {
      var newArray = filterValueKey.filter(function(f) { return f !== value })
      setFilterValueKey(newArray)
    }
  };

  useEffect(() => {
    if (dataByID) {
      setValueKey([Object.keys(dataByID.User)]);
    }
  }, [dataByID]);

  useEffect(()=>{
    if(data){
      const i = filterDataUserBySelecctionCheck(data.UsersById, filterValueKey);
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
        <div className="bg-white flex py-2 overflow-auto justify-center h-96">
          <ComponentToPrint listUserToPDF={dataToPdfFiltered} ref={componentRef} />
        </div>
      </div>
      <span className="text-xs font-bold">Filtros: </span>
      <div className="flex flex-wrap justify-left text-xs  border my-1 px-2 py-1">
        {valueKey[0] &&
          valueKey[0].slice(2).map((o, pp) => {
            return <ItemsCheck o={o} pp={pp} filterKey={filterKey} />;
          })}
      </div>
      <div className="flex justify-end">
        <ButtonBackground text="Imprimir" onclick={handlePrint} />
        <ButtonBackground
          text="Cerrar"
          bg="bg-gray-500"
          onclick={() => setPreViewPDF(false)}
        />
      </div>
    </Modal>
  );
};

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-10 pt-4">
      <LittleData props={props} />
    </div>
  );
});

const ItemsCheck = ({ o, pp, filterKey }) => {
  return (
    <div key={pp} className="flex items-center mr-2">
      <label htmlFor="" className="mr-1">
        {Enum_User_Key[o]}
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

export default ExportDataPDF;
