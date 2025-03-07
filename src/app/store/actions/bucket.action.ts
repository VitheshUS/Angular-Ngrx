import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../models/grocery.models";

export const addToBucket = createAction(
    '[bucket] Add',
    props<{ payLoad: Bucket }>()
)

export const removeFromBucket = createAction(
    '[bucket] Remove', // this is a key and this must be unique across all the actions
    props<{ payLoad: { id: number } }>()
)

/**
 * when we are creating the action we use createAction keyword and we pass the reducer name and payload or parameters type.
 * 
 * 
 * 
 * 
 * 
 * 
 */