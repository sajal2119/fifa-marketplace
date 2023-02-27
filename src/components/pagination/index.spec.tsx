import mount from "@test/mount";

import { Pagination } from "./index";

describe("Pagination component testing with enzyme", () => {
    const component = mount(<Pagination />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
