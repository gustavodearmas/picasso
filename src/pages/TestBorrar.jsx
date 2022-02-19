import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TestBorrar = () => {
  var head = [["Name", "Email", "Country"]];
  var body = [
    ["David", "david@example.com", "Sweden"],
    ["Castille", "castille@example.com", "Spain"],
  ];

  const doc = new jsPDF();

  doc.autoTable({
    head: head,
    body: body,
    theme: "striped",
    styles: {
      fontSize: 8,
    },
    headStyles: { fillColor: [0, 255, 0] },
    tableWidth: "wrap",
  });

  doc.save("table.pdf");
  return <div>hola</div>;
};

export default TestBorrar;
