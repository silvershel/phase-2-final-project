import Header from "../components/Header";
import "../App.css"
import NewProjectForm from "../components/NewProjectForm";

function NewProject({ onAddProject }) {


    return(
        <div className="App">
            <Header />
            <NewProjectForm onAddProject={onAddProject} />
        </div>
    )
}

export default NewProject;