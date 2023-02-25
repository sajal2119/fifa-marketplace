import React from "react";
import { NavContainer, NavLink } from "./styled";
import Nav from "react-bootstrap/Nav";

export const Navigation: React.FC = () => {
    return (
        <NavContainer>
            <Nav activeKey="/MARKETPLACE">
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
            </Nav>
        </NavContainer>
    );
};
