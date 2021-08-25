import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./filter.css";

function Filters({ baseUrl, changeUrl }) {
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  function filter() {
    let filterValue = getFilterValues();
    changeUrl(baseUrl + "/?" + filterValue);
  }

  function getFilterValues() {
    let filterValue = "";

    if (statusFilter != "") {
      filterValue += "&status=" + statusFilter;
    }

    if (genderFilter != "") {
      filterValue += "&gender=" + genderFilter;
    }

    return filterValue.substring(1);
  }

  return (
    <div className="filter-section">                   
      <div className="filter-item">
        <label>STATUS</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value=""></option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="filter-item">
        <label>GENDER</label>
        <select onChange={(e) => setGenderFilter(e.target.value)}>
          <option value=""></option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div className="filter-item">
        <Link
          to={{
            pathname: "/",
          }}
        >
          <button className="filterButton" type={"button"} onClick={filter}>
            SEARCH
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Filters;
