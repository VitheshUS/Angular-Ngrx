import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Grocery } from '../../models/grocery.models';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { addToBucket } from '../../store/actions/bucket.action';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent {

  groceries$?: Observable<Grocery[]>;

  constructor(private store: Store<{ groceries: Grocery[] }>) {
    this.groceries$ = store.select("groceries")
  }

  increment(item: Grocery) {
    const payLoad = {
      id: item.id,
      name: item.name,
      type: item.type,
      quantity: 1
    }
    this.store.dispatch(addToBucket({ payLoad: payLoad }))
  }
}
