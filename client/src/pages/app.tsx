import AppContainer from "../components/app/app.container";
import Expense from "../components/app/expense";
import ExpenseContainer from "../components/app/expense.container";
import Header from "../components/app/header";

const App = () => {
  const expense = [
    {
      id: 1,
      type: "expense",
      category: "shopping",
      amount: 200,
      createdAt: "20-05-1995",
    },
    {
      id: 2,
      type: "expense",
      category: "shopping",
      amount: 600,
      createdAt: "20-05-1995",
    },
    {
      id: 3,
      type: "income",
      category: "invoice",
      amount: 600,
      createdAt: "20-05-1995",
    },
  ];

  return (
    <AppContainer>
      <Header />
      <ExpenseContainer>
        {expense.map((e) => {
          return (
            <Expense
              key={e.id}
              type={e.type}
              category={e.category}
              amount={e.amount}
              createdAt={e.createdAt}
            />
          );
        })}
      </ExpenseContainer>
    </AppContainer>
  );
};

export default App;
