import { createSelector } from "reselect";

export default createSelector(
    (state: any) => state.listing.list,
    (state: any) => state.listing.sortBy,
    (state: any) => state.listing.sortDirection,
    (products, min, max) => {
        return products
            .filter((product: any) => {
                return product.price >= min && product.price <= max;
            })
            .sort((a: any, b: any) => {
                return a.price - b.price;
            });
    },
);
