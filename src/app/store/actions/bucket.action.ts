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
 * By creating this internally it will create a function which s going to create an action
 * It will create a json instance that has the label and payload defination
 * This will be returned to the called method
 * 
 * props is written like a function because it will return props metadata which can be used to build the action instance
 */