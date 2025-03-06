import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../models/grocery.models";

export const addToBucket = createAction(
    '[bucket] Add',
    props<{ payLoad: Bucket }>()
)

export const removeFromBucket = createAction(
    '[bucket] Remove',
    props<{ payLoad: { id: number } }>()
)

// here Add in "[bucket] Add" is just for debugging and orgainzation and the code still works without it
/**
 * when we are creating the action we use createAction keyword and we pass the reduer name and payload or parameters type.
 * 
 * 
 * 
 * 
 * 
 * 
 */