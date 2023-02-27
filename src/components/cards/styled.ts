import styled from "styled-components";

interface RarityProps {
    color: string;
}

export const CardContainer = styled.a`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: rgba(3, 24, 72, 0.7);
    opacity: 0.85;
    transition: box-shadow 0.3s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: white;
        opacity: 1;
        text-decoration: none;
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }
`;

export const Image = styled.img`
    background: transparent;
    height: 240px;
    max-width: 100%;
    margin-bottom: 0.8rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

export const DetailsContainer = styled.div`
    background: transparent;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 0.75rem;
`;

export const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.25;
    margin-botton: 0.25rem;
`;

export const Description = styled.h4`
    font-size: 13px;
    margin-bottom: 32px;
`;

export const Rarity = styled.div<{ color: string }>`
    margin-top: 0.5rem;
    font-size: 1.15rem;
    color: ${({ color }: RarityProps) => color};
`;

export const Tags = styled.div`
    font-size: 0.95rem;
    opacity: 0.8;
`;

export const PriceContainer = styled.div`
    margin-top: 0.5rem;
    font-size: 1.1rem;
    border-top-width: 1px;
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PriceLabel = styled.div`
    font-weight: 400;
    opacity: 0.65;
`;

export const Price = styled.div`
    font-weight: 700;
`;
