import React, { useEffect, useState } from "react";

const LittleData = ({ props }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data) {
      setData(props.listUserToPDF);
    }
  }, [props]);


  return (
    <div className="py-8 w-full text-xxs">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
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
                    return <td key={key} className="text-left py-1 px-2">{value}</td>;
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

export default LittleData;
