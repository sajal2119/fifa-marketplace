import mount from "@test/mount";

import { Tabs } from "./index";

describe("Tabs component testing with enzyme", () => {
    const component = mount(<Tabs />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
