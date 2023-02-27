import { CustomDropdown } from "@components/dropdown";
import React from "react";
import { Cards } from "@components/cards";
import {
    Container,
    Label,
    LabelWrapper,
    ListingWrapper,
    SortContainer,
} from "./styled";
import { Filters } from "@components/filters";

export const Main: React.FC = () => {
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
                <Filters />
                <Cards />
            </ListingWrapper>
        </Container>
    );
};
