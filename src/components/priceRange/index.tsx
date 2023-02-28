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
import { updateObjectInQuery } from "@redux/utils/functions";
import {
    MIN_PRICE,
    MAX_PRICE,
    MIN_PRICE_FILTER,
    MAX_PRICE_FILTER,
} from "@redux/defaults";
import { CHANGE_PRICE_RANGE } from "@redux/actions/actionTypes";
import { changeFilters } from "@redux/actions";

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
        const minPrice = Number(min);
        const maxPrice = Number(max);
        const queryParams: Record<string, number> = {};
        queryParams[MIN_PRICE_FILTER] = minPrice;
        queryParams[MAX_PRICE_FILTER] = maxPrice;

        const params = updateObjectInQuery(queryParams);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        await dispatch(
            changeFilters(
                CHANGE_PRICE_RANGE,
                {
                    minPrice,
                    maxPrice,
                },
                params || "",
            ),
        );
    };

    let isApplyDisabled = false;

    if (Number(min) < 0 || Number(max) < 0) {
        isApplyDisabled = true;
    } else if (Number(min) > Number(max)) {
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
