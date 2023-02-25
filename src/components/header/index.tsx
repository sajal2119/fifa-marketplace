import React from "react";

import { Logo } from "@components";
import { Navigation } from "./navigation";
import { Actions } from "./actions";
import { Wrapper } from "./styled";

export const Header: React.FC = () => {
    return (
        <Wrapper>
            <Logo />
            <Navigation />
            <Actions />
        </Wrapper>
    );
};
