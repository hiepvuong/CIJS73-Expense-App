import Chart from "./component/Chart";
import ExpenseList from "./component/ExpenseList";
import Filter from "./component/Filter";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="expense bg-black bd-ra-4">
        <Filter />
        <Chart />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
