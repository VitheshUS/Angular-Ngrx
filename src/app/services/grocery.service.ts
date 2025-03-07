import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { groceryApi } from '../environment/api.environment';
import { Observable } from 'rxjs';
import { Grocery } from '../models/grocery.models';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {
  baseUrl: string = groceryApi;

  constructor(private http: HttpClient) { }

  getAllGrocery(): Observable<Grocery[]> {
    return this.http.get<Grocery[]>(this.baseUrl);
  }
}
