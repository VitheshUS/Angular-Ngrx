import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../models/grocery.models";

export const selectGrocery = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceries = createSelector(
    selectGrocery,
    (state) => state
)

export const selectGroceryType = (type: string) => createSelector(
    selectGrocery,
    (state) => type ? state.filter(item => item.type == type) : state
)