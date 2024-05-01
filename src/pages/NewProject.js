import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "../App.css"
import NewProjectForm from "../components/NewProjectForm";

function NewProject() {
    return(
        <div className="App">
            <Header />
            <header>
                <NavBar />
            </header>
            <NewProjectForm />
        </div>
    )
}

export default NewProject;