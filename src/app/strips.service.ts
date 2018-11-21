import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';
import { Strip } from './strip';
import OrderByDirection = firebase.firestore.OrderByDirection;

@Injectable({
  providedIn: 'root'
})
export class StripsService {
  // https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
  private _defaultOrderBy = new BehaviorSubject('desc');
  private _defaultLimit = new BehaviorSubject(2);
  orderBy = this._defaultOrderBy.asObservable();
  limit = this._defaultLimit.asObservable();

  constructor(
    private _db: AngularFirestore
  ) { }

  getStrips(limit?: number, orderBy?: OrderByDirection) {
    const stripsCollection = this._db.collection('strips', ref => {
      if (limit) {
        return ref.orderBy('order', orderBy).limit(limit);
      } else {
        return ref.orderBy('order', orderBy);
      }
    });
    return stripsCollection.valueChanges();
  }

  getStrip(id: number) {
    return this._db.doc<Strip>(`strips/${id}`).valueChanges();
  }

  changeOrderBy(orderBy) {
    this._defaultOrderBy.next(orderBy);
    console.log('default', this._defaultOrderBy);
  }
}
