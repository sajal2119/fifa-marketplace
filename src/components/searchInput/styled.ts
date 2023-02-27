import styled from "styled-components";
import Form from "react-bootstrap/Form";

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

export const Label = styled(Form.Label)``;
