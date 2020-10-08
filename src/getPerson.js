///Method for get person data by his name
export const getPerson = async (link) => {
  const data = await (await fetch(link)).json();
  let person = data.results;
  return person;
};
