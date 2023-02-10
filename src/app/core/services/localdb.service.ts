import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIMethod } from 'src/app/shared/constants/app-constants';
import { LoginResponseModel } from 'src/app/shared/models/response/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {

  constructor() { }

  getFromLocalStorage(key : string)
  {
    let data = localStorage.getItem(key);
    return data && (data != null) ? JSON.parse(data) : "";
  }

  putIntoLocalStorage(key : string, data : any)
  {
      localStorage.setItem("loginDetails",JSON.stringify(data));
  }
}
