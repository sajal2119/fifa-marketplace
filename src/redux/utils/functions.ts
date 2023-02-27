export const getValueFromUrl = (input: string) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }
    const params = new URLSearchParams(window?.location?.search);

    const targetProp = params.get(input);

    return targetProp === undefined ? null : targetProp;
};

export const updateValueInSearch = (name: string, value: any) => {
    if (typeof window === "undefined" || !window) {
        return null;
    }

    const params = new URLSearchParams(window?.location?.search);
    const targetProp = params.get(name);

    if (targetProp !== undefined) {
        params.delete(name);
    }
    params.append(name, value);

    return params.toString();
};
