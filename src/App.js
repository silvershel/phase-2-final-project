import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import './index.css';

function App() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    // FETCH request to display all projects.
    useEffect(() => {
        fetch(`http://localhost:8000/projects`) 
        // "?_limit=6" is used to load a maximum of 6 projects on the page.
        .then((r) => r.json())
        .then((projectData) => {
            setProjects(projectData);
            setFilteredProjects(projectData);
        })
    }, []);

    // POST request from NewProjectForm component.
    function handleAddProject(newProject) {
        setProjects([...projects, newProject])
        setFilteredProjects([...projects, newProject])
    }

    // DELETE request to delete a ProjectCare.
    function handleDelete(deletedProject) {
        let updatedProjects = projects.filter((project) => project !== deletedProject)
        setProjects(updatedProjects);
        setFilteredProjects(updatedProjects);
    }

    // Edit button click
    function handleEditClick() {

    }

    // Filter function for Search component.
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
            <Outlet context={{ filteredProjects, handleSearch, handleAddProject, handleDelete }} />
        </div>
    )
}

export default App;

// STRETCH GOALS
    // Display projects by most recently worked on
    // Sort projects by (...)