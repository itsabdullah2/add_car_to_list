import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCar = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCar,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // If the car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div
        key={car.id}
        className="flex items-center justify-between mb-2 p-5 rounded-xl shadow-md"
      >
        <p className={`${bold && "font-bold"}`}>
          {car.name} - ${car.cost}
        </p>
        <button
          type="button"
          className="py-1 px-3 rounded bg-rose-500 text-white"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars} <hr className="mt-4" />
    </div>
  );
};

export default CarList;
