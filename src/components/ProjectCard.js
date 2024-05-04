function ProjectCard({ project, handleDelete }) {
    const { id, image, name, pattern, craft, status } = project;

    function handleEditClick() {
        console.log("edit clicked")
    }

    function handleDeleteClick() {
        fetch(`http://localhost:8000/projects/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => handleDelete(project))
    }

    // add "finished" status option (button?)

    return (
        <div>
            <img alt="" src={image} />
            <h2>{name}</h2>
            <p>Pattern: {pattern}</p>
            <p>Craft: {craft}</p>
            <p>Status: {status}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )

}

export default ProjectCard;

// STRETCH GOALS
    // edit button turns the page into an editable form
        // onClick Edit (show edit fields)
        // onClick Save (hide edit fields)
    // button to navigagte to Home (project list).
    