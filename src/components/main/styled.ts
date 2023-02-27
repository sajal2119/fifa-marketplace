import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Container = styled.main``;

export const LabelWrapper = styled.div`
    background: transparent;
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 1.5rem auto;

    @media (max-width: 576px) {
        flex-direction: column;
        margin-bottom: 0.5rem;
        align-items: center;
        margin: 1.5rem auto 0.5rem;
    }
`;

export const Label = styled.div`
    color: white;
    font-size: 2.5em;
    font-weight: 600;
`;

export const ListingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 1200px;
    margin: 1.5rem auto;

    @media (max-width: 576px) {
        margin: 0rem auto 1.5rem;
    }
`;

export const SortContainer = styled.div`
    @media (max-width: 576px) {
        width: 100%;
    }
`;

export const FilterButtonWrapper = styled.div`
    position: fixed;
    width: 100vw;
    bottom: 12px;
    left: 0px;
    display: flex;
    align-items: center;
    z-index: 2;
    justify-content: space-around;
`;

export const FilterButton = styled(Button)`
    color: white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 32px;
    z-index: 2;

    @media (max-width: 576px) {
        font-size: 1.2em;
        font-weight: 500;
        margin: 16px 0px;
        padding: 12px 20px;
    }
`;

export const OffcanvasWrapper = styled(Offcanvas)`
    background: rgba(2, 0, 36, 0.95);
`;

export const OffcanvasHeader = styled(Offcanvas.Header)`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 576px) {
        justify-content: space-between;
        color: white;
    }
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
