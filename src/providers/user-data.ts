import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';
import{Postjob}from'../models/Postjob'


/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserDataProvider {
	current:User
  JOBCATEGORY:Postjob

   

  constructor(public http: Http) {
    console.log('Hello UserData Provider');
  }
  showData(){console.log(this.current);}
  newData(){

  	this.current = new User();
    console.log('New Data!');
  }
onlinedata(){
  
}



   JobCategorydata()
   {
        this.JOBCATEGORY= new Postjob();
   }


}
