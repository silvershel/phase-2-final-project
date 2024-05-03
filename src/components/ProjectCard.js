function ProjectCard({ project }) {

    const { image, name, pattern, craft, status } = project;

    // add "finished" status option (button?)

    return (
        <div>
            <img alt="" src={image} />
            <h2>{name}</h2>
            <p>Pattern: {pattern}</p>
            <p>Craft: {craft}</p>
            <p>Status: {status}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )

}

export default ProjectCard;

// STRETCH GOALS
    // edit button turns the page into an editable form
        // onClick Edit (show edit fields)
        // onClick Save (hide edit fields)
    // button to navigagte to Home (project list).
    