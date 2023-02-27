import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaginationUnit, PaginationWrap, Wrapper } from "./styled";
import data from "@public/meta.json";
import { updateValueInSearch } from "@redux/utils/functions";
import { PAGE_NUMBER, PAGE_NUMBER_FILTER } from "@redux/defaults";
import { CHANGE_PAGE_NUMBER, LIST_FETCHED } from "@redux/actions/actionTypes";

interface OwnProps {
    className?: string;
}

export const Pagination: React.FC<OwnProps> = ({ className }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const total = useSelector((state: any) => state.listing.total);
    const pageSize = useSelector((state: any) => state.listing.pageSize);
    const pageNumber = useSelector((state: any) => state.listing.pageNumber);

    const onChange = async (eventKey: string | null) => {
        const name = PAGE_NUMBER_FILTER;
        const params = updateValueInSearch(name, eventKey || PAGE_NUMBER);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        dispatch({
            type: CHANGE_PAGE_NUMBER,
            payload: {
                pageNumber: eventKey || PAGE_NUMBER,
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
    };

    const items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <PaginationUnit
                onClick={() => {
                    onChange(number);
                }}
                key={number}
                active={number === pageNumber || number === Number(pageNumber)}
            >
                {number}
            </PaginationUnit>,
        );
    }
    return (
        <Wrapper className={className || ""}>
            {process.browser && <PaginationWrap>{items}</PaginationWrap>}
        </Wrapper>
    );
};
