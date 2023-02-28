import { LIST_FETCHED } from "./actionTypes";
import { listingApi, API_URL } from "@network";
import data from "@public/meta.json";

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
