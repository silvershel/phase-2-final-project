import { useState } from "react";

function ProjectFilter({ handleFilter }) {
    const [filterValue, setFilterValue] = useState("all")

const handleFilterSelect = (e) => {
    setFilterValue(e.target.value);
    handleFilter(e.target.value);
}

    return (
        <div>
            <p>Filter Projects:</p>
            <select placeholder="Search" value={filterValue} onChange={handleFilterSelect}>
                <option value="all">All</option>
                <option value="not started">Not Started</option>
                <option value="in progress">In Progress</option>
                <option value="finished">Finished</option>
            </select>
        </div>
    );
}

export default ProjectFilter;