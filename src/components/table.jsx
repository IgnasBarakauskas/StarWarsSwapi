///table with sorting used to give all people to user
import React from "react";
import { Link } from "react-router-dom";
const Table = (props) => {
  const raiseSort = (path) => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    props.onSort(sortColumn);
  };
  const renderSortIcon = (path) => {
    const { sortColumn } = props;
    if (path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-up"></i>;
    return <i className="fa fa-sort-down"></i>;
  };
  return (
    <div
      style={{
        height: "78.6vh",
        overflowY: "scroll",
      }}
      onScroll={props.onScroll}
    >
      <table className="table table table-hover table-dark">
        <thead>
          <tr>
            <th
              className="clickable"
              onClick={() => raiseSort("name")}
              scope="col"
            >
              Name {renderSortIcon("name")}
            </th>
            <th
              className="clickable"
              onClick={() => raiseSort("height")}
              scope="col"
            >
              Height, cm {renderSortIcon("height")}
            </th>
            <th
              className="clickable"
              onClick={() => raiseSort("mass")}
              scope="col"
            >
              Mass, kg {renderSortIcon("mass")}
            </th>
            <th
              className="clickable"
              onClick={() => raiseSort("gender")}
              scope="col"
            >
              Gender {renderSortIcon("gender")}
            </th>
            <th
              className="clickable"
              onClick={() => raiseSort("birth_year")}
              scope="col"
            >
              Birth Year {renderSortIcon("birth_year")}
            </th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((column) => (
            <tr key={column.url}>
              <td>
                <Link to={`/person/${column.name}`}>{column.name}</Link>
              </td>
              <td>{column.height}</td>
              <td>{column.mass}</td>
              <td>{column.gender}</td>
              <td>{column.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
