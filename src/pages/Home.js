import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import "../App.css"
import Search from "../components/Search";

function Home() {
    return(
        <div className="App">
            <Header />
            <Search />
            <ProjectList />
        </div>
    )
}

export default Home;