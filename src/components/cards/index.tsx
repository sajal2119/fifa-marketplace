import React from "react";
import { useSelector } from "react-redux";
import {
    CardContainer,
    Image,
    DetailsContainer,
    Title,
    Description,
    Rarity,
    PriceContainer,
    PriceLabel,
    Price,
    Tags,
} from "./styled";
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export const Cards: React.FC = () => {
    const listings = useSelector((state: any) => state.listing.list);
    const fetchingList = useSelector(
        (state: any) => state.listing.fetchingList,
    );
    return (
        <Container className="my-5 flex-grow-1">
            {!fetchingList && (
                <Row>
                    {listings.map((card: any) => (
                        <Col md={4} key={card.uniqueCode} className="mb-3">
                            <CardContainer>
                                <Image src={card.image} />
                                <DetailsContainer>
                                    <Title>{card.title}</Title>
                                    <Description>{card.subtitle}</Description>
                                    <Rarity color={card.rarity.color}>
                                        {card.rarity.name}
                                    </Rarity>
                                    <Tags>{card.collection.name}</Tags>
                                    <PriceContainer>
                                        <PriceLabel>Starting at:</PriceLabel>
                                        <Price>${card.lowestPrice}</Price>
                                    </PriceContainer>
                                </DetailsContainer>
                            </CardContainer>
                        </Col>
                    ))}
                </Row>
            )}
            {fetchingList && <Spinner animation="grow" variant="success" />}
        </Container>
    );
};
