import { Injectable } from '@angular/core';
import {tabledataObject} from './constant'
import {existingApplicantObj} from './constant'
import{loginContent} from './constant'

import {ExistingApplicant} from './existingApplicantData'
import {Element} from './tableData'

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConstantdataService {
  alltabledataObject:Element[]=tabledataObject
  loginData:any=loginContent;
  selectedlogin:any=[{
    username:'user1',
    password:'user1',
    action:'default1'
  }];
  constructor() { }
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
    checkvalidLogin(data:any):any{
    this.selectedlogin=this.loginData.filter(item=>item.username==data.username && item.password==data.password)
    return this.selectedlogin;
  }
}
