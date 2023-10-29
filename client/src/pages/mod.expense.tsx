import AppContainer from "../components/app/app.container";
import Header from "../components/app/header";
import { useParams } from "react-router-dom";
import AddExpense from "../components/app/addexpense";
import EditExpense from "../components/app/editexpense";

const ModExpense = () => {
  const { expenseId } = useParams();

  return (
    <AppContainer>
      <Header />
      {!expenseId ? <AddExpense /> : <EditExpense id={expenseId} />}
    </AppContainer>
  );
};

export default ModExpense;
