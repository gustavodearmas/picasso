import React, { useEffect } from "react";

const Borrar = () => {
  const nerList = [];
  const items = ["address", "addressGuardian", "afp"];
  const list = [
    {
      address: "Cll 54",
      addressGuardian: "mama",
      afp: "sura",
      arl: "axa",
    },
    {
      address: "Cll 60",
      addressGuardian: "papa",
      afp: "COLPENSIONES",
      arl: "COLPATRIA",
    },
  ];

  var listNew = [];
  useEffect(() => {
    filterDataUserBySelecctionCheck();
  }, []);

  const filterDataUserBySelecctionCheck = () => {
    for (let i in list) {
      let kk = {};
      Object.entries(list[i]).forEach(([key, value]) => {
        for (let k in items) {
          if (key === items[k]) {
            kk[key] = value;
          }
        }
      });
      listNew.push(kk);
    }
  };

  return <div>hols</div>;
};

export default Borrar;
