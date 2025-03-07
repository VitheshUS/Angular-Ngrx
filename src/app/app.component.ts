import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './components/grocery/grocery.component';
import { BucketComponent } from './components/bucket/bucket.component';
import { Store } from '@ngrx/store';
import { Grocery } from './models/grocery.models';
import { groceryActions } from './store/actions/grocery.action';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryComponent, BucketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private store: Store<{ groceries: Grocery[] }>) {
    this.store.dispatch(groceryActions.loadGroceries());
  }
}
