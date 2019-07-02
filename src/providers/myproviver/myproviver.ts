import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyproviverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MyproviverProvider {
  name : string = 'NewYork';
 

  constructor(public http: Http) {
    console.log('Hello MyproviverProvider Provider');
  }

  //getting api
  education(){
    return  this.http.get("https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=A68IXGr9tjr3qn3O2NxIWog7mCGIVwWLn32MsV2i&location=NewYork").map(res => res.json());
     
  }
  

}
