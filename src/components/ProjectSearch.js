import { useState } from "react";

function ProjectSearch({ handleSearch }) {
    const [searchValue, setSearchValue] = useState("");

    function handleInputChange(e) {
        setSearchValue(e.target.value);
        handleSearch(e.target.value);
      }

    return (
        <div>
            <p>Search Projects:</p>
            <input 
                placeholder="Search"
                value={searchValue}
                onChange={handleInputChange} />
        </div>
    );
}

export default ProjectSearch;