import {
    CHANGE_SORT_BY,
    CHANGE_PACK_SLUGS,
    CHANGE_RARITIES,
    LIST_FETCHED,
    CHANGE_PAGE_NUMBER,
} from "../actions/actionTypes";
import { getAllValuesFromUrl, getValueFromUrl } from "../utils/functions";
import {
    PACK_SLUGS_FILTER,
    PAGE_NUMBER,
    PAGE_NUMBER_FILTER,
    PAGE_SIZE,
    RARITIES_FILTER,
    SORT_BY,
    SORT_BY_FILTER,
    SORT_DIRECTION,
    SORT_DIRECTION_FILTER,
} from "../defaults";
import data from "@public/meta.json";

const sortByFilter = getValueFromUrl(SORT_BY_FILTER);
const sortDirectionFilter = getValueFromUrl(SORT_DIRECTION_FILTER);
const raritiesFilter = getAllValuesFromUrl(RARITIES_FILTER);
const packSlusFilter = getAllValuesFromUrl(PACK_SLUGS_FILTER);
const pageNumberFilter = getValueFromUrl(PAGE_NUMBER_FILTER);

const initialState = {
    fetchingList: false,
    total: data.total,
    list: data.list,
    pageSize: PAGE_SIZE,
    pageNumber: pageNumberFilter || PAGE_NUMBER,
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
                pageNumber: PAGE_NUMBER,
            };
        case CHANGE_RARITIES:
            return {
                ...state,
                list: [],
                rarities: action.payload.rarities,
                fetchingList: true,
                pageNumber: PAGE_NUMBER,
            };
        case CHANGE_PACK_SLUGS:
            return {
                ...state,
                list: [],
                packSlugs: action.payload.packSlugs,
                fetchingList: true,
                pageNumber: PAGE_NUMBER,
            };
        case CHANGE_PAGE_NUMBER:
            return {
                ...state,
                list: [],
                pageNumber: action.payload.pageNumber,
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
