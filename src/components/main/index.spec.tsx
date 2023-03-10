import mount from "@test/mount";

import { Main } from "./index";

describe("Main component testing with enzyme", () => {
    const component = mount(<Main />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
