import { useOutletContext } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function ProjectList() {
    const projects = useOutletContext();
    


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