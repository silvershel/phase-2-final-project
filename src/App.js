import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import './index.css';

function App() {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [edit, setEdit] = useState("false");
    
    const navigate = useNavigate();

    // FETCH request to display all projects.
    useEffect(() => {
        fetch(`http://localhost:8000/projects/`) 
        // Use "?_limit=#" to load a maximum of # projects on the page.
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

    // Search function for ProjectSearch component.
    function handleSearch(searchValue) {
        let searchedProjects =  projects.filter((project) => {
            return project.name.toLowerCase().includes(searchValue.toLowerCase());
        })
        setFilteredProjects(searchedProjects);
    }

    // Filter function for ProjectFilter component.
    function handleFilter(selectedCategory) {
        let filteredProjects =  projects.filter((project) => {
            if (project.status === selectedCategory) {
                return project;
            } else if (selectedCategory === "all") {
                return project;
            }
        })
        setFilteredProjects(filteredProjects);
    }

     // Edit button click
     function handleEdit() {
        let projectToEdit = projects.filter((project) => {
            navigate(`/project/${project.id}`)
        })
    }
    
    return(
        <div className="App">
            <Header />
            <header>
                <NavBar />
            </header>
            <Outlet context={{ filteredProjects, handleAddProject, handleDelete, handleSearch, handleFilter, handleEdit }} />
        </div>
    )
}

export default App;

// STRETCH GOALS
    // Display projects by most recently worked on
    // Sort projects by (...)