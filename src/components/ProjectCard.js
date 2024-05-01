function ProjectCard({ project }) {

    const { name, designer, pattern, image } = project;

    return (
        <div>
            <h2>{name}</h2>
            <p>Designer: {designer}</p>
            <p>Pattern: {pattern}</p>
            <img alt="" src={image} />
        </div>
    )

}

export default ProjectCard;