import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div className="flex items-center justify-end gap-[10px] mt-4">
      <h3 className="text-2xl font-normal text-gray-600">Total Cost:</h3>
      <p className="text-2xl font-normal text-gray-600">${totalCost}</p>
    </div>
  );
};

export default CarValue;
