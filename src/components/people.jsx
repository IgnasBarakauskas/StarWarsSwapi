///All calculations and data preparing for people table
import React, { useState, useEffect } from "react";
import { getPeople } from "./../getPeople";
import Table from "./table";
import { paginate } from "../utils/paginate";
import Search from "./search";
import { filterArray } from "../filter";
import _ from "lodash";
const People = () => {
  const [people, setPeople] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize] = useState(16);
  const [sortColumn, setSortColumn] = useState({ path: "", order: "" });
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPeole = async () => {
      setLoading(true);
      const newPeople = await getPeople();
      if (newPeople) {
        newPeople.map((person) => {
          if (person.height !== "unknown")
            person.height = parseInt(person.height);
          if (person.mass !== "unknown") person.mass = parseInt(person.mass);

          return person;
        });
      }
      setPeople(newPeople);
      setLoading(false);
    };
    loadPeole();
  }, []);
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 1) {
      let newPageNumber = pageNumber;
      newPageNumber = newPageNumber + 1;
      setPageNumber(newPageNumber);
    }
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
    setPageNumber(0);
  };
  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };
  const filtered = filter
    ? people.filter(
        (person) =>
          person.name.toLowerCase().includes(filter.toLowerCase()) ||
          person.gender.toLowerCase() === filter.toLowerCase()
      )
    : people;
  const forOrder = filterArray(filtered, sortColumn.path, "unknown", false);
  const unknownArray = filterArray(filtered, sortColumn.path, "unknown", true);
  const ordered = _.orderBy(forOrder, [sortColumn.path], [sortColumn.order]);
  const mergedArray = [...ordered, ...unknownArray];
  const paginated = paginate(mergedArray, pageNumber, pageSize);
  return (
    <div>
      {loading && <div className="text">Loading...</div>}
      {!loading && (
        <React.Fragment>
          <Search change={handleChange} />
          <Table
            data={paginated}
            sortColumn={sortColumn}
            onScroll={handleScroll}
            onSort={handleSort}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default People;
