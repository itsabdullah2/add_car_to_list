import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputStyling } from "./CarForm";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTerm = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="flex items-center justify-between mb-2">
      <h3 className="mb-2 text-2xl font-normal text-gray-600">My Car</h3>
      <div>
        <label className="mr-2 font-medium">Search</label>
        <input
          type="search"
          placeholder="Search"
          className={inputStyling}
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </div>
    </div>
  );
};

export default CarSearch;
