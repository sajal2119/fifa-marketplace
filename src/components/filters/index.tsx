import { Tabs } from "@components/tabs";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { updateValueInSearch } from "@redux/utils/functions";
import { FilterLabel, FilterUnit, Wrapper } from "./styled";
import data from "@public/meta.json";
import {
    CHANGE_PACK_SLUGS,
    CHANGE_RARITIES,
    LIST_FETCHED,
} from "@redux/actions/actionTypes";

export const Filters: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const rarities = useSelector((state: any) => state.listing.rarities);
    const packSlugs = useSelector((state: any) => state.listing.packSlugs);
    const onChange = async (name: string, value: string) => {
        const payload: Record<string, any> = {};
        const existingList = name === "rarities" ? rarities : packSlugs;
        let newValue = [];
        if (existingList && existingList.length > 0) {
            if (existingList.indexOf(value) > -1) {
                newValue = existingList.filter(
                    (item: string) => item !== value,
                );
            } else {
                newValue = [...existingList, value];
            }
        } else {
            newValue.push(value);
        }
        payload[name] = newValue;

        const params = updateValueInSearch(name, newValue, true);

        router.push({
            pathname: location.pathname,
            search: params,
        });

        dispatch({
            type: name === "rarities" ? CHANGE_RARITIES : CHANGE_PACK_SLUGS,
            payload,
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
    return (
        <Wrapper>
            <FilterUnit>
                <FilterLabel>Price</FilterLabel>
            </FilterUnit>
            <FilterUnit>
                <FilterLabel>Rarity</FilterLabel>
                <Tabs
                    options={[
                        {
                            color: "#27CFF7",
                            name: "Common",
                            code: "10",
                        },
                        {
                            color: "#FE36FE",
                            name: "Rare",
                            code: "20",
                        },
                        {
                            color: "#8055FE",
                            name: "Epic",
                            code: "30",
                        },
                        {
                            color: "#DDBE5E",
                            name: "Iconic",
                            code: "40",
                        },
                        {
                            color: "rgb(169, 110, 0)",
                            name: "Commemorative",
                            code: "50",
                        },
                    ]}
                    selectedUnits={rarities}
                    id="rarities"
                    onSelect={onChange}
                />
            </FilterUnit>
            <FilterUnit>
                <FilterLabel>Drops</FilterLabel>
                <Tabs
                    className="rectangular-tabs"
                    id="packSlugs"
                    options={[
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Genesis Drop",
                            code: "genesis-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Archive Drop",
                            code: "archive-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Curator Collection - South American Flair",
                            code: "sa-flair-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Fifa Archives 2 Drop",
                            code: "archives-2-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Trophies",
                            code: "trophies-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Curator Collection - 80's and 90's",
                            code: "80s-90s-drop",
                        },
                        {
                            color: "rgb(233, 60, 172)",
                            name: "Celebration, Fans & Qatar",
                            code: "trophies-drop-2",
                        },
                    ]}
                    selectedUnits={packSlugs}
                    onSelect={onChange}
                />
            </FilterUnit>
        </Wrapper>
    );
};
