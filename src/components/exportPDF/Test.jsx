import React, { useEffect, useState } from "react";

const A4ExportPDF = ({ props }) => {
  //el dato que recibe porps debe tener como valor el siguiente nombre listToPDF para poder usar
  //este componente en toda la app.
  const [data, setData] = useState([]);
  console.log("props: ", props)

  useEffect(() => {
    if (data) {
      setData(props.listToPDF);
    }
  }, [props]);


  return (
    <div className="py-8 w-full text-xxs">
      <div className="shadow overflow-hidden">
        <table className="w-full bg-white border-b border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              {Object.entries(data.length >= 1 && data[0]).map(([key_, value], key) => {
                return (
                  <th key={key} className="text-left py-1 px-2 uppercase font-semibold">
                    {key_}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.length >= 1 && data.map((tr, key) => {
              return (
                <tr key={key}>
                  {Object.entries(tr).map(([key_, value], key) => {
                    return <td key={key} className="text-left py-1 px-2">{value.includes(".000Z") ? value.slice(0,10) : value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default A4ExportPDF;
