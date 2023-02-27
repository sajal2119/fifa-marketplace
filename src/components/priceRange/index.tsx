import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    ActionButton,
    InputUnit,
    Label,
    Wrapper,
    CustomInputGroup,
    CustomInputGroupText,
} from "./styled";
import data from "@public/meta.json";
import { updateObjectInQuery } from "@redux/utils/functions";
import {
    MIN_PRICE,
    MAX_PRICE,
    MIN_PRICE_FILTER,
    MAX_PRICE_FILTER,
} from "@redux/defaults";
import { CHANGE_PRICE_RANGE, LIST_FETCHED } from "@redux/actions/actionTypes";

interface OwnProps {
    className?: string;
}

export const PriceRange: React.FC<OwnProps> = ({ className }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const minPrice = useSelector((state: any) => state.listing.minPrice);
    const maxPrice = useSelector((state: any) => state.listing.maxPrice);
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    const onChange = async () => {
        const minPrice = min;
        const maxPrice = max;
        const queryParams: Record<string, number> = {};
        queryParams[MIN_PRICE_FILTER] = Number(minPrice);
        queryParams[MAX_PRICE_FILTER] = Number(maxPrice);

        const params = updateObjectInQuery(queryParams);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        dispatch({
            type: CHANGE_PRICE_RANGE,
            payload: {
                minPrice,
                maxPrice,
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

    let isApplyDisabled = false;

    if (min < 0 || max < 0) {
        isApplyDisabled = true;
    } else if (min > max) {
        isApplyDisabled = true;
    }

    return (
        <Wrapper className={className || ""}>
            <Label>Low</Label>
            <CustomInputGroup>
                <CustomInputGroupText id="basic-addon1">$</CustomInputGroupText>
                <InputUnit
                    type="number"
                    value={min}
                    placeholder={MIN_PRICE}
                    onChange={(event: React.FormEvent) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                            setMin(target.value);
                        }
                    }}
                    min="0"
                    max={max - 1}
                />
            </CustomInputGroup>
            <Label>High</Label>
            <CustomInputGroup>
                <CustomInputGroupText id="basic-addon1">$</CustomInputGroupText>
                <InputUnit
                    type="number"
                    value={max}
                    min={min + 1}
                    placeholder={MAX_PRICE}
                    onChange={(event: React.FormEvent) => {
                        const target = event.target as HTMLInputElement;
                        if (target) {
                            setMax(target.value);
                        }
                    }}
                />
            </CustomInputGroup>
            <ActionButton
                variant="primary"
                size="lg"
                onClick={onChange}
                disabled={isApplyDisabled}
            >
                APPLY
            </ActionButton>
        </Wrapper>
    );
};
