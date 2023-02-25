import React, { useState } from "react";

import { Logo } from "@components";
import { Navigation } from "./navigation";
import { Actions } from "@components/actions";
import { Container, OffcanvasWrapper } from "./styled";
import { HamburgerIcon, UserIcon } from "@components/icons";
import Offcanvas from "react-bootstrap/Offcanvas";

export const Header: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <HamburgerIcon
                className="d-sm-none"
                width="24"
                height="24"
                onClick={handleShow}
            />
            <Logo />
            <Navigation className={"d-none d-sm-block"} />
            <Actions className={"d-none d-sm-block"} />
            <UserIcon className="d-sm-none" width="24" height="24" />
            <Offcanvas show={show} onHide={handleClose} placement="start">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </Container>
    );
};
