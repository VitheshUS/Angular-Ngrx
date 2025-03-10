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

/**
 * selector is a componet that comes between the component and store
 * Usually we can select the store directly from the componet but that is not recommeded becuse that dosent follow memoization 
 * We cant apply filtering as well
 * 
 * The store.select wants selector or the direct store name
 * Here in the above code we can use selector for filtering as well
 * Feature selector is responsible for fetching the store slice
 * and then filter it
 * 
 * By any chance is any other slice also gets updated then all the selectors will rerun but because of memoization it can detect 
 * if the store had changed or not
 * So store is prefered
 */