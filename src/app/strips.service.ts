import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StripsService {

  constructor(
    private _db: AngularFirestore
  ) { }

  getAllStrips() {
    console.log('service', this._db.collection('items').valueChanges());
    return this._db.collection('strips').valueChanges();
  }
}
