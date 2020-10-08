///Method for filtering data (removes all unknown values or return just values withu unknown) depends from equals
///if equals === true return people who have unknow in selected field
///if equals === false return all people without value unknown in selected field
export const filterArray = (array, sortColumn, name, equal) => {
  const filtered = array.filter((item) => {
    if (equal) {
      return item[sortColumn] === name;
    } else return item[sortColumn] !== name;
  });
  return filtered;
};
