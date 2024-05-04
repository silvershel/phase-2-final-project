function Search({ onSearch }) {

    return (
        <div>
            <p>Search Projects:</p>
            <input onChange={(e) => onSearch(e.target.value)} />
        </div>
    );
}

export default Search;