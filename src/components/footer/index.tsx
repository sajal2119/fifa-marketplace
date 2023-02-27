import { Logo } from "@components/logo";
import React from "react";

import {
    Wrapper,
    LinksWrapper,
    Links,
    PoweredBy,
    PoweredByImg,
    SectionWrapper,
} from "./styled";

export const Footer: React.FC = () => {
    return (
        <Wrapper className="text-center py-4">
            <SectionWrapper>
                <Logo />
                <LinksWrapper>
                    <Links>Terms of Service</Links>
                    <Links>Privacy Policy</Links>
                    <Links>Cookie Settings</Links>
                    <Links className="text-only">
                        Copyright © 1994-2022 FIFA. All Rights Reserved
                    </Links>
                    <Links className="text-only">Version v1.21.2</Links>
                </LinksWrapper>
            </SectionWrapper>
            <PoweredBy>
                <p>Powered By</p>
                <PoweredByImg src="https://collect.fifa.com/images/logos/algorand.svg" />
                <p>The Official Blockchain Platform of FIFA</p>
            </PoweredBy>
        </Wrapper>
    );
};
