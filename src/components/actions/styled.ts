import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ActionsContainer = styled.nav`
    background: transparent;
    display: inline-block;

    @media (max-width: 576px) {
        flex-direction: column;
        margin: 0px 16px;
        display: flex;
        align-items: flex-start;

        > svg {
            visibility: hidden;
        }
    }
`;

export const ActionLink = styled(Button)`
    color: white;
    font-size: 1em;
    font-weight: 600;

    &:hover {
        font-weight: 600;
        color: white;
    }

    @media (max-width: 576px) {
        width: 100%;
        text-align: left;
        font-size: 1.4em;
        font-weight: 600;
        border-bottom: 1px solid rgb(10, 132, 255);
        padding: 16px 0px;
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

    @media (max-width: 576px) {
        font-size: 1.4em;
        font-weight: 500;
        margin: 16px 0px;
    }
`;
