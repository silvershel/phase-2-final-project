import ProjectCard from "./ProjectCard";

function ProjectList({ projects, handleDelete, handleEdit }) {
    
    return (
        <div>
            <div className="container">
                {projects.map((project) => 
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        name={project.name}
                        pattern={project.pattern}
                        craft={project.craft}
                        status={project.status}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                    />
                )}
            </div>
            <div>
                <button className="button">View More Projects</button>
            </div>
        </div>
    )
}

export default ProjectList;