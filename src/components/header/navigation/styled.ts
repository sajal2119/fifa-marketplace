import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

export const NavContainer = styled.nav`
    background: transparent;
`;

export const NavLink = styled(Nav.Link)`
    color: white;
    font-size: 1em;
    &:hover {
        font-weight: 600;
        color: white;
        text-decoration: underline;
    }
`;
