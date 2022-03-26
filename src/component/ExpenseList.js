import ExpenseListItem from "./ExpenseListItem";
import './Component.css';
import './ExpenseList.css';

const ExpenseList = (props) => {
    return (
        <div className="expenseList col-white bd-ra-4">
            <ExpenseListItem name="Some Book" cost="$ 50" />
            <ExpenseListItem name="Electricty" cost="$ 75" />
            <ExpenseListItem name="New Bike" cost="$ 100" />
        </div>
    );
}

export default ExpenseList;