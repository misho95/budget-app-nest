import { useState, useEffect } from "react";
import Input from "../forms/input";
import { tokenStored } from "../../utils/zustand.store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditExpense = ({ id }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<string | null>(null);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const token = tokenStored((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/v1/expenses/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const { amount, category, createdAt, type } = res.data;
        setAmount(amount);
        setType(type);
        setCategory(category);
        const originalDate = new Date(createdAt);
        const formattedDate = originalDate.toISOString().split("T")[0];
        setDate(formattedDate);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitChange = (e) => {
    e.preventDefault();
    axios({
      method: "put",
      url: `http://localhost:3000/api/v1/expenses/${id}`,
      data: {
        amount: +amount,
        type,
        category,
        createdAt: date,
      },
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" w-11/12 sm:w-1/5 flex flex-col gap-6">
      <h1 className="text-xl text-center text-neutral-600">Add New Expense</h1>
      <form onSubmit={submitChange} className="flex flex-col gap-3">
        <Input
          title={"Amount"}
          type={"number"}
          placeholder={null}
          value={amount}
          set={setAmount}
        />
        <div className="flex justify-around">
          <span className="flex justify-center items-center gap-2">
            Income
            <input
              type="radio"
              name="type"
              value={"income"}
              onChange={() => setType("income")}
              checked={type === "income" ? true : false}
            />
          </span>
          <span className="flex justify-center items-center gap-2">
            Expense
            <input
              type="radio"
              name="type"
              value={"expense"}
              onChange={() => setType("expense")}
              checked={type === "expense" ? true : false}
            />
          </span>
        </div>

        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-full border-[1px] border-neutral-400 rounded-lg bg-transparent p-2 focus:outline-none"
        >
          <option disabled></option>
          {type === "expense" ? (
            <>
              <option value="shopping">Shopping</option>
              <option value="shopping">Gym</option>
            </>
          ) : type === "income" ? (
            <>
              <option value="invoice">Invoice</option>
              <option value="other">Other</option>
            </>
          ) : null}
        </select>

        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          className="w-full border-[1px] border-neutral-400 rounded-lg bg-transparent p-2 focus:outline-none"
        />

        <button className="bg-indigo-500 p-2 rounded-lg text-white">
          Edit Expense
        </button>
      </form>
    </div>
  );
};

export default EditExpense;
