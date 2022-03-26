import DateItem from "./DateItem";
import './ExpenseListItem.css'

const ExpenseListItem = (props) => {
    return (
        <div className="expenseListItem bd-ra-4 mg-bot-8">
            <DateItem day="25" month="January" year="2022" />
            <div className="expenseListItem-container">
                <div className="expenseListItem-name">
                    {props.name}
                </div>
                <div className="expenseListItem-cost bd-ra-4 flex-center">
                    {props.cost}
                </div>
            </div>      
        </div>
    );
}

export default ExpenseListItem;