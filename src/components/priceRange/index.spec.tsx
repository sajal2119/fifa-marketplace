import mount from "@test/mount";

import { PriceRange } from "./index";

describe("PriceRange component testing with enzyme", () => {
    const component = mount(<PriceRange />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
