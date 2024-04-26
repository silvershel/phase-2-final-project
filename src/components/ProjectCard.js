function ProjectCard({ project }) {

    // Object Destructuring Assignment
    const { name, designer, pattern } = project;

    return (
        <div>
            <h1>{name}</h1>
            <p>Designer: {designer}</p>
            <p>Pattern: {pattern}</p>
        </div>
    )

}

export default ProjectCard;