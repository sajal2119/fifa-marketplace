import { PAGE_NUMBER_FILTER } from "@redux/defaults";

export const getValueFromUrl = (input: string) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }
    const params = new URLSearchParams(window?.location?.search);

    const targetProp = params.get(input);

    return targetProp === undefined ? null : targetProp;
};

export const getAllValuesFromUrl = (input: string) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }
    const params = new URLSearchParams(window?.location?.search);

    const targetProp = params.getAll(input);

    return targetProp === undefined ? [] : targetProp;
};

export const updateValueInSearch = (
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
