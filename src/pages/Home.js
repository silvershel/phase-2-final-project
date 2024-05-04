import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import Search from "../components/Search";
import "../App.css"

function Home({ projects, onSearch, onAddProject }) {

    return(
        <div className="App">
            <Header />
            <Search onSearch={onSearch} />
            <ProjectList projects={projects} />
        </div>
    )
}

export default Home;