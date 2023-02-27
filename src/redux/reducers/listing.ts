import {
    CHANGE_SORT_BY,
    CHANGE_PACK_SLUGS,
    CHANGE_RARITIES,
    LIST_FETCHED,
} from "../actions/actionTypes";
import { getAllValuesFromUrl, getValueFromUrl } from "../utils/functions";
import { SORT_BY, SORT_DIRECTION } from "../defaults";
import data from "@public/meta.json";

const sortByFilter = getValueFromUrl("sortBy");
const sortDirectionFilter = getValueFromUrl("sortDirection");
const raritiesFilter = getAllValuesFromUrl("rarities");
const packSlusFilter = getAllValuesFromUrl("packSlugs");

const initialState = {
    fetchingList: false,
    total: data.total,
    list: data.list,
    rarities: raritiesFilter || [],
    packSlugs: packSlusFilter || [],
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
        case CHANGE_RARITIES:
            return {
                ...state,
                list: [],
                rarities: action.payload.rarities,
                fetchingList: true,
            };
        case CHANGE_PACK_SLUGS:
            return {
                ...state,
                list: [],
                packSlugs: action.payload.packSlugs,
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
