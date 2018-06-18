import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {

  }

  /* This method will set a key value for a new search being made andwould update key, value if there is already a record present with the same key */

  setKey(key, value) {
    window.localStorage[key] = JSON.stringify(value);
  }

  /* this method will be used to get the details of the history in the form of key,value pair from local storage  */
  
  get(key) {
    const data = window.localStorage[key];
    if (data) {
      return JSON.parse(window.localStorage[key]);
    } else {
      return '';
    }
  }
}
