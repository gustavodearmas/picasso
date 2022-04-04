import React, { useState, useEffect } from "react";

const Test = () => {
  var cadena = "";
  const [contador, setContador] = useState(false);
  const [lista, setLista] = useState([]);
  let o =
    "( $nameUser: String! $lastName: String! $nationality: String) {createUser(nameUser: $nameUser lastmeUser}}";
    console.log("lista2: ", lista);
   
  useEffect(() => {
    for (let c of o) {
        console.log("c: ", c);
      if (c === "$") {
        setContador(true);
        console.log("contador: ", contador);
      }else{
          console.log("")
      }
      if (contador === true) {
        cadena = `${cadena}` + `${c}`;
        console.log("cadena: ", cadena);
      }else{
        console.log("")
      }
      if (c === "!") {
        setLista([...lista, cadena]);
        cadena = "";
        setContador(false);
        console.log("contador: ", contador);
      }else{
        console.log("")
      }

    
    }
  }, []);

  return <div>hola</div>;
};

export default Test;
