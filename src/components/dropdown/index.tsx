import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DropdownWrapper,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "./styled";
import { useRouter } from "next/router";
import { updateValueInQuery } from "src/redux/utils/functions";
import { SORT_BY, SORT_BY_FILTER, SORT_DIRECTION } from "src/redux/defaults";
import { changeFilters } from "@redux/actions";
import { CHANGE_SORT_BY } from "@redux/actions/actionTypes";

interface EnumSortItem {
    id: number | string;
    label: string;
    key: string | number;
}

interface OwnProps {
    className?: string;
    options: Array<EnumSortItem>;
}

export const CustomDropdown: React.FC<OwnProps> = ({
    className,
    options = [],
}) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const selectedSorting = useSelector((state: any) => state.listing.sortBy);
    const selectedOption = options.filter(
        (option) => selectedSorting === option.id,
    );
    const onChange = async (eventKey: string | null) => {
        const name = SORT_BY_FILTER;
        const params = updateValueInQuery(name, eventKey || SORT_BY);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        await dispatch(
            changeFilters(
                CHANGE_SORT_BY,
                {
                    sortBy: eventKey || SORT_BY,
                    sortDirection: SORT_DIRECTION || "",
                },
                params || "",
            ),
        );
    };

    return (
        <DropdownWrapper className={className || ""} onSelect={onChange}>
            <DropdownToggle variant="success" id="custom-dropdown">
                {selectedOption && selectedOption[0] && selectedOption[0].label}
            </DropdownToggle>
            <DropdownMenu>
                {options.map((option) => (
                    <DropdownItem
                        eventKey={option.key}
                        key={option.id}
                        active={selectedSorting === option.id}
                    >
                        {option.label}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </DropdownWrapper>
    );
};
