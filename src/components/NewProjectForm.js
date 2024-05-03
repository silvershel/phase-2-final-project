function NewProjectForm() {

    // if starting today, set status as "started on date"
    // if not starting today set status as "not started"
    // form autofills new project card data.
    // sumbission takes you to the new project card page.
    return (
        <div>
           <p>New Project</p>
           <form>
                <label>
                    Craft:
                    <select>
                        <option value="knitting">Knitting</option>
                        <option value="crochet">Crochet</option>
                    </select>
                    Project Title:
                    <input type="text" defaultValue="Project Title"/>
                    Pattern:
                    <input type="text" defaultValue="Pattern url here"/>
                    Starting now?:
                    <select>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>                    
                </label> 
                                  
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default NewProjectForm;

// STRETCH GOALS
    // if knitting, tools are needles
    // if crochet, tools are hooks
    // sumbission takes you to the new project card page (as a form to continue editing)