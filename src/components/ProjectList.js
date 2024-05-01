import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        console.log('useEffect Fired')

        fetch(`http://localhost:8000/projects/?_limit=6`) 
        // "?_limit=6" is used to load a maximum of 6 projects on the page.
        // TODO display projects by most recently worked on
        .then((r) => r.json())
        .then((projects) => setProjects(projects))
    }, []);

    return (
        <div>
            {projects.map((project) => 
                <ProjectCard 
                    key={project.id}
                    project={project} 
                />
            )}
            <button>View More Projects</button>
        </div>
    )
}

export default ProjectList;