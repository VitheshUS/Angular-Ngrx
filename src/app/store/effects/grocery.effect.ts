import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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

// Create effect follow observable chaining
/**
 * When an action is dispatched in the sense when an action instance is dispatched into the action stream. the reducers and 
 * the effect will keep listning to that event and react if the actions defined matches
 * in this case the reducers wont recognise the action because we wont define it there but we will define it in effects
 * What effect basically does is get the action do some side effects and redispatch a new action into the action stream
 * so that the reducer can react to it.
 * 
 * Here what the effect is expecting is an observable that return a observable that emits an action.
 * In the above code it may look like that the observable is returning an observable but what is actually happeing is observable flattening
 * After the observable chaining the observable get flattened and gets converted into a single obserevable
 * create effect is not expecting an action directly but an observable that returns an action
 * 
 * So inorder to that we firstoffall need an action observable that listens to action stream and emits the actions.
 */