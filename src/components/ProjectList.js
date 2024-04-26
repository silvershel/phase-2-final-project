import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {

    return (
        <div>
            {projects.map((project) => 
                <ProjectCard project={project} />
            )}
        </div>
    )
}

export default ProjectList;