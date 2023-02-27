import styled from "styled-components";

export const Wrapper = styled.section`
    background: transparent;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 20px;
    margin-top: 1.75rem;
    margin-bottom: 3rem;
    min-width: 250px;

    @media (max-width: 576px) {
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
`;

export const FilterUnit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    @media (max-width: 576px) {
        align-items: center;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;

export const FilterLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom: 1px solid rgb(10, 132, 255);
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    font-weight: 700;
    line-height: 1.25;
    font-size: 1.4rem;
    color: white;
    width: 100%;
`;
