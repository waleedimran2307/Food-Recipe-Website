const SearchBar = ({ handleOnClick, searchValue, handleOnKeyDown }) => {
  return (
    <>
      <div className="row text-center fs-4">
        <h1> Food Recipe Section </h1>
      </div>

      <div className="row m-3">
        <div className="col-12 col-xl-12 d-flex justify-content-center ">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter any item here..."
              ref={searchValue}
              onKeyDown={handleOnKeyDown}
            />
            <button className="btn btn-outline-dark" onClick={handleOnClick}>
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
