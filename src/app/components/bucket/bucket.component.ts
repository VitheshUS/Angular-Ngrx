import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Bucket } from '../../models/grocery.models';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { removeFromBucket } from '../../store/actions/bucket.action';
import { bucketSelector } from '../../store/selectors/bucket.selectors';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.scss'
})
export class BucketComponent {

  bucket$: Observable<Bucket[]>;

  buckets: Bucket[] = [];

  constructor(private store: Store<{ bucket: Bucket[] }>) {
    
    this.bucket$ = store.select(bucketSelector);
    this.bucket$.subscribe(data => this.buckets = data);

  }

  decrement(bucket: Bucket) {
    const payLoad = {
      id: bucket.id
    }
    this.store.dispatch(removeFromBucket({ payLoad: payLoad }));
  }
}
