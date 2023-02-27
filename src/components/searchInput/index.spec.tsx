import mount from "@test/mount";

import { SearchInput } from "./index";

describe("SearchInput component testing with enzyme", () => {
    const component = mount(<SearchInput />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
