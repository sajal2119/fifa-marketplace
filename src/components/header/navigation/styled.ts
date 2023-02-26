import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

export const NavContainer = styled.nav`
    background: transparent;
    flex: 1;
`;

export const NavLink = styled(Nav.Link)`
    color: white;
    font-size: 1em;
    &:hover {
        font-weight: 600;
        color: white;
        text-decoration: underline;
    }

    @media (max-width: 576px) {
        font-size: 1.4em;
        font-weight: 800;
        border-bottom: 1px solid rgb(10, 132, 255);
        padding: 16px 0px;
    }
`;

export const Wrapper = styled(Nav)`
    @media (max-width: 576px) {
        flex-direction: column;
        margin: 0px 16px;

        .nav-item:last-child {
            a {
                border-bottom: 0px;
            }
        }
    }
`;
