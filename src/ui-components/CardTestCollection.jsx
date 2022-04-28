/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Test } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardB from "./CardB";
import { Collection } from "@aws-amplify/ui-react";
export default function CardTestCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Test,
        }).items;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "CardTestCollection")}
    >
      {(item, index) => (
        <CardB
          test={item}
          height="auto"
          width="auto"
          margin="1px 1px 1px 1px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardB>
      )}
    </Collection>
  );
}
