import { useOutletContext } from "react-router-dom";
import ProjectList from "./ProjectList";
import ProjectFilter from "./ProjectFilter";
import ProjectSearch from "./ProjectSearch";

function ProjectPage() {
    const { filteredProjects, handleDelete, handleSearch, handleFilter, handleEdit } = useOutletContext();
    
    return(
        <div>
            <ProjectSearch handleSearch={handleSearch}/>
            <ProjectFilter handleFilter={handleFilter} />
            <ProjectList projects={filteredProjects} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    )
}

export default ProjectPage;