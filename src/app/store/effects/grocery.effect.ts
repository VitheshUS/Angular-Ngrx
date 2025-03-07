import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService } from '../../services/grocery.service';
import { groceryActions } from '../actions/grocery.action';

@Injectable()
export class GroceryEffects {
    private actions$ = inject(Actions);
    private groceryService = inject(GroceryService);

    loadGroceries$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(groceryActions.loadGroceries),
            exhaustMap(() => this.groceryService.getAllGrocery()
                .pipe(
                    map(groceries => (groceryActions.loadGroceriesSuccess({ payLoad: groceries }))),
                    catchError(() => of(groceryActions.loadGroceriesFailure))
                ))
        );
    });
}