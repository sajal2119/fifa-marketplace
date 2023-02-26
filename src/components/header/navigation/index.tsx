import React from "react";
import { NavContainer, NavLink, Wrapper } from "./styled";
import Nav from "react-bootstrap/Nav";

interface OwnProps {
    className?: string;
}

export const Navigation: React.FC<OwnProps> = ({ className }) => {
    return (
        <NavContainer className={className || ""}>
            <Wrapper activeKey="/MARKETPLACE">
                <Nav.Item>
                    <NavLink href="/">DROPS</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="MARKETPLACE" href="/">
                        MARKETPLACE
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="COLLECTION" href="/">
                        MY COLLECTION
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="CHALLENGES" href="/">
                        CHALLENGES
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink eventKey="CHALLENGES" href="/">
                        FIFA+
                    </NavLink>
                </Nav.Item>
            </Wrapper>
        </NavContainer>
    );
};
