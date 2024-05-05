import { useNavigate } from "react-router-dom";

function ProjectCard({ project, handleDelete, id, image, name, pattern, craft, status }) {
    const navigate = useNavigate();

    function handleEditClick() {
        navigate(`/project/${id}`);
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
        <div className="card" >
            <img alt="" src={image} />
            <div className="info">
                <h2>{name}</h2>
                <a href={pattern} >Pattern</a>
                <li>Craft: {craft}</li>
                <li>Status: {status}</li>
            </div>
            <div>
                <button className="edit" onClick={handleEditClick}>Edit</button>
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
    