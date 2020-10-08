///Method for get all people
export const getPeople = async () => {
  let page = 1;
  let people = [];
  const size = await (await fetch(`https://swapi.dev/api/people`)).json();
  const realSize = size.count;
  people = [...people, ...size.results];
  page = page + 1;
  while (people.length < realSize) {
    const data = await (
      await fetch(`https://swapi.dev/api/people?page=${page}`)
    ).json();
    page = page + 1;
    people = [...people, ...data.results];
  }
  return people;
};
