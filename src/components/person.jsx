///Component to visualise all details about person
import React, { useState, useEffect } from "react";
import { getPerson } from "../getPerson";
import { getData } from "../getData";
import { getDataByName } from "./../getDataByName";
const Person = ({ match }) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);
  const [planet, setPlanet] = useState(null);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    if (person != null) {
      const loadData = async () => {
        const newFilms = await Promise.all(
          person.films.map((film) => (film = getData(film)))
        );
        const newPlanet = await getDataByName(person.homeworld);
        const newStarShip = await Promise.all(
          person.starships.map(
            (starship) => (starship = getDataByName(starship))
          )
        );
        const newVehicles = await Promise.all(
          person.vehicles.map((vehicle) => (vehicle = getDataByName(vehicle)))
        );
        setPlanet(newPlanet);
        setFilms(newFilms);
        setStarships(newStarShip);
        setVehicles(newVehicles);
        setLoading(false);
      };
      loadData();
    }
  }, [person]);
  useEffect(() => {
    const loadPerson = async () => {
      const newPerson = await getPerson(
        `https://swapi.dev/api/people/?search=${match.params.name}`
      );
      setPerson(newPerson[0]);
    };
    loadPerson();
  }, [match.params.name]);
  return (
    <div>
      {loading && <div className="text">Loading...</div>}
      {!loading && (
        <div
          style={{
            height: "91vh",
            overflowY: "scroll",
          }}
        >
          <table className="table table-dark">
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{person.name}</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>{person.gender}</td>
              </tr>
              <tr>
                <th>Height, cm:</th>
                <td>{person.height}</td>
              </tr>
              <tr>
                <th>Mass, kg:</th>
                <td>{person.mass}</td>
              </tr>
              <tr>
                <th>Skin Color:</th>
                <td>{person.skin_color}</td>
              </tr>
              <tr>
                <th>Eye Color:</th>
                <td>{person.eye_color}</td>
              </tr>
              <tr>
                <th>Hair color:</th>
                <td>{person.hair_color}</td>
              </tr>
              <tr>
                <th>Birth Year:</th>
                <td>{person.birth_year}</td>
              </tr>
              <tr>
                <th>Created at:</th>
                <td>{person.created}</td>
              </tr>
              <tr>
                <th>Edited at:</th>
                <td>{person.edited}</td>
              </tr>
              <tr>
                <th>Films:</th>
                <td>
                  <ul className="ullists">
                    {films.length > 0 &&
                      films.map((film) => <li key={film}>{film}</li>)}
                    {films.length === 0 && "N/A"}
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Home World:</th>
                <td>{planet}</td>
              </tr>
              <tr>
                <th>StarShips:</th>
                <td>
                  <ul className="ullists">
                    {starships.length > 0 &&
                      starships.map((starship) => (
                        <li key={starship}>{starship}</li>
                      ))}
                    {starships.length === 0 && "N/A"}
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Vehicles:</th>
                <td>
                  <ul className="ullists">
                    {vehicles.length > 0 &&
                      vehicles.map((vehicle) => (
                        <li key={vehicle}>{vehicle}</li>
                      ))}
                    {vehicles.length === 0 && "N/A"}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Person;
