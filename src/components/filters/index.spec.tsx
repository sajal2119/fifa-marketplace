import mount from "@test/mount";

import { Filters } from "./index";

describe("Filters component testing with enzyme", () => {
    const component = mount(<Filters />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
