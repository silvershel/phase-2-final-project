import { useState } from "react";

function NewProjectForm({ onAddProject }) {
const [craft, setCraft] = useState("knitting");
const [name, setName] = useState("");
const [pattern, setPattern] = useState("");
const [status, setStatus] = useState("started");

    // if starting today, set status as "started on date"
    // if not starting today set status as "not started"
    // form autofills new project card data.
    // sumbission takes you to the new project card page.
    function handleAddProject(e) {
        e.preventDefault();
        const newProject = {
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
        .then((newProjectData) => onAddProject(newProjectData))

    }

    return (
        <div>
           <h2>Create A New Project</h2>
           <p>Use this form to submit a new project.</p>
           <form onSubmit={handleAddProject}>
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
                        <option value="started">Yes</option>
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
    // if knitting, tools are needles
    // if crochet, tools are hooks
    // sumbission takes you to the new project card page (as a form to continue editing)