import { LIST_FETCHED } from "./actionTypes";
import { listingApi, API_URL } from "@network";
import data from "@public/meta.json";

/**
 * Axios API wrapper to GET listings for filter/sorting/pagination updates
 * Maintains API_URL and API call initiation
 * Catches error for error handling in API calls
 *
 * @param {function} dispatch Thunk dispatcher function to be used on API success/failure
 * @param {string} params Query params to be used for API calling
 *
 */
const helperFunction = (dispatch: any, params: string) => {
    return listingApi({
        method: "get",
        url: `${API_URL}?${params}`,
    })
        .then((res) => {
            dispatch({
                type: LIST_FETCHED,
                payload: {
                    ...res,
                },
            });
        })
        .catch(() => {
            dispatch({
                type: LIST_FETCHED,
                payload: {
                    ...data,
                },
            });
        });
};

/**
 * Thunk powered function to make async API calls on action dispatches
 * Dispatches action for store after async API calls
 * Catches error for error handling in API calls
 *
 * @param {string} actionType Name of action to be dispatched before starting async operation
 * @param {string} payload Payload to be dispatched in action before starting async operation
 * @param {string} params Query params to be used for API calling
 *
 */
export const changeFilters = (
    actionType: string,
    payload: Record<string, string | number | any>,
    params: string,
) => {
    return (dispatch: any) => {
        dispatch({
            type: actionType,
            payload,
        });

        helperFunction(dispatch, params);
    };
};
