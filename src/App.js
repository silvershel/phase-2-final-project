import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import ProjectList from "./components/ProjectList";
import './App.css';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        console.log('useEffect Fired')

        fetch(`http://localhost:8000/projects/?_limit=6`)
        .then((r) => r.json())
        .then((projects) => setProjects(projects))
    }, []);

    return (
        <div className="App">
            <Header />
            <Search projects={projects}/>
            <ProjectList projects={projects} />
      </div>
    );
}

export default App;