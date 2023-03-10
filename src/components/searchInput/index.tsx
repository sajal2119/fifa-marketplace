import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputUnit, Label, Wrapper } from "./styled";
import { updateValueInQuery } from "@redux/utils/functions";
import { SEARCH_TERM_FILTER } from "@redux/defaults";
import { changeFilters } from "@redux/actions/listing";
import { CHANGE_SEARCH_TERM } from "@redux/actions/actionTypes";

interface OwnProps {
    className?: string;
    label?: string;
}

export const SearchInput: React.FC<OwnProps> = ({ className, label }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchTerm = useSelector((state: any) => state.listing.searchTerm);
    const [text, setText] = useState(searchTerm);

    const onChange = async (event: React.KeyboardEvent<any>) => {
        const eventKey = text;

        if (event.charCode == 13) {
            const name = SEARCH_TERM_FILTER;
            const params = updateValueInQuery(name, eventKey);

            router.push({
                pathname: location.pathname,
                search: params,
            });

            await dispatch(
                changeFilters(
                    CHANGE_SEARCH_TERM,
                    {
                        searchTerm: eventKey,
                    },
                    params || "",
                ),
            );
        }
    };

    return (
        <Wrapper className={className || ""}>
            {label && Label.length > 0 && <Label>{label}</Label>}
            <InputUnit
                value={text}
                placeholder={`e.g. "Netherlands" or "USA"`}
                onKeyPress={onChange}
                onChange={(event: React.FormEvent) => {
                    const target = event.target as HTMLInputElement;
                    if (target) {
                        setText(target.value);
                    }
                }}
            />
        </Wrapper>
    );
};
