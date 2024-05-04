import ProjectCard from "./ProjectCard";

function ProjectList({ projects, onDelete }) {
    
    return (
        <div>
            {projects.map((project) => 
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    project={project}
                    onDelete={onDelete}
                />
            )}
            <button>View More Projects</button>
        </div>
    )
}

export default ProjectList;