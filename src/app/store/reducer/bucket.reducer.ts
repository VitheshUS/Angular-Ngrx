import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../models/grocery.models";
import { addToBucket, removeFromBucket } from "../actions/bucket.action";

const initialState: Bucket[] = [];

export const bucketReducer = createReducer(
    initialState,
    on(addToBucket, (state, action) => {
        const bucket = state.find(item => item.id === action.payLoad.id);
        if (bucket) {
            return state.map(item => {
                if (item.id === bucket.id)
                    return { ...item, quantity: item.quantity + action.payLoad.quantity };
                else
                    return item;
            })
        }
        else
            return [...state, action.payLoad]
    }),
    on(removeFromBucket, (state, action) => {
        const bucket = state.find(item => item.id === action.payLoad.id);
        if (bucket) {
            //if quantity is 1 then remove else just reduce it
            if (bucket.quantity <= 1)
                return state.filter(item => item.id !== bucket.id);
            else return state.map(item => {
                if (item.id === bucket.id)
                    return { ...item, quantity: bucket.quantity - 1 };
                else return item;
            })
        }
        else
            return state;
    })
);

/**
 * Here after we create action for a reducer we have to mention that action in the reducer
 * The reducer will listen to this action and will update the state accordingly
 */