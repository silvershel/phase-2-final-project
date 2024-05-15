import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function NewProjectForm() {
    const [craft, setCraft] = useState("knitting");
    const [name, setName] = useState("");
    const [pattern, setPattern] = useState("");
    const [status, setStatus] = useState("in progress");
    const [image, setImage] = useState("")
    const {handleAddProject} = useOutletContext();
    const navigate = useNavigate();

    function handleAddProjectClick(e) {
        e.preventDefault();
        const newProject = {
            image: image,
            craft: craft,
            name: name,
            pattern: pattern,
            status: status
        };
        fetch(`http://localhost:8000/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(newProject),
        })
        .then((r) => r.json())
        .then((newProject) => handleAddProject(newProject))
        navigate('/');
    };

    return (
        <div >
           <h2>Create A New Project</h2>
           <p>Use this form to submit a new project.</p>
           <form onSubmit={handleAddProjectClick}>
                <label>
                    Project Name:
                    <input type="text" placeholder="Project Title" value={name} onChange={(e) => setName(e.target.value)}/>
                    Project Image:
                    <input type="text" placeholder="Image url here" value={image} src={image} onChange={(e) => setImage(e.target.value)}/>
                    Pattern:
                    <input type="text" placeholder="Pattern url here" value={pattern} onChange={(e) => setPattern(e.target.value)} />
                    Craft:
                    <select value={craft} onChange={(e) => setCraft(e.target.value)}>
                        <option value="knitting">Knitting</option>
                        <option value="crochet">Crochet</option>
                    </select>
                    Starting now?:
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="in progress">Yes</option>
                        <option value="not started">No</option>
                    </select>                    
                </label>            
                <button className="submit" >Submit</button >
           </form>
        </div>
    )
}

export default NewProjectForm;

// STRETCH GOALS
    // sumbission takes you to the main page or new project card page (to edit).
    // if starting today, set status as "started on date"
    // if not starting today set status as "not started"
    // if knitting, tools are needles
    // if crochet, tools are hooks
    // sumbission takes you to the new project card page (as a form to continue editing)