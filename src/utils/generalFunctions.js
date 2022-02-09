const calculateAge = (birthday) => {
  var birthday_arr = birthday.split("-");
  var birthday_date = new Date(
    birthday_arr[0],
    birthday_arr[1] - 1,
    birthday_arr[2]
  );
  var ageDifMs = Date.now() - birthday_date.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const filterObjectOnlyId = (data) => {
  const list = [];
  Object.entries(data).forEach(([key, value]) => {
    list.push(value._id);
  });
  return list;
};

const filterDataUserBySelecctionCheck = (dataArray, dataCheck) => {
  var listNew = [];
  for (let i in dataArray) {
    let array = {};
    Object.entries(dataArray[i]).forEach(([key, value]) => {
      for (let v in dataCheck) {
        if (key === dataCheck[v]) {
          array[key] = value;
        }
      }
    });
    listNew.push(array);
  }
  return listNew;
};

export { calculateAge, filterObjectOnlyId, filterDataUserBySelecctionCheck };
