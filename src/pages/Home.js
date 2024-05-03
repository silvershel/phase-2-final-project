import Header from "../components/Header";
import NavBar from "../components/NavBar"
import ProjectList from "../components/ProjectList";
import "../App.css"
import Search from "../components/Search";

function Home() {
    return(
        <div className="App">
            <header>
                <NavBar />
            </header>
            <Header />
            <Search />
            <ProjectList />
        </div>
    )
}

export default Home;