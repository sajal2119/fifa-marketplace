import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ActionsContainer = styled.nav`
    background: transparent;
    display: inline-block;
`;

export const ActionLink = styled(Button)`
    color: white;
    font-size: 1em;
    font-weight: 600;

    &:hover {
        font-weight: 600;
        color: white;
    }
`;

export const ActionButton = styled(Button)`
    color: white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 32px;
    &:hover {
        font-weight: 600;
        color: white;
    }
`;
