///Method for getting data for person. Returning just title
export const getData = async (link) => {
  const data = await (await fetch(link)).json();
  return data.title;
};
