import { Outlet, useOutletContext } from "react-router-dom";
import ProjectList from "./ProjectList";
import Search from "./Search";

function Home() {
    const projects = useOutletContext();
    
    return(
        <div className="App">
            <Search />
            <ProjectList />
            <Outlet projects={projects} />
        </div>
    )
}

export default Home;