import { createReducer } from "@ngrx/store";
import { Grocery } from "../../models/grocery.models";

const initialState: Grocery[] = [
    {
        id: 1,
        name: "Apple",
        type: "fruit"
    },
    {
        id: 2,
        name: "Banana",
        type: "fruit"
    },
    {
        id: 3,
        name: "Chips",
        type: "snack"
    }
];

export const groceryReducer = createReducer(initialState);