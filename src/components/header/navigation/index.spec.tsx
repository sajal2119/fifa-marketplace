import mount from "@test/mount";

import { Navigation } from "./index";

describe("Navigation component testing with testing-library", () => {
    const component = mount(<Navigation />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
