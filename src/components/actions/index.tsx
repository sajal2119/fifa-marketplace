import React from "react";
import { ActionsContainer, ActionLink, ActionButton } from "./styled";
import { TicketIcon } from "@components/icons";

interface OwnProps {
    className: string;
}

export const Actions: React.FC<OwnProps> = ({ className }) => {
    return (
        <ActionsContainer className={className}>
            <TicketIcon color="white" width="24" height="24" />
            <ActionLink
                variant="link"
                size="lg"
                href="https://pankod.github.io/superplate/"
                target="_blank"
            >
                Sign in
            </ActionLink>
            <ActionButton
                variant="primary"
                size="lg"
                href="https://pankod.github.io/superplate/"
                target="_blank"
            >
                JOIN NOW
            </ActionButton>
        </ActionsContainer>
    );
};
