import React from "react";
import { Button as BaseButton } from "react-bootstrap";
import { Container } from "./styled";

export type IButton = any;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return (
        <Container>
            <BaseButton {...rest} />
        </Container>
    );
};
