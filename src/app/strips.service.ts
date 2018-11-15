import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Strip } from './strip';

@Injectable({
  providedIn: 'root'
})
export class StripsService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getAllStrips() {
    return this._db.collection('strips').valueChanges();
  }

  getStrip(id: number) {
    return this._db.doc<Strip>(`strips/${id}`).valueChanges();
  }
}
