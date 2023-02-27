import mount from "@test/mount";

import { CustomDropdown } from "./index";

describe("Dropdown component testing with testing-library", () => {
    const component = mount(<CustomDropdown options={[]} />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
