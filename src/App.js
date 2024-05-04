import { useState, useEffect } from "react";
import './index.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/projects/?_limit=6`) 
        // "?_limit=6" is used to load a maximum of 6 projects on the page.
        .then((r) => r.json())
        .then((projectData) => {
            setProjects(projectData);
            setFilteredProjects(projectData);
        })
    }, []);

    function handleSearch(searchValue) {
        let searchedProjects =  projects.filter((project) => {
            return project.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        setFilteredProjects(searchedProjects);
    }
    
    return(
        <div className="App">
            <Header />
            <header>
                <NavBar />
            </header>
            <Outlet context={projects}/>
        </div>
    )
}

export default App;

// STRETCH GOALS
    // Display projects by most recently worked on
    // Sort projects by (...)