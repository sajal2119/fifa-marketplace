import styled from "styled-components";

export const CoolGradient = styled.div<{ isLink: boolean }>`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
position: fixed;
width: 100%;
height: 100%;
z-index: -1;
}
`;
