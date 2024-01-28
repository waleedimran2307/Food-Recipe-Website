import { useSelector } from "react-redux";
import FavouriteList from "./FavouriteList";
import MessageFavourite from "./MessageFavourite";

const Favourites = () => {
  const favouriteItems = useSelector((store) => store.favourites);
  return (
    <>
      {favouriteItems.length === 0 ? <MessageFavourite /> : <FavouriteList />}
    </>
  );
};

export default Favourites;
