import './Filter.css'
import './Component.css'
const Filter = (prop) => {
    return (
        <div className="filter bd-ra-4 mg-bot-8">
            <div className="filter-name col-white">
                Filter by year
            </div>
            <div className="filter-year col-white">
                Drop box
            </div>
        </div>
    );
}

export default Filter;