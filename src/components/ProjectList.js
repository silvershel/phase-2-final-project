import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {

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