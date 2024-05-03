function Search() {
    
    return (
        <div>
            <p>Search Projects:</p>
            <form onChange={() => console.log("New Search Change")}>
                <input></input>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;