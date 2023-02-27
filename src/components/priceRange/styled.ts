import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export const Wrapper = styled.div`
    background: transparent;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const InputUnit = styled(Form.Control)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: rgba(2, 15, 42, 0.5);
    border: 1px solid rgb(26, 45, 104);
    color: white;
    border-radius: 2px;
`;

export const Label = styled(Form.Label)`
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    width: 100%;
    color: white;
    margin-top: 1.2rem;

    @media (max-width: 576px) {
        margin-top: 0.4rem;
    }
`;

export const ActionButton = styled(Button)`
    color: white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 24px;
    margin-top: 1rem;
    width: 100%;
    &:hover {
        font-weight: 600;
        color: white;
    }

    @media (max-width: 576px) {
        font-size: 1.1em;
        font-weight: 500;
        margin: 16px 0px;
    }
`;

export const CustomInputGroup = styled(InputGroup)``;

export const CustomInputGroupText = styled(InputGroup.Text)`
    background: transparent;
    color: white;
    border: 1px solid rgb(26, 45, 104);
`;
