import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputUnit, Label, Wrapper } from "./styled";
import data from "@public/meta.json";
import { updateValueInQuery } from "@redux/utils/functions";
import { SEARCH_TERM, SEARCH_TERM_FILTER } from "@redux/defaults";
import { CHANGE_SEARCH_TERM, LIST_FETCHED } from "@redux/actions/actionTypes";

interface OwnProps {
    className?: string;
    label?: string;
}

export const SearchInput: React.FC<OwnProps> = ({ className, label }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchTerm = useSelector((state: any) => state.listing.searchTerm);
    const [text, setText] = useState(searchTerm);

    const onChange = async (event: React.FormEvent<HTMLInputElement>) => {
        const eventKey = text;

        if (event.charCode == 13) {
            const name = SEARCH_TERM_FILTER;
            const params = updateValueInQuery(name, eventKey);

            router.push({
                pathname: location.pathname,
                search: params,
            });

            dispatch({
                type: CHANGE_SEARCH_TERM,
                payload: {
                    pageNumber: eventKey,
                },
            });

            setTimeout(() => {
                dispatch({
                    type: LIST_FETCHED,
                    payload: {
                        ...data,
                    },
                });
            }, 1000);
        }
    };

    return (
        <Wrapper className={className || ""}>
            {label && Label.length > 0 && <Label>{label}</Label>}
            <InputUnit
                value={text}
                placeholder={`e.g. "Netherlands" or "USA"`}
                onKeyPress={onChange}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                    setText(event.target.value);
                }}
            />
        </Wrapper>
    );
};
