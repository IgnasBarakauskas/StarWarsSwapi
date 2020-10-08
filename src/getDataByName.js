///Method for getting data used in person table. Returning just name
export const getDataByName = async (link) => {
  const data = await (await fetch(link)).json();
  return data.name;
};
