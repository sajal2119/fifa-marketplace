import { CHANGE_SORT_BY, LIST_FETCHED } from "../actions/actionTypes";

import { LOCATION_CHANGE } from "react-router-redux";

import { getValueFromUrl } from "../utils/functions";
import { SORT_BY, SORT_DIRECTION } from "../defaults";

const sortByFilter = getValueFromUrl("sortBy");
const sortDirectionFilter = getValueFromUrl("sortDirection");

const initialState = {
    list: [],
    sortBy: sortByFilter === null ? SORT_BY : sortByFilter,
    sortDirection:
        sortDirectionFilter === null ? SORT_DIRECTION : sortDirectionFilter,
};

export default (state = initialState, action) => {
    console.log(2, {action})
    switch (action.type) {
        case CHANGE_SORT_BY:
            return {
                ...state,
                list: [],
                sortBy: action.payload.sortBy,
                sortDirection: action.payload.sortDirection,
            };
        case LIST_FETCHED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
