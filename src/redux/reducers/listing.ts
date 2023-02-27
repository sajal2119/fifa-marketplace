import { CHANGE_SORT_BY, LIST_FETCHED } from "../actions/actionTypes";

import { getValueFromUrl } from "../utils/functions";
import { SORT_BY, SORT_DIRECTION } from "../defaults";

const sortByFilter = getValueFromUrl("sortBy");
const sortDirectionFilter = getValueFromUrl("sortDirection");

const initialState = {
    fetchingList: false,
    total: 0,
    list: [],
    sortBy: sortByFilter === null ? SORT_BY : sortByFilter,
    sortDirection:
        sortDirectionFilter === null ? SORT_DIRECTION : sortDirectionFilter,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SORT_BY:
            return {
                ...state,
                list: [],
                sortBy: action.payload.sortBy,
                sortDirection: action.payload.sortDirection,
                fetchingList: true,
            };
        case LIST_FETCHED:
            return {
                ...state,
                ...action.payload,
                fetchingList: false,
            };
        default:
            return state;
    }
};
