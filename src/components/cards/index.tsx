import React from "react";
import data from "@public/meta.json";
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

export const Cards: React.FC = () => {
    return (
        <Container className="my-5 flex-grow-1">
            <Row>
                {(data?.listings ?? []).map((card) => (
                    <Col md={4} key={card.uniqueCode} className="mb-3">
                        <CardContainer>
                            <Image src={card.image} />
                            <DetailsContainer>
                                <Title>{card.title}</Title>
                                <Description>{card.subtitle}</Description>
                                <Rarity>{card.rarity.name}</Rarity>
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
        </Container>
    );
};
