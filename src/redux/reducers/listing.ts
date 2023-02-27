import {
    CHANGE_SORT_BY,
    CHANGE_PACK_SLUGS,
    CHANGE_RARITIES,
    LIST_FETCHED,
    CHANGE_PAGE_NUMBER,
    CHANGE_PRICE_RANGE,
    CHANGE_SEARCH_TERM,
} from "../actions/actionTypes";
import { getAllValuesFromUrl, getValueFromUrl } from "../utils/functions";
import {
    MAX_PRICE,
    MAX_PRICE_FILTER,
    MIN_PRICE,
    MIN_PRICE_FILTER,
    PACK_SLUGS_FILTER,
    PAGE_NUMBER,
    PAGE_NUMBER_FILTER,
    PAGE_SIZE,
    RARITIES_FILTER,
    SEARCH_TERM,
    SEARCH_TERM_FILTER,
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
const minPriceFilter = getValueFromUrl(MIN_PRICE_FILTER);
const maxPriceFilter = getValueFromUrl(MAX_PRICE_FILTER);
const searchTermFilter = getValueFromUrl(SEARCH_TERM_FILTER);

const initialState = {
    fetchingList: false,
    total: data.total,
    list: data.list,
    searchTerm: searchTermFilter || SEARCH_TERM,
    minPrice: Number(minPriceFilter || MIN_PRICE),
    maxPrice: Number(maxPriceFilter || MAX_PRICE),
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
        case CHANGE_PRICE_RANGE:
            return {
                ...state,
                list: [],
                minPrice: action.payload.minPrice,
                maxPrice: action.payload.maxPrice,
                pageNumber: PAGE_NUMBER,
                fetchingList: true,
            };
        case CHANGE_SEARCH_TERM:
            return {
                ...state,
                list: [],
                searchTerm: action.payload.searchTerm,
                pageNumber: PAGE_NUMBER,
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
