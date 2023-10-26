const SearchBar = ({
  filterText,
  inThisLocation,
  setFilterText,
  setInThisLocation,
}) => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
    <p>
      <label>
        <input
          type="checkbox"
          checked={inThisLocation}
          onChange={(e) => setInThisLocation(e.target.checked)}
        />{" "}
        Only show tweets in your current location
      </label>
    </p>
  </form>
);