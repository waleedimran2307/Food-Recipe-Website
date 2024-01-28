import { configureStore, createSlice } from "@reduxjs/toolkit";

// viewdetails
const viewDetailsReducer = createSlice({
  name: "viewdetails",
  initialState: [],
  reducers: {
    viewdetail: (state, action) => {
      return action.payload;
    },
  },
});

// favourites
const favouritesReducer = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addToFavourite: (state, action) => {
      let findItem = state.find((item) => item.label === action.payload.label);
      if (!findItem) {
        return [action.payload, ...state];
      }
      return state;
    },

    removeFavourite: (state, action) => {
      let deleteItem = state.filter(
        (item) => item.label !== action.payload.label
      );
      return deleteItem;
    },
  },
});

// store
const ItemsSlice = configureStore({
  reducer: {
    viewdetails: viewDetailsReducer.reducer,
    favourites: favouritesReducer.reducer,
  },
});

//actions
export const viewDetailsActions = viewDetailsReducer.actions;
export const favouritesActions = favouritesReducer.actions;
export default ItemsSlice;
