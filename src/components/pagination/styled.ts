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
        border-radius: 16px !important;
    }

    > a:hover {
        background: transparent;
        border: 0px;
        text-decoration: underline;
        color: white;
    }
`;

export const PaginationWrap = styled(Pagination)`
    background: transparent;
    border-radius: 0px;
`;
