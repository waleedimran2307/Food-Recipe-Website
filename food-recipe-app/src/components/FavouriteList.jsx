import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favouritesActions, viewDetailsActions } from "../store";

const FavouriteList = () => {
  const favouriteItems = useSelector((store) => store.favourites);
  const dispatch = useDispatch();

  // for view details section
  const handleViewDetails = (item) => {
    const recipeImage = item.item.recipe.image;
    const recipelabel = item.item.recipe.label;
    const recipeCuisineType = item.item.recipe.cuisineType.toString();
    const recipeDishType = item.item.recipe.dishType.toString();
    const recipeMealType = item.item.recipe.mealType.toString();
    const recipeCalories = item.item.recipe.calories;
    const recipehealthLabels = item.item.recipe.healthLabels.slice(0, 6);
    const items = {
      image: recipeImage,
      label: recipelabel,
      cuisine: recipeCuisineType,
      dish: recipeDishType,
      meal: recipeMealType,
      calories: recipeCalories,
      healthlabel: recipehealthLabels,
    };
    dispatch(viewDetailsActions.viewdetail(items));
  };

  // remove handle
  const handleRemoveFavourite = (item) => {
    dispatch(favouritesActions.removeFavourite(item));
  };

  return (
    <div className="container-fluid bg-secondary text-center mb-4 container">
      <div className="row fs-1 mb-3 text-center">
        <div className="col-12">Favourite Section</div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        {favouriteItems.map((item, index) => (
          <div key={index} className="col-auto my-2 p-2 mx-5">
            <img
              className="bd-placeholder-img rounded-circle"
              width={"140px"}
              height={"140px"}
              src={item.item.recipe.image}
            />
            <h2 className="fw-normal fs-4 my-1">{item.item.recipe.label}</h2>

            <Link to="/viewdetails">
              <p
                className="btn btn-secondary btn-outline-dark"
                onClick={() => handleViewDetails(item)}
              >
                View details »
              </p>
            </Link>
            <p
              className="btn btn-secondary btn-outline-dark mx-1 "
              onClick={() => handleRemoveFavourite(item)}
            >
              Remove to favourites
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteList;
