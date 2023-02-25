import mount from "@test/mount";

import { Actions } from "./index";

describe("Header Actions component testing with testing-library", () => {
    const component = mount(<Actions />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
