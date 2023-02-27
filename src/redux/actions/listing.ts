import { SORT_BY, SORT_DIRECTION } from "../defaults";
import { CHANGE_SORT_BY } from "./actionTypes";

export const changeSortBy = (sortByOption: string | null) => {
    return {
        type: CHANGE_SORT_BY,
        payload: {
            sortBy: sortByOption || SORT_BY,
            sortDirection: SORT_DIRECTION,
        },
    };
};

export const fetchList = () => {
    // The `extraArgument` is the third arg for thunk functions
    return (dispatch, getState, api) => {
        // you can use api here
    };
};
