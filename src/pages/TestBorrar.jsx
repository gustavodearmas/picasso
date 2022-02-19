import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { PDFObject } from 'react-pdfobject';
import Test2Borrar from "./Test2Borrar";

const TestBorrar = () => {
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
    <div>
      <button onClick={() => verPDF()}>Visualizar</button>
      <Test2Borrar/>
      {/* <div className="flex justify-center">
      <PDFObject url={uri} width="900px" height="500px" />
      </div> */}
     
    </div>
  );
};

export default TestBorrar;
