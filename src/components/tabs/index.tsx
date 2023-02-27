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
    const formattedOptions = options.map((option) => {
        const isFilled = selectedUnits.indexOf(option.code) > -1;
        return { ...option, isFilled };
    });
    return (
        <Wrapper className={className || ""}>
            {process.browser &&
                formattedOptions.map((option) => (
                    <BadgeUnit
                        color={option.color}
                        key={option.code + option.name}
                        pill
                        bg="info"
                        onClick={() => {
                            onSelect(id, option.code);
                        }}
                        filled={option.isFilled ? 1 : 0}
                    >
                        {option.name}
                    </BadgeUnit>
                ))}
        </Wrapper>
    );
};
