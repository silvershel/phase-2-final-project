import { useOutletContext } from "react-router-dom";
import ProjectList from "./ProjectList";
import Search from "./Search";

function ProjectPage() {
    const { filteredProjects, handleSearch, handleDelete } = useOutletContext();
    
    return(
        <div>
            <Search handleSearch={handleSearch} />
            <ProjectList projects={filteredProjects} handleDelete={handleDelete} />
        </div>
    )
}

export default ProjectPage;