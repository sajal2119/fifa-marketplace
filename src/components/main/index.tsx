import React, { useState } from "react";
import { CustomDropdown } from "@components/dropdown";
import { Cards } from "@components/cards";
import Offcanvas from "react-bootstrap/Offcanvas";
import {
    Container,
    FilterButton,
    FilterButtonWrapper,
    Label,
    LabelWrapper,
    ListingWrapper,
    SortContainer,
    OffcanvasHeader,
    OffcanvasHeaderClose,
    OffcanvasWrapper,
    OffcanvasBody,
} from "./styled";
import { Filters } from "@components/filters";
import { Pagination } from "@components/pagination";

export const Main: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <LabelWrapper>
                <Label>MARKETPLACE</Label>
                <SortContainer>
                    <CustomDropdown
                        options={[
                            {
                                id: "latestCreatedAt",
                                label: "Newest",
                                key: "latestCreatedAt",
                            },
                            {
                                id: "lastCreatedAt",
                                label: "Oldest",
                                key: "lastCreatedAt",
                            },
                            {
                                id: "rarityCode",
                                label: "Rarity",
                                key: "rarityCode",
                            },
                        ]}
                    />
                </SortContainer>
            </LabelWrapper>
            <ListingWrapper>
                <FilterButtonWrapper className="d-sm-none">
                    <FilterButton
                        variant="success"
                        size="lg"
                        onClick={handleShow}
                    >
                        Filters
                    </FilterButton>
                </FilterButtonWrapper>
                <OffcanvasWrapper
                    show={show}
                    onHide={handleClose}
                    placement="start"
                >
                    <OffcanvasHeader closeButton={false}>
                        <OffcanvasHeaderClose onClick={handleClose}>
                            x
                        </OffcanvasHeaderClose>
                        <Offcanvas.Title>Filters</Offcanvas.Title>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Filters />
                    </OffcanvasBody>
                </OffcanvasWrapper>
                <Filters className="d-none d-sm-block" />
                <Cards />
            </ListingWrapper>
            <Pagination />
        </Container>
    );
};
