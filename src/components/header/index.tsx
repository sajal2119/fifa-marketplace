import React, { useState } from "react";

import { Logo } from "@components";
import { Navigation } from "./navigation";
import { Actions } from "@components/actions";
import {
    Container,
    OffcanvasHeader,
    OffcanvasHeaderClose,
    OffcanvasHeaderUser,
    OffcanvasWrapper,
    OffcanvasBody,
} from "./styled";
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
            <OffcanvasWrapper
                show={show}
                onHide={handleClose}
                placement="start"
            >
                <OffcanvasHeader closeButton={false}>
                    <OffcanvasHeaderClose onClick={handleClose}>
                        x
                    </OffcanvasHeaderClose>
                    <Offcanvas.Title>
                        <Logo />
                    </Offcanvas.Title>
                    <OffcanvasHeaderUser>
                        <UserIcon width="24" height="24" />
                    </OffcanvasHeaderUser>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Navigation />
                    <Actions />
                </OffcanvasBody>
            </OffcanvasWrapper>
        </Container>
    );
};
