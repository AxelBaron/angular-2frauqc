import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripService {
  id: number = 35;
  title: string = 'La tasse de lait';
  image: string = 'http://2francaisauquebec.com/imgs/bds/fr/35.jpg';

  constructor() { }
}
