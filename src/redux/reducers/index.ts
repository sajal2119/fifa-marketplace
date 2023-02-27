import { combineReducers } from "redux";
import listing from "./listing";
import { routerReducer } from "react-router-redux";

export default combineReducers({
    routing: routerReducer,
    listing,
});
