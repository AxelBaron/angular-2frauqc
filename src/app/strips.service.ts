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
  private _defaultTotalStrips = new BehaviorSubject(0);
  orderBy = this._defaultOrderBy.asObservable();
  limit = this._defaultLimit.asObservable();
  totalStrips = this._defaultTotalStrips.asObservable();

  constructor(
    private _db: AngularFirestore
  ) { }

  getStrips(limit?: number, orderBy?: OrderByDirection) {
    const stripsCollection = this._db.collection<Strip>('strips', ref => {
      if (limit) {
        return ref.orderBy('order', orderBy).limit(limit);
      } else {
        return ref.orderBy('order', orderBy);
      }
    });
    return stripsCollection.valueChanges();
  }

  getNextStrips(position?: number, orderBy?: OrderByDirection, limit?: number) {
    return this._db.collection('strips', ref => ref.orderBy('order', orderBy).startAfter(position).limit(limit)).valueChanges();
  }

  getStrip(id: number) {
    return this._db.doc<Strip>(`strips/${id}`).valueChanges();
  }

  changeOrderBy(orderBy) {
    this._defaultOrderBy.next(orderBy);
  }

  changeLimit(limit) {
    this._defaultLimit.next(limit);
  }

  resetLimit() {
    this._defaultLimit.next(2);
  }

  getTotalStrips() {
    this.getStrips().subscribe(result => {
      this._defaultTotalStrips.next(result.length);
    });
  }
}
