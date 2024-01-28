import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const favouriteItems = useSelector((store) => store.favourites);
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4 border-bottom bg-secondary">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link
          to="/"
          className="d-inline-flex link-body-emphasis text-decoration-none text-black mx-4 fs-2"
        >
          <img src="images/logo.png" width={"100px"} height={"100px"} />
          <span className="my-4"> FlavourVerse</span>
        </Link>
      </div>

      <ul className="nav col-12 col-md-2 col-lg-auto  mb-2 justify-content-center mb-md-0 fs-5">
        <li>
          <Link to="/" className="nav-link px-2 link-dark">
            Home
          </Link>
        </li>
        <li>
          <Link to="/viewdetails" className="nav-link px-2 link-dark">
            Explore
          </Link>
        </li>
        <li>
          <Link to="/favourites" className="nav-link px-2 link-dark">
            Favourites
            <sup className="bg-dark px-2 py-1 text-white rounded-circle">
              {favouriteItems.length}
            </sup>
          </Link>
        </li>
      </ul>
      <div className="col-md-3 text-end mx-3">
        <Link to="/login">
          <button type="button" className="btn btn-outline-dark me-2">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
