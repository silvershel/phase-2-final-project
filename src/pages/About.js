import "../App.css"
import Header from "../components/Header";
import NavBar from "../components/NavBar"


function About() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <Header />
            <h2>Craft Track</h2>
            <p>Craft Track is an app to help track your crafting projects.</p>
        </div>
    )
}

export default About;