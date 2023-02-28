import { useRouter } from "next/router";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaginationUnit, PaginationWrap, Wrapper } from "./styled";
import { updateValueInQuery } from "@redux/utils/functions";
import { PAGE_NUMBER, PAGE_NUMBER_FILTER } from "@redux/defaults";
import { CHANGE_PAGE_NUMBER } from "@redux/actions/actionTypes";
import { changeFilters } from "@redux/actions";

interface OwnProps {
    className?: string;
}

export const Pagination: React.FC<OwnProps> = ({ className }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pageNumber = useSelector((state: any) => state.listing.pageNumber);

    const onChange = async (eventKey: string | number | null) => {
        const name = PAGE_NUMBER_FILTER;
        const params = updateValueInQuery(name, eventKey || PAGE_NUMBER);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        await dispatch(
            changeFilters(
                CHANGE_PAGE_NUMBER,
                {
                    pageNumber: eventKey || PAGE_NUMBER,
                },
                params || "",
            ),
        );
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
