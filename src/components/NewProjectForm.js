import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function NewProjectForm() {
    const [craft, setCraft] = useState("knitting");
    const [name, setName] = useState("");
    const [pattern, setPattern] = useState("");
    const [status, setStatus] = useState("started");
    const {handleAddProject} = useOutletContext();

    function handleAddProjectClick(e) {
        e.preventDefault();
        const newProject = {
            image: "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
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
    };

    return (
        <div>
           <h2>Create A New Project</h2>
           <p>Use this form to submit a new project.</p>
           <form onSubmit={handleAddProjectClick}>
                <label>
                    Craft:
                    <select onChange={(e) => setCraft(e.target.value)}>
                        <option value="knitting">Knitting</option>
                        <option value="crochet">Crochet</option>
                    </select>
                    Project Name:
                    <input type="text" placeholder="Project Title" onChange={(e) => setName(e.target.value)}/>
                    Pattern:
                    <input type="text" placeholder="Pattern url here" onChange={(e) => setPattern(e.target.value)} />
                    Starting now?:
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="in progress">Yes</option>
                        <option value="not started">No</option>
                    </select>                    
                </label> 
                                  
                <button type="submit">Submit</button >
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