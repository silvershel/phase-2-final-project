function Search({ handleSearch }) {

    return (
        <div>
            <p>Search Projects:</p>
            <input placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
        </div>
    );
}

export default Search;