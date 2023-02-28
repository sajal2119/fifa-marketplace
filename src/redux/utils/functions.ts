import { PAGE_NUMBER_FILTER } from "@redux/defaults";

/**
 * Returns value from URL query string for provided input key
 *
 * @param {string} input Key name to be fetched from URL query string
 *
 * @return {string | null} String value for input key, null in case not found
 */
export const getValueFromUrl = (input: string) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }
    const params = new URLSearchParams(window?.location?.search);

    const targetProp = params.get(input);

    return targetProp === undefined ? null : targetProp;
};

/**
 * Returns all possible values from URL query string for provided input key
 *
 * @param {string} input Key name to be fetched from URL query string
 *
 * @return {Array.<string> | []} Array of strings containing all values for input key, [] in case not found
 */
export const getAllValuesFromUrl = (input: string) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }
    const params = new URLSearchParams(window?.location?.search);

    const targetProp = params.getAll(input);

    return targetProp === undefined ? [] : targetProp;
};

/**
 * Returns update URL query string for provided name and value
 *
 * @param {string} name Key name to be updated in URL query string
 * @param {string} value Value to be used for updation
 * @param {boolean} isArray Boolean check to iterate and update all values for a key
 *
 * @return {string | null} Updated string value post all appends for URL query string
 */
export const updateValueInQuery = (
    name: string,
    value: any,
    isArray = false,
) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }

    const params = new URLSearchParams(window?.location?.search);
    params.delete(PAGE_NUMBER_FILTER);

    const targetProp = params.get(name);

    if (targetProp !== undefined) {
        params.delete(name);
    }

    if (isArray) {
        for (let index = 0; index < value.length; index++) {
            const element = value[index];

            params.append(name, element);
        }
    } else {
        params.append(name, value);
    }

    return params.toString();
};

/**
 * Returns update URL query string for provided record of name and value
 *
 * @param obj Record to be updated in URL query string
 * @param {string} obj.key Name of query string to be updated
 * @param {string} obj.value Value used for updation
 *
 * @return {string | null} Updated string value post all appends for URL query string
 */
export const updateObjectInQuery = (obj: Record<string, string | number>) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }

    const params = new URLSearchParams(window?.location?.search);
    const keys = Object.keys(obj);
    params.delete(PAGE_NUMBER_FILTER);

    for (let index = 0; index < keys.length; index++) {
        const name = keys[index];
        const value = obj[name] || "";
        const targetProp = params.get(name);

        if (targetProp !== undefined) {
            params.delete(name);
        }

        params.append(name, value.toString());
    }

    return params.toString();
};
