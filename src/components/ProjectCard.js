function ProjectCard({ project }) {

    // Object Destructuring Assignment
    const { name, designer, pattern, image } = project;

    return (
        <div>
            <h1>{name}</h1>
            <p>Designer: {designer}</p>
            <p>Pattern: {pattern}</p>
            <img src={image} />
        </div>
    )

}

export default ProjectCard;