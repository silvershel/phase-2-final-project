function NewProjectForm() {
    return (
        <div>
           <p>New Project</p>
           <form>
                <label>
                    Text Input:
                    <input type="text" value="One"/>
                    Text Area:
                    <textarea value="text area"/>
                    Dropdown:
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label> 
                                  
                <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default NewProjectForm;