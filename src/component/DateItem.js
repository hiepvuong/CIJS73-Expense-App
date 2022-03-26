import './Component.css'
import './DateItem.css'

const DateItem = (props) => {
    return (
        <div className="dateItem col-white bg-black bd-ra-4">
            <div classname="date-Item-month">
                {props.month}
            </div>
            <div classname="dateItem-year">
                {props.year}
            </div>
            <div classname="dateItem-day">
                {props.day}
            </div>
        </div>
    );
}

export default DateItem;