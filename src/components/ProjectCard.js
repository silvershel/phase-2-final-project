function ProjectCard({ handleDelete, handleEdit, id, image, name, pattern, craft, status }) {

    function handleDeleteClick() {
        fetch(`http://localhost:8000/projects/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then((project) => handleDelete(project))
    }

    // separate component use outletcontext to render card details

    return (
        <div className="card" >
            <img alt="" src={image} />
            <div className="info">
                <h2>{name}</h2>
                <a href={pattern} >Pattern</a>
                <li>Craft: {craft}</li>
                <li>Status: {status}</li>
            </div>
            <div>
                <button className="edit" onClick={handleEdit}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )

}

export default ProjectCard;

// STRETCH GOALS
    // edit button turns the page into an editable form
        // onClick Edit (show edit fields)
        // onClick Save (hide edit fields)
    // button to navigagte to Home (project list).
    