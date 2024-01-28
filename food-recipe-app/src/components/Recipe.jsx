import { useEffect, useRef, useState } from "react";
import fetchData from "../service";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const searchValue = useRef();
  const [query, setQuery] = useState(["chicken", "noodles", "pizza"]);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);



  // fetching data

  useEffect(() => {
    setIsLoading(false);
    try {
      fetchData(query).then((res) => {
        setData(res);
      });
    } catch (error) {
      setIsError(true, "Network Error!");
    } finally {
      setTimeout(() => {
        setIsLoading(true);
      }, 2000);
    }
  }, [query]);

  // on click Search
  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.type === "click") {
      let newSearch = searchValue.current.value;
      setSearch(newSearch);
      searchValue.current.value = "";

      setIsLoading(false);
      try {
        fetchData(newSearch).then((res) => {
          if (res.error || !res.hits || res.hits.length === 0) {
            setIsError(true);
          } else if (!res.error || res.hits || res.hits.length === 0) {
            setData(res);
            setIsError(false);
          }
        });
      } catch (error) {
        setIsError(true);
      } finally {
        setTimeout(() => {
          setIsLoading(true);
        }, 4000);
      }
    }
  };

  return (
    <>
      <div className="container-fluid my-5 p-5 text-center bg-secondary container ">
        <div className="row">
          <SearchBar handleOnClick={handleOnClick} searchValue={searchValue} />
        </div>
        <div className="row">
          {!isLoading ? (
            <LoadingSpinner />
          ) : !isError ? (
            data && data.hits ? (
              data.hits.map((item, index) => (
                <RecipeCard key={index} item={item} />
              ))
            ) : (
              <p>Network Error!</p>
            )
          ) : (
            <ErrorMessage />
          )}
        </div>
      </div>
    </>
  );
};
export default Recipe;
