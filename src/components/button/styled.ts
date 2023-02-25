import styled from "styled-components";

interface ButtonProps {
    isLink: boolean;
}

export const Container = styled.div<{ isLink: boolean }>`
    color: ${({ isLink }: ButtonProps) => (isLink ? "#fff" : "#fff")};
    background: transparent;
`;
