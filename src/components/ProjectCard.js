function ProjectCard({ project }) {

    const { name, designer, pattern, image } = project;

    // add "finished" status option (or button?)

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

// STRETCH GOALS
    // edit button turns the page into a form
    // button to go to project list
    // hide incomplete fields
    