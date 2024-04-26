import { useState } from 'react';

function Search({projects}) {
    // To Do: Determine Where This State Needs to Be Passed To
    // In Order to Filter Out Projects
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div>
            {/* To Do: Add Controlled Form
            
                Tie Input Values to State

            */}
            
            <p>Search</p>
            
            <input 
                placeholder="Enter project title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default Search;