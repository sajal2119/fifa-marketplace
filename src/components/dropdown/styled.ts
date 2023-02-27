import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

export const DropdownWrapper = styled(Dropdown)`
    @media (max-width: 576px) {
        width: 100%;
        padding: 0px 1.5rem;

        > button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const DropdownToggle = styled(Dropdown.Toggle)`
    background: transparent;
    border-radius: 2px;

    &:hover {
        background: transparent;
    }
`;

export const DropdownMenu = styled(Dropdown.Menu)`
    background: rgb(2, 15, 42);
    color: white;
    border-radius: 2px;
    padding: 0px;
    border: 1px solid rgb(26, 45, 104);

    @media (max-width: 576px) {
        width: 85vw;
    }
`;

export const DropdownItem = styled(Dropdown.Item)`
    background: transparent;
    color: white;
    border-top: 1px solid rgb(26, 45, 104);
    padding: 12px 0px 12px 16px;

    &.active {
        background: transparent;
        color: rgb(0, 184, 255);
    }
`;
