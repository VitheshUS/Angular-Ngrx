import { createAction, createFeatureSelector, createSelector, State } from "@ngrx/store";
import { Bucket } from "../../models/grocery.models";

export const bucketFeatureSeletor = createFeatureSelector<Bucket[]>('bucket');

export const bucketSelector = createSelector(
    bucketFeatureSeletor,
    (state) => state
);