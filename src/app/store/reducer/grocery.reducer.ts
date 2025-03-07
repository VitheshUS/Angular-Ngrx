import { createReducer, on } from "@ngrx/store";
import { Grocery } from "../../models/grocery.models";
import { groceryActions } from "../actions/grocery.action";

const initialState: Grocery[] = [];

export const groceryReducer = createReducer(initialState,
    on(groceryActions.loadGroceriesSuccess, (state, action) => {
        return action.payLoad;
    }),
    on(groceryActions.loadGroceriesFailure, (state, action) => {
        return [];
    })
);