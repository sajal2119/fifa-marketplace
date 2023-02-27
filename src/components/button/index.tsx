import React from "react";
import { Button as BaseButton } from "react-bootstrap";
import { Wrapper } from "./styled";

export type IButton = any;

export const Button: React.FC<IButton> = ({ ...rest }) => {
    return (
        <Wrapper>
            <BaseButton {...rest} />
        </Wrapper>
    );
};
