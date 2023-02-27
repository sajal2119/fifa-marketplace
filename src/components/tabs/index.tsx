import React from "react";
import { BadgeUnit, Wrapper } from "./styled";

interface EnumTabItem {
    code: string;
    color: string;
    name: string;
}

interface OwnProps {
    className?: string;
    id: string;
    options: Array<EnumTabItem>;
    onSelect: (id: string, code: string) => any;
    selectedUnits: Array<string>;
}

export const Tabs: React.FC<OwnProps> = ({
    className,
    options = [],
    onSelect,
    selectedUnits = [],
    id = "",
}) => {
    console.log("Tabs", id, selectedUnits);
    return (
        <Wrapper className={className || ""}>
            {options.map((option) => (
                <BadgeUnit
                    color={option.color}
                    key={option.code + option.name}
                    pill
                    bg="info"
                    onClick={() => {
                        onSelect(id, option.code);
                    }}
                    filled={selectedUnits.indexOf(option.code) > -1}
                >
                    {option.name}
                </BadgeUnit>
            ))}
        </Wrapper>
    );
};
