import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleDelete }) {
    
    return (
        <div>
            {projects.map((project) => 
                <ProjectCard 
                    key={project.id}
                    id={project.id}
                    project={project}
                    handleDelete={handleDelete}
                />
            )}
            <button>View More Projects</button>
        </div>
    )
}

export default ProjectList;