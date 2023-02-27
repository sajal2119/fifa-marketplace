import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

export const Wrapper = styled.div`
    background: transparent;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem 0px;
`;

export const PaginationUnit = styled(Pagination.Item)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border: 0px;

    > a {
        background: transparent;
        border: 0px;
        color: white;
    }

    > span {
        background-color: rgb(26, 45, 104) !important;
        border-radius: 4px !important;
    }

    > a:hover {
        background: transparent;
        border: 0px;
        text-decoration: underline;
        color: white;
    }

    @media (max-width: 576px) {
        min-width: 50px;
        > span {
            min-width: 34px;
            text-align: center;
            margin: 0px 8px;
        }
    }
`;

export const PaginationWrap = styled(Pagination)`
    background: transparent;
    border-radius: 0px;
`;
