function ProjectCard({ project }) {

    const { image, name, pattern, craft, status } = project;

    // add "finished" status option (or button?)

    return (
        <div>
            <img alt="" src={image} />
            <h2>{name}</h2>
            <p>Pattern: {pattern}</p>
            <p>Craft: {craft}</p>
            <p>Status: {status}</p>
        </div>
    )

}

export default ProjectCard;

// STRETCH GOALS
    // edit button turns the page into a form
    // button to go to project list
    // hide incomplete fields
    