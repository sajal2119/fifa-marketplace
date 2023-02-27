import styled from "styled-components";
import Badge from "react-bootstrap/Badge";

interface BadgeUnitProps {
    color: string;
    filled: boolean | number;
}

export const Wrapper = styled.div`
    background: transparent;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &.rectangular-tabs {
        max-width: 250px;
    }

    &.rectangular-tabs > span {
        padding: 0.35rem 0.7rem;
        font-size: 0.85rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`;

export const BadgeUnit = styled(Badge)<{
    color: string;
    filled: boolean | number;
}>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    display: inline-block;
    min-width: 140px;
    white-space: nowrap;
    border-radius: 9999px;
    border: 1px solid rgb(79, 88, 122);
    padding: 0.35rem 1rem;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0.75rem;
    background-color: ${({ color, filled }: BadgeUnitProps) =>
        filled ? `${color} !important` : "transparent !important"};
    color: ${({ color, filled }: BadgeUnitProps) => (filled ? "white" : color)};
`;
