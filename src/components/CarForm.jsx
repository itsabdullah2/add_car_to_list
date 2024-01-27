import { useDispatch, useSelector } from "react-redux";
import { carName, carCost, addCar } from "../store";

export const inputStyling =
  "border p-1 rounded focus:placeholder:duration-300 focus:placeholder:opacity-0 focus:outline-none";

const CarForm = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  });

  const handleNameChange = (e) => {
    dispatch(carName(e.target.value));
  };
  const handleCostChange = (e) => {
    const cost = parseInt(e.target.value) || 0;
    dispatch(carCost(cost));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="mb-4 p-5 rounded-xl shadow-xl">
      <h3 className="mb-2 text-2xl font-normal text-gray-600">Add Car</h3>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between"
      >
        <div className="flex gap-[20px]">
          <div>
            <label className="mr-2 font-medium">Name</label>
            <input
              className={inputStyling}
              placeholder="Car Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label className="mr-2 font-medium">Cost</label>
            <input
              type="number"
              className={inputStyling}
              placeholder="Car Cost"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div>
          <button className="bg-indigo-800 rounded py-1 px-3 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
