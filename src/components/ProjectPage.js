import { useOutletContext } from "react-router-dom";
import ProjectList from "./ProjectList";
import Search from "./Search";

function ProjectPage() {
    const { filteredProjects, onSearch, onDelete } = useOutletContext();
    
    return(
        <div className="App">
            <Search onSearch={onSearch} />
            <ProjectList projects={filteredProjects} onDelete={onDelete} />
        </div>
    )
}

export default ProjectPage;