import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Container = styled.header`
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 576px) {
        justify-content: space-between;
        margin: 0px 20px;
    }
`;

export const OffcanvasWrapper = styled(Offcanvas)`
    background: rgba(2, 0, 36, 0.8);
`;
