import styled from "styled-components";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Container = styled.header`
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 1200px;
    margin: 0px auto;

    @media (max-width: 576px) {
        justify-content: space-between;
        margin: 0px 20px;
    }
`;

export const OffcanvasWrapper = styled(Offcanvas)`
    background: rgba(2, 0, 36, 0.95);
`;

export const OffcanvasHeader = styled(Offcanvas.Header)`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const OffcanvasHeaderUser = styled.div`
    background: white;
    border-radius: 16px;
    height: 24px;
    margin-top: -4px;
`;

export const OffcanvasHeaderClose = styled.div`
    color: white;
    font-size: 26px;
    width: 36px;
    height: 36px;
    border: 1px solid white;
    text-align: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 5px;
`;

export const OffcanvasBody = styled(Offcanvas.Body)`
    display: flex;
    flex-direction: column;
`;
