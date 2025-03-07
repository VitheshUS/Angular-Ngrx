import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../models/grocery.models";

export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryType = createSelector(
    selectGroceries,
    (state) => state.filter(item => item.type == "fruit")
)