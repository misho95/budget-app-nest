import axios from "axios";
import AppContainer from "../components/app/app.container";
import Expense from "../components/app/expense";
import ExpenseContainer from "../components/app/expense.container";
import Header from "../components/app/header";
import { useState, useEffect } from "react";
import { tokenStored } from "../utils/zustand.store";

interface ExpenseType {
  _id: string;
  _v: number;
  updatedAt: string;
  createdAt: string;
  amount: number;
  category: string;
  type: string;
}

const App = () => {
  const [expense, setExpense] = useState<ExpenseType[]>([]);
  const token = tokenStored((state) => state.token);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/expenses",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data);
        setExpense(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterExpense = (id: string) => {
    const filter = expense.filter((e) => {
      if (e._id !== id) {
        return e;
      }
    });
    setExpense(filter);
  };

  const clear = () => {
    setExpense([]);
  };

  return (
    <AppContainer>
      <Header clear={clear} />
      <ExpenseContainer>
        {expense.map((e) => {
          return (
            <Expense
              key={e._id}
              id={e._id}
              type={e.type}
              category={e.category}
              amount={e.amount}
              createdAt={e.createdAt}
              filterExpense={filterExpense}
            />
          );
        })}
      </ExpenseContainer>
    </AppContainer>
  );
};

export default App;
