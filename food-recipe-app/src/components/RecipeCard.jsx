import { useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { favouritesActions, viewDetailsActions } from "../store";
import { Link } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const favouriteItems = useSelector((store) => store.favourites);
  const ItemFind = favouriteItems.find(
    (favItem) => favItem.label === item.recipe.label
  );

  const dispatch = useDispatch();
  const recipeImage = useRef();
  const recipeValue = useRef();
  const recipeCuisineType = item.recipe.cuisineType.toString();
  const recipeDishType = item.recipe.dishType.toString();
  const recipeMealType = item.recipe.mealType.toString();
  const recipeCalories = item.recipe.calories;
  const recipehealthLabels = item.recipe.healthLabels.slice(0, 6);


  // handle view details
  const handleViewDetails = () => {
    const items = {
      image: recipeImage.current.src,
      label: recipeValue.current.textContent,
      cuisine: recipeCuisineType,
      dish: recipeDishType,
      meal: recipeMealType,
      calories: recipeCalories,
      healthlabel: recipehealthLabels,
    };
    dispatch(viewDetailsActions.viewdetail(items));
  };

  // handle add favourites button
  const handleAddToFavourites = (item) => {
    if (!ItemFind) {
      dispatch(
        favouritesActions.addToFavourite({
          label: item.recipe.label,
          item: item,
        })
      );
    } else {
      handleRemoveFavourite(item);
    }
  };

  // handle remove favourites button
  const handleRemoveFavourite = (item) => {
    dispatch(
      favouritesActions.removeFavourite({
        label: item.recipe.label,
        item: item,
      })
    );
  };

  return (
    <div className="col-lg-4 my-4">
      <img
        className="bd-placeholder-img rounded-circle"
        width={"140px"}
        height={"140px"}
        src={item.recipe.image}
        ref={recipeImage}
      />
      <h2 className="fw-normal fs-4" ref={recipeValue}>
        {item.recipe.label}
      </h2>

      <Link to="/viewdetails">
        <p
          className="btn btn-secondary btn-outline-dark"
          onClick={handleViewDetails}
        >
          View details »
        </p>
      </Link>

      {!ItemFind ? (
        <p
          className="btn btn-secondary btn-outline-dark mx-1 "
          onClick={() => handleAddToFavourites(item)}
        >
          Added to favourites
        </p>
      ) : (
        <p
          className="btn  text-dark btn-danger mx-1 "
          onClick={() => handleRemoveFavourite(item)}
        >
          Remove from favourites
        </p>
      )}
    </div>
  );
};

export default RecipeCard;
