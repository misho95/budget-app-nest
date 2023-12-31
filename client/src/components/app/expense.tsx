import axios from "axios";
import { TiDelete, TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import { tokenStored } from "../../utils/zustand.store";

const Expense = ({ id, type, category, amount, createdAt, filterExpense }) => {
  const token = tokenStored((state) => state.token);
  const deleteExpense = () => {
    axios({
      method: "delete",
      url: `http://localhost:3000/api/v1/expenses/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        filterExpense(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <article
      className={`${
        type === "income" ? "bg-green-300" : "bg-red-300"
      } p-3 rounded-md shadow-sm select-none border-2 border-white relative w-full sm:w-[250px]`}
    >
      <div className="flex gap-3">
        <b>type:</b> {type}
      </div>
      <div className="flex gap-3">
        <b>Category:</b> {category}
      </div>
      <div className="flex gap-3">
        <b>Amount:</b> {amount}
      </div>
      <div className="flex gap-3">
        <b>Date:</b> {createdAt.slice(0, 11)}
      </div>
      <div className="absolute right-0 top-0 flex flex-col justify-between h-full p-2 text-neutral-500">
        <button onClick={deleteExpense}>
          <TiDelete className={"w-6 h-6 hover:text-neutral-700"} />
        </button>
        <Link to={`/modexpense/${id}`}>
          <TiEdit className={"w-6 h-6 hover:text-neutral-700"} />
        </Link>
      </div>
    </article>
  );
};

export default Expense;
