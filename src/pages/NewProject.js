import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../App.css"
import NewProjectForm from "../components/NewProjectForm";

function NewProject() {
    return(
        <div className="App">
            <header>
                <NavBar />
            </header>
            <Header />
            <NewProjectForm />
        </div>
    )
}

export default NewProject;