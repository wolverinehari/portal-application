import { Injectable } from '@angular/core';
import {tabledataObject} from './constant'
import {existingApplicantObj} from './constant'

import {ExistingApplicant} from './existingApplicantData'
import {Element} from './tableData'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConstantdataService {
  alltabledataObject:Element[]=tabledataObject
  constructor() { }
   // getHeroes(): Observable<Element[]> {
  //  return of(tabledataObject);
  // }
  getExistingApplicant():ExistingApplicant[]{
    return existingApplicantObj;
  }
  getTables(): Element[] {
    return this.alltabledataObject;
  } 
  setTables(data): void {
     this.alltabledataObject.push(data);
     console.log(this.alltabledataObject)
  } 
}
