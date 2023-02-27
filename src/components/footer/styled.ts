import styled from "styled-components";

export const Wrapper = styled.footer`
    color: white;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    background-color: #282c34;
    width: 100%;
    justify-content: space-between;
    padding: 0px 48px;

    @media (max-width: 576px) {
        flex-direction: column;
        padding: 0px 24px;
        align-items: center;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    margin-top: 16px;
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        margin-top: 32px;
    }
`;

export const SectionWrapper = styled.section`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media (max-width: 576px) {
        align-items: center;
        flex-direction: column;
        margin: 0px 16px;
    }
`;

export const Links = styled.div`
    background: transparent;
    font-size: 0.75em;
    cursor: pointer;
    margin-right: 1rem;

    &.text-only {
        cursor: default;
        &:hover {
            text-decoration: none;
        }
    }

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 576px) {
        font-weight: 600;
        padding: 8px 0px;
        margin-right: 0px;
        font-size: 0.95em;
    }
`;

export const PoweredBy = styled.section`
    flex: 1;
    font-size: 0.65rem;
    max-width: 240px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    > p {
        margin-bottom: 0rem;
        opacity: 0.5;
    }

    @media (max-width: 576px) {
        align-items: center;
        width: 100%;
        margin-top: 48px;
    }
`;

export const PoweredByImg = styled.img`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 28px;
`;
